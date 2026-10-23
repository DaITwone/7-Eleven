import { createHash } from "node:crypto";
import { prisma } from "../_lib/prisma.js";

function send(res, status, data) {
  return res.status(status).json(data);
}

function createRevision(entries, inventory) {
  const normalizedEntries = entries
    .map(({ productId, quantity, createdAt }) => ({
      productId,
      quantity,
      createdAt: new Date(createdAt).toISOString(),
    }))
    .sort((left, right) =>
      JSON.stringify(left).localeCompare(JSON.stringify(right)),
    );
  const normalizedInventory = inventory
    .map(({ id, quantity }) => [id, quantity])
    .sort(([left], [right]) => left.localeCompare(right));

  return createHash("sha256")
    .update(JSON.stringify([normalizedEntries, normalizedInventory]))
    .digest("hex");
}

async function readSnapshot(client) {
  const [entries, inventory] = await Promise.all([
    client.mtoEntry.findMany({
      select: { productId: true, quantity: true, createdAt: true },
    }),
    client.mtoSystemInventory.findMany({
      select: { id: true, quantity: true },
    }),
  ]);
  return { entries, inventory };
}

function parseBody(body) {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return null;
    }
  }
  return body;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "GET") {
    try {
      const { entries, inventory } = await prisma.$transaction(
        (transaction) => readSnapshot(transaction),
        { isolationLevel: "RepeatableRead" },
      );
      return send(res, 200, {
        entries: entries.map(({ productId, quantity, createdAt }) => ({
          productId,
          quantity,
          createdAt,
        })),
        systemInventory: Object.fromEntries(
          inventory.map(({ id, quantity }) => [id, quantity]),
        ),
        revision: createRevision(entries, inventory),
      });
    } catch (error) {
      console.error("Unable to load MTO inventory", error);
      return send(res, 500, { error: "Unable to load inventory." });
    }
  }

  if (req.method === "PUT") {
    const body = parseBody(req.body);
    const entries = body?.entries;
    const systemInventory = body?.systemInventory;
    const expectedRevision = body?.revision;

    if (
      typeof expectedRevision !== "string" ||
      !/^[a-f0-9]{64}$/.test(expectedRevision) ||
      !Array.isArray(entries) ||
      !entries.every(
        (entry) =>
          typeof entry?.productId === "string" &&
          Number.isFinite(entry.quantity) &&
          entry.quantity > 0 &&
          (entry.createdAt === undefined ||
            (typeof entry.createdAt === "string" &&
              Number.isFinite(Date.parse(entry.createdAt)))),
      ) ||
      systemInventory === null ||
      typeof systemInventory !== "object" ||
      Array.isArray(systemInventory) ||
      !Object.entries(systemInventory).every(
        ([id, quantity]) => id && Number.isFinite(quantity) && quantity >= 0,
      )
    ) {
      return send(res, 400, { error: "Invalid inventory data." });
    }

    try {
      const result = await prisma.$transaction(
        async (transaction) => {
          const current = await readSnapshot(transaction);
          if (createRevision(current.entries, current.inventory) !== expectedRevision)
            return null;

          await transaction.mtoEntry.deleteMany();
          if (entries.length) {
            await transaction.mtoEntry.createMany({
              data: entries.map(({ productId, quantity, createdAt }) => ({
                productId,
                quantity,
                ...(createdAt ? { createdAt: new Date(createdAt) } : {}),
              })),
            });
          }

          await transaction.mtoSystemInventory.deleteMany();
          const inventoryRows = Object.entries(systemInventory);
          if (inventoryRows.length) {
            await transaction.mtoSystemInventory.createMany({
              data: inventoryRows.map(([id, quantity]) => ({ id, quantity })),
            });
          }

          const saved = await readSnapshot(transaction);
          return createRevision(saved.entries, saved.inventory);
        },
        { isolationLevel: "Serializable" },
      );

      if (!result)
        return send(res, 409, {
          error: "Inventory changed since it was loaded. Reload before saving.",
        });
      return send(res, 200, { ok: true, revision: result });
    } catch (error) {
      if (error?.code === "P2034")
        return send(res, 409, {
          error: "Inventory changed since it was loaded. Reload before saving.",
        });
      console.error("Unable to save MTO inventory", error);
      return send(res, 500, { error: "Unable to save inventory." });
    }
  }

  res.setHeader("Allow", "GET, PUT");
  return send(res, 405, { error: "Method not allowed." });
}

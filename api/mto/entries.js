import { prisma } from "../_lib/prisma.js";

function send(res, status, data) {
  return res.status(status).json(data);
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
      const [entries, inventory] = await Promise.all([
        prisma.mtoEntry.findMany({ orderBy: { createdAt: "asc" } }),
        prisma.mtoSystemInventory.findMany(),
      ]);
      return send(res, 200, {
        entries: entries.map(({ productId, quantity, createdAt }) => ({
          productId,
          quantity,
          createdAt,
        })),
        systemInventory: Object.fromEntries(
          inventory.map(({ id, quantity }) => [id, quantity]),
        ),
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

    if (
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
      await prisma.$transaction([
        prisma.mtoEntry.deleteMany(),
        prisma.mtoEntry.createMany({
          data: entries.map(({ productId, quantity, createdAt }) => ({
            productId,
            quantity,
            ...(createdAt ? { createdAt: new Date(createdAt) } : {}),
          })),
        }),
        prisma.mtoSystemInventory.deleteMany(),
        ...(Object.entries(systemInventory).length
          ? [
              prisma.mtoSystemInventory.createMany({
                data: Object.entries(systemInventory).map(([id, quantity]) => ({
                  id,
                  quantity,
                })),
              }),
            ]
          : []),
      ]);
      return send(res, 200, { ok: true });
    } catch (error) {
      console.error("Unable to save MTO inventory", error);
      return send(res, 500, { error: "Unable to save inventory." });
    }
  }

  res.setHeader("Allow", "GET, PUT");
  return send(res, 405, { error: "Method not allowed." });
}

import { useEffect, useMemo, useState } from "react";
import {
  ClipboardPaste,
  FileSpreadsheet,
  ImageOff,
  Plus,
  Printer,
  RotateCcw,
  Trash2,
  X,
} from "lucide-react";
import { mtoItems } from "../data/mtos";

const STORAGE_KEY = "mtoInventoryEntries";
const SYSTEM_INVENTORY_KEY = "mtoSystemInventory";
const DRAFT_STORAGE_PREFIX = "mtoQuantityDraft:";

function normalizeProductName(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function parseSystemInventory(text) {
  return text
    .split(/\r?\n/)
    .map((line) => {
      const columns = line.split(/[\t;,]/).map((value) => value.trim());
      if (columns.length < 2) return null;
      const quantityText = columns[columns.length - 1]
        .replace(/\s/g, "")
        .replace(/\.(?=\d{3}(?:\D|$))/g, "")
        .replace(",", ".");
      const quantity = Number(quantityText);
      const name = columns.slice(0, -1).join(" ").trim();
      if (
        /^(t[eê]n( s[aả]n ph[aẩ]m)?|s[oố] l[uư][oợ]ng( t[oồ]n( h[eệ] th[oố]ng)?)?)$/i.test(
          name,
        )
      )
        return null;
      return name && Number.isFinite(quantity) && quantity >= 0
        ? { name, quantity }
        : null;
    })
    .filter(Boolean);
}

function findProductMatches(name) {
  const normalized = normalizeProductName(name);
  if (!normalized) return [];
  const exact = mtoItems.filter(
    (item) => normalizeProductName(item.name) === normalized,
  );
  if (exact.length) return exact;
  const words = normalized.split(" ").filter(Boolean);
  return mtoItems.filter((item) => {
    const candidate = normalizeProductName(item.name);
    return (
      candidate.includes(normalized) ||
      normalized.includes(candidate) ||
      words.some(
        (word) => word.length >= 3 && candidate.split(" ").includes(word),
      )
    );
  });
}

function readEntries() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function readSystemInventory() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(SYSTEM_INVENTORY_KEY) ?? "null",
    );
    return saved && typeof saved === "object" ? saved : null;
  } catch {
    return null;
  }
}

function downloadExcel(rows) {
  const tableRows = rows
    .map(
      (row) =>
        `<tr><td>${row.name}</td><td>${row.systemTotal ?? ""}</td><td>${row.price ?? ""}</td><td>${row.amount ?? ""}</td><td>${row.total}</td><td>${row.systemTotal == null ? "" : row.systemTotal - row.total}</td></tr>`,
    )
    .join("");
  const workbook = `\ufeff<html><head><meta charset="utf-8"></head><body><table><thead><tr><th>Mặt hàng</th><th>Tồn hệ thống</th><th>Price</th><th>Amount</th><th>Tồn thực tế</th><th>Chênh lệch</th></tr></thead><tbody>${tableRows}</tbody></table></body></html>`;
  const blob = new Blob([workbook], {
    type: "application/vnd.ms-excel;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kiem-ke-mtos-${new Date().toISOString().slice(0, 10)}.xls`;
  link.click();
  URL.revokeObjectURL(url);
}

function MTOCard({ item, entries, onAdd, onUpdate, onRemove }) {
  const [quantity, setQuantity] = useState(
    () => localStorage.getItem(`${DRAFT_STORAGE_PREFIX}${item.id}`) ?? "",
  );
  const [imageFailed, setImageFailed] = useState(false);
  const [showEntries, setShowEntries] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);
  const total = entries.reduce((sum, value) => sum + value, 0);

  useEffect(() => {
    const storageKey = `${DRAFT_STORAGE_PREFIX}${item.id}`;
    if (quantity) localStorage.setItem(storageKey, quantity);
    else localStorage.removeItem(storageKey);
  }, [item.id, quantity]);

  const addQuantity = () => {
    const value = Number(quantity);
    if (!Number.isFinite(value) || value <= 0) return false;
    onAdd(item.id, Math.round(value));
    setQuantity("");
    return true;
  };

  return (
    <>
      <article className="overflow-hidden rounded-md border-2 border-[#008061] bg-white shadow-[3px_3px_0_0_#008061]">
        <button
          type="button"
          onClick={() => setShowInputModal(true)}
          className="relative block aspect-[4/3] w-full bg-white transition hover:bg-emerald-50"
          aria-label={`Nhập số lượng cho ${item.name}`}
        >
          {!imageFailed ? (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-contain p-3"
            />
          ) : (
            <div className="grid h-full place-items-center gap-2 p-4 text-center text-stone-400">
              <ImageOff size={28} />
              <span className="text-[10px] font-bold uppercase">
                /images/mtos/{item.id}.png
              </span>
            </div>
          )}
        </button>
        <div className="border-t-2 border-[#008061] p-3">
          <div className="flex min-h-10 items-start justify-between gap-2">
            <h2 className="text-sm font-black uppercase leading-5 text-black">
              {item.name}
            </h2>
            <button
              type="button"
              onClick={() =>
                entries.length > 0 && setShowEntries((current) => !current)
              }
              aria-label={`Tổng số lượng ${item.name}: ${total}. Nhấn để chỉnh sửa.`}
              aria-expanded={showEntries}
              className={`shrink-0 rounded-md bg-[#EE3124] px-2 py-1 text-lg font-black leading-none text-white transition ${entries.length > 0 ? "cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#EE3124]" : "cursor-default"}`}
            >
              {total}
            </button>
          </div>
          {showEntries && (
            <div className="mt-3 border-t-2 border-dashed border-slate-200 pt-2">
              <p className="mb-2 text-[10px] font-black uppercase text-stone-500">
                Lịch sử nhập
              </p>
              <div className="space-y-1.5">
                {entries.map((entry, index) => (
                  <div
                    key={`${index}-${entry}`}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-2"
                  >
                    <span className="text-[10px] font-bold text-stone-500">
                      #{index + 1}
                    </span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      defaultValue={entry}
                      aria-label={`Lần nhập ${index + 1} của ${item.name}`}
                      onBlur={(event) => {
                        const value = Number(event.target.value);
                        if (Number.isFinite(value) && value > 0)
                          onUpdate(index, Math.round(value));
                        else event.target.value = entry;
                      }}
                      className="h-8 min-w-0 rounded border border-slate-300 px-2 text-xs font-bold outline-none focus:border-[#007A3D]"
                    />
                    <button
                      type="button"
                      onClick={() => onRemove(index)}
                      aria-label={`Xóa lần nhập ${index + 1} của ${item.name}`}
                      className="grid h-8 w-8 place-items-center rounded border border-red-200 text-[#EE3124] hover:bg-red-50"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      {showInputModal && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/65 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) =>
            event.target === event.currentTarget && setShowInputModal(false)
          }
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`mto-input-${item.id}`}
            className="w-full max-w-sm overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[5px_5px_0_0_#000]"
          >
            <div className="flex items-center justify-between gap-3 border-b-2 border-black bg-[#007A3D] p-4 text-white">
              <div className="flex min-w-0 items-center gap-2">
                <h2
                  id={`mto-input-${item.id}`}
                  className="truncate text-base font-black uppercase"
                >
                  {item.name}
                </h2>
                <span className="shrink-0 rounded-md bg-[#EE3124] px-2 py-1 text-sm font-black leading-none text-white">
                  {total}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowInputModal(false)}
                className="rounded-md p-1 hover:bg-white/20"
                aria-label="Đóng"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <label className="block text-xs font-black uppercase text-black">
                Số lượng
                <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
                  <input
                    autoFocus
                    type="number"
                    min="1"
                    step="1"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && addQuantity())
                        setShowInputModal(false);
                    }}
                    placeholder="Nhập số lượng"
                    className="h-11 min-w-0 rounded-md border-2 border-black px-3 text-base font-bold outline-none focus:bg-orange-50 focus:ring-4 focus:ring-[#FF8200]/30"
                  />
                  <button
                    type="button"
                    onClick={() => addQuantity() && setShowInputModal(false)}
                    className="flex h-11 items-center justify-center gap-2 rounded-md border-2 border-black bg-[#EE3124] px-3 text-sm font-black uppercase text-white shadow-[2px_2px_0_0_#000] hover:bg-red-700"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function MTOs() {
  const [records, setRecords] = useState(readEntries);
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [inventoryText, setInventoryText] = useState("");
  const [systemInventory, setSystemInventory] = useState(null);
  const [appliedInventory, setAppliedInventory] = useState(readSystemInventory);
  const [databaseReady, setDatabaseReady] = useState(false);
  const [databaseError, setDatabaseError] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/mto/entries")
      .then(async (response) => {
        if (!response.ok) throw new Error("Không tải được dữ liệu kiểm kê.");
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        const nextRecords = {};
        for (const entry of data.entries ?? []) {
          if (!nextRecords[entry.productId]) nextRecords[entry.productId] = [];
          nextRecords[entry.productId].push(entry.quantity);
        }
        setRecords(nextRecords);
        setAppliedInventory(
          data.systemInventory && Object.keys(data.systemInventory).length
            ? data.systemInventory
            : null,
        );
        setDatabaseReady(true);
      })
      .catch((error) => {
        if (!cancelled) setDatabaseError(error.message);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!databaseReady) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    const entries = Object.entries(records).flatMap(([productId, quantities]) =>
      quantities.map((quantity) => ({ productId, quantity })),
    );
    const timer = window.setTimeout(() => {
      fetch("/api/mto/entries", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entries, systemInventory: appliedInventory ?? {} }),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Không lưu được dữ liệu lên database.");
          setDatabaseError("");
        })
        .catch((error) => setDatabaseError(error.message));
    }, 250);
    return () => window.clearTimeout(timer);
  }, [records, appliedInventory, databaseReady]);

  const importedInventory = useMemo(() => {
    if (!Array.isArray(systemInventory)) return [];
    return systemInventory.map((entry) => ({
      ...entry,
      matches: findProductMatches(entry.name),
    }));
  }, [systemInventory]);
  const rows = useMemo(
    () =>
      mtoItems.map((item) => {
        const entries = records[item.id] ?? [];
        const total = entries.reduce((sum, value) => sum + value, 0);
        const hasSystemInventory =
          appliedInventory !== null &&
          Object.prototype.hasOwnProperty.call(appliedInventory, item.id);
        const systemTotal = hasSystemInventory
          ? Number(appliedInventory[item.id])
          : appliedInventory !== null
            ? 0
            : null;
        const imported = importedInventory.find((entry) => {
          const target =
            entry.matches.find((match) => match.id === entry.selectedId) ??
            (entry.matches.length === 1 &&
            normalizeProductName(entry.name) ===
              normalizeProductName(entry.matches[0].name)
              ? entry.matches[0]
              : null);
          return target?.id === item.id;
        });
        const price = Number(imported?.price);
        return {
          id: item.id,
          image: item.image,
          name: item.name,
          entries: entries.length,
          total,
          systemTotal,
          price: Number.isFinite(price) && imported?.price !== "" ? price : null,
          amount:
            systemTotal !== null &&
            Number.isFinite(price) &&
            imported?.price !== ""
              ? systemTotal * price
              : null,
          difference: systemTotal === null ? null : systemTotal - total,
        };
      }),
    [records, appliedInventory, importedInventory],
  );
  const grandTotal = rows.reduce((sum, row) => sum + row.total, 0);
  const systemByItem = useMemo(() => {
    const totals = {};
    (appliedInventory
      ? Object.entries(appliedInventory).map(([id, quantity]) => ({
          id,
          quantity,
        }))
      : []
    ).forEach(({ id, quantity }) => {
      totals[id] = quantity;
    });
    return totals;
  }, [appliedInventory]);
  const applySystemInventory = () => {
    const next = {};
    let unresolved = false;
    importedInventory.forEach((entry) => {
      const target =
        entry.matches.find((item) => item.id === entry.selectedId) ??
        (entry.matches.length === 1 &&
        normalizeProductName(entry.name) ===
          normalizeProductName(entry.matches[0].name)
          ? entry.matches[0]
          : null);
      if (
        !target ||
        !Number.isFinite(Number(entry.quantity)) ||
        Number(entry.quantity) < 0
      ) {
        unresolved = true;
        return;
      }
      next[target.id] = (next[target.id] ?? 0) + Number(entry.quantity);
    });
    if (unresolved) return;
    setAppliedInventory(next);
    localStorage.setItem(SYSTEM_INVENTORY_KEY, JSON.stringify(next));
    setShowInventoryModal(false);
  };
  const printMTOs = () => {
    const previousTitle = document.title;
    const today = new Date();
    const fileDate = [
      String(today.getDate()).padStart(2, "0"),
      String(today.getMonth() + 1).padStart(2, "0"),
      today.getFullYear(),
    ].join(".");
    document.title = `MTOs - ${fileDate}`;
    window.addEventListener(
      "afterprint",
      () => {
        document.title = previousTitle;
      },
      { once: true },
    );
    window.print();
  };

  return (
    <>
      <style>{`.mto-print-sheet { display: none; } @page { size: A4 landscape; margin: 10mm; } @media print { .mto-print-sheet { display: block; } .mto-print-table { width: 100% !important; table-layout: fixed; border: 1px solid #00843D; } .mto-print-table thead { display: table-header-group; } .mto-print-footer { break-inside: avoid; page-break-inside: avoid; } }`}</style>
      <main className="no-print min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8">
        <section className="mx-auto max-w-[1500px] overflow-hidden rounded-xl border-2 border-black bg-white">
          <div
            className="h-2"
            style={{
              background:
                "repeating-linear-gradient(-35deg, #FF8200 0 22px, #EE3124 22px 44px, #007A3D 44px 66px)",
            }}
          />
          <div className="p-5 md:p-7">
            {databaseError && (
              <p role="alert" className="mb-4 rounded-md border border-red-300 bg-red-50 p-3 text-sm font-bold text-red-800">
                {databaseError} Dữ liệu đang lưu trên thiết bị này; hãy kiểm tra API và cấu hình database.
              </p>
            )}
            <div className="mto-actions flex flex-col gap-4 border-b-2 border-dashed border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="inline-block rounded-sm bg-[#007A3D] px-3 py-2 text-xl font-black uppercase tracking-wide text-white">
                  Kiểm kê MTOs
                </h1>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setShowInventoryModal(true)}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#FF8200] px-3 py-2 text-sm font-black uppercase text-black hover:bg-orange-400"
                >
                  <ClipboardPaste size={18} />{" "}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm("Xóa toàn bộ số lượng đã nhập?"))
                      setRecords({});
                  }}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-black px-3 py-2 text-sm font-black uppercase hover:bg-stone-100"
                >
                  <RotateCcw size={17} />
                </button>
                <button
                  type="button"
                  onClick={() => downloadExcel(rows)}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-2 text-sm font-black uppercase hover:bg-orange-50"
                >
                  <FileSpreadsheet size={18} /> Excel
                </button>
                <button
                  type="button"
                  onClick={printMTOs}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#007A3D] px-3 py-2 text-sm font-black uppercase text-white shadow-[2px_2px_0_0_#000] hover:bg-[#005c3a]"
                >
                  <Printer size={18} /> PDF
                </button>
                
              </div>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
              {mtoItems.map((item) => (
                <MTOCard
                  key={item.id}
                  item={item}
                  entries={records[item.id] ?? []}
                  onAdd={(id, quantity) =>
                    setRecords((current) => ({
                      ...current,
                      [id]: [...(current[id] ?? []), quantity],
                    }))
                  }
                  onUpdate={(index, quantity) =>
                    setRecords((current) => ({
                      ...current,
                      [item.id]: (current[item.id] ?? []).map(
                        (value, entryIndex) =>
                          entryIndex === index ? quantity : value,
                      ),
                    }))
                  }
                  onRemove={(index) =>
                    setRecords((current) => ({
                      ...current,
                      [item.id]: (current[item.id] ?? []).filter(
                        (_, entryIndex) => entryIndex !== index,
                      ),
                    }))
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      {showInventoryModal && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/65 p-3 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) =>
            event.target === event.currentTarget && setShowInventoryModal(false)
          }
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="mto-inventory-title"
            className="hide-scrollbar h-[100dvh] max-h-[100dvh] w-full max-w-5xl overflow-y-auto rounded-none border-0 bg-white shadow-[5px_5px_0_0_#000] sm:h-auto sm:max-h-[92vh] sm:rounded-2xl sm:border-2"
          >
            <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b-2 border-black bg-[#007A3D] p-4 text-white">
              <div>
                <h2
                  id="mto-inventory-title"
                  className="text-lg font-black uppercase"
                >
                  Đối chiếu tồn hệ thống
                </h2>
                <p className="text-xs font-semibold text-white/80">
                  Dán hai cột Excel: tên sản phẩm, số lượng tồn (mỗi dòng một
                  sản phẩm).
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowInventoryModal(false)}
                className="rounded-md p-1 hover:bg-white/20"
                aria-label="Đóng"
              >
                <X size={22} />
              </button>
            </header>
            <div className="space-y-4 p-4">
              <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                <textarea
                  value={inventoryText}
                  onChange={(event) => setInventoryText(event.target.value)}
                  rows={5}
                  placeholder={
                    "Tên sản phẩm\tSố lượng tồn\nTrứng\t12\nSữa Meiji\t8"
                  }
                  className="min-h-28 w-full rounded-lg border-2 border-slate-300 p-3 font-mono text-sm outline-none focus:border-[#007A3D]"
                />
                <button
                  type="button"
                  onClick={() =>
                    setSystemInventory(parseSystemInventory(inventoryText))
                  }
                  className="inline-flex min-h-12 items-center justify-center gap-2 self-end rounded-lg border-2 border-black bg-[#FF8200] px-4 py-2 text-sm font-black uppercase hover:bg-orange-400"
                >
                  <ClipboardPaste size={18} /> Đối chiếu
                </button>
              </div>
              {systemInventory && (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <p className="font-bold">
                      Đã đọc {importedInventory.length} dòng. Tồn hệ thống có
                      thể nhập lại tại đây.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSystemInventory(null);
                        setAppliedInventory(null);
                        setInventoryText("");
                        localStorage.removeItem(SYSTEM_INVENTORY_KEY);
                      }}
                      className="rounded-md border border-slate-300 px-3 py-1.5 font-bold hover:bg-slate-50"
                    >
                      Xóa dữ liệu đã dán
                    </button>
                  </div>
                  {importedInventory.some(
                    (entry) => entry.matches.length !== 1,
                  ) && (
                    <p className="rounded-md border border-amber-400 bg-amber-100 p-3 text-sm font-bold text-amber-950">
                      Dòng màu vàng cần nhập/chọn tồn thủ công. Nếu có nhiều sản
                      phẩm phù hợp, chọn đúng mặt hàng trước khi áp dụng.
                    </p>
                  )}
                  <div className="hidden overflow-x-auto rounded-lg border border-slate-200 sm:block">
                    <table className="w-full min-w-[680px] border-collapse text-sm">
                      <thead className="bg-slate-100 text-left text-xs font-black uppercase">
                        <tr>
                          <th className="p-2">Tên trong Excel</th>
                          <th className="p-2">Mặt hàng trên trang</th>
                          <th className="p-2">Tồn hệ thống</th>
                          <th className="p-2">Price</th>
                          <th className="p-2">Amount</th>
                          <th className="p-2">Thực tế</th>
                          <th className="p-2">Chênh lệch</th>
                        </tr>
                      </thead>
                      <tbody>
                        {importedInventory.map((entry, index) => {
                          const ambiguous =
                            entry.matches.length !== 1 ||
                            !entry.matches[0] ||
                            normalizeProductName(entry.name) !==
                              normalizeProductName(entry.matches[0]?.name);
                          const selectedId = entry.selectedId ?? "";
                          const target =
                            entry.matches.find(
                              (item) => item.id === selectedId,
                            ) ?? (!ambiguous ? entry.matches[0] : null);
                          const actual = target
                            ? (rows.find((row) => row.id === target.id)
                                ?.total ?? 0)
                            : null;
                          const difference =
                            target && Number.isFinite(Number(entry.quantity))
                              ? Number(entry.quantity) - actual
                              : null;
                          const price = Number(entry.price) || 0;
                          const amount = (Number(entry.quantity) || 0) * price;
                          return (
                            <tr
                              key={`${entry.name}-${index}`}
                              className={`border-t border-slate-200 ${difference !== null && difference < 0 ? "bg-amber-200" : ambiguous ? "bg-amber-100" : ""}`}
                            >
                              <td className="p-2 font-bold">{entry.name}</td>
                              <td className="p-2">
                                {ambiguous ? (
                                  <select
                                    value={selectedId}
                                    onChange={(event) =>
                                      setSystemInventory((current) =>
                                        current.map((row, rowIndex) =>
                                          rowIndex === index
                                            ? {
                                                ...row,
                                                selectedId: event.target.value,
                                              }
                                            : row,
                                        ),
                                      )
                                    }
                                    className="max-w-64 rounded border border-amber-500 bg-white px-2 py-1"
                                  >
                                    <option value="">
                                      {entry.matches.length
                                        ? `Chọn mặt hàng (${entry.matches.length} phù hợp)`
                                        : "Không tìm thấy — đổi tên dòng trong ô dán"}
                                    </option>
                                    {entry.matches.map((item) => (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
                                ) : (
                                  target?.name
                                )}
                              </td>
                              <td className="p-2">
                                <input
                                  type="number"
                                  min="0"
                                  step="1"
                                  value={entry.quantity}
                                  onChange={(event) =>
                                    setSystemInventory((current) =>
                                      current.map((row, rowIndex) =>
                                        rowIndex === index
                                          ? {
                                              ...row,
                                              quantity:
                                                event.target.value === ""
                                                  ? ""
                                                  : Number(event.target.value),
                                            }
                                          : row,
                                      ),
                                    )
                                  }
                                  className={`w-24 rounded border px-2 py-1 ${ambiguous ? "border-amber-500 bg-white" : "border-slate-300"}`}
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="number"
                                  min="0"
                                  step="any"
                                  value={entry.price ?? ""}
                                  onChange={(event) =>
                                    setSystemInventory((current) =>
                                      current.map((row, rowIndex) =>
                                        rowIndex === index
                                          ? {
                                              ...row,
                                              price:
                                                event.target.value === ""
                                                  ? ""
                                                  : Number(event.target.value),
                                            }
                                          : row,
                                      ),
                                    )
                                  }
                                  placeholder="0"
                                  aria-label={`Price ${entry.name}`}
                                  className="w-28 rounded border border-slate-300 px-2 py-1"
                                />
                              </td>
                              <td className="p-2 font-bold">
                                {amount.toLocaleString("vi-VN")}
                              </td>
                              <td className="p-2 font-bold">
                                {target ? actual : "—"}
                              </td>
                              <td
                                className={`p-2 font-black ${difference !== null ? (difference !== 0 ? "text-red-700" : "text-emerald-700") : "text-slate-400"}`}
                              >
                                {difference !== null
                                  ? difference
                                  : "Chưa áp dụng"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-2 sm:hidden">
                    {importedInventory.map((entry, index) => {
                      const ambiguous = entry.matches.length !== 1 || !entry.matches[0] || normalizeProductName(entry.name) !== normalizeProductName(entry.matches[0]?.name);
                      const target = entry.matches.find((item) => item.id === entry.selectedId) ?? (!ambiguous ? entry.matches[0] : null);
                      const actual = target ? rows.find((row) => row.id === target.id)?.total ?? 0 : null;
                      const difference = target && Number.isFinite(Number(entry.quantity)) ? Number(entry.quantity) - actual : null;
                      const price = Number(entry.price) || 0;
                      const amount = (Number(entry.quantity) || 0) * price;
                      return (
                        <article key={`mobile-${entry.name}-${index}`} className={`rounded-lg border p-3 ${difference !== null && difference < 0 ? "border-amber-500 bg-amber-200" : ambiguous ? "border-amber-400 bg-amber-100" : "border-slate-200 bg-white"}`}>
                          <p className="font-black">{entry.name}</p>
                          <div className="mt-2">
                            <label className="mb-1 block text-[11px] font-bold uppercase text-slate-500">Mặt hàng trên trang</label>
                            {ambiguous ? (
                              <select value={entry.selectedId ?? ""} onChange={(event) => setSystemInventory((current) => current.map((row, rowIndex) => rowIndex === index ? { ...row, selectedId: event.target.value } : row))} className="w-full rounded border border-amber-500 bg-white px-2 py-2 text-sm">
                                <option value="">{entry.matches.length ? `Chọn mặt hàng (${entry.matches.length} phù hợp)` : "Không tìm thấy — sửa tên dòng"}</option>
                                {entry.matches.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                              </select>
                            ) : <p className="text-sm font-bold">{target?.name}</p>}
                          </div>
                          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                            <label className="min-w-0"><span className="mb-1 block font-bold text-slate-500">Tồn hệ thống</span><input type="number" min="0" step="any" value={entry.quantity} onChange={(event) => setSystemInventory((current) => current.map((row, rowIndex) => rowIndex === index ? { ...row, quantity: event.target.value === "" ? "" : Number(event.target.value) } : row))} className="w-full rounded border border-slate-300 px-2 py-2 text-sm" /></label>
                            <label className="min-w-0"><span className="mb-1 block font-bold text-slate-500">Price</span><input type="number" min="0" step="any" value={entry.price ?? ""} onChange={(event) => setSystemInventory((current) => current.map((row, rowIndex) => rowIndex === index ? { ...row, price: event.target.value === "" ? "" : Number(event.target.value) } : row))} className="w-full rounded border border-slate-300 px-2 py-2 text-sm" /></label>
                            <div><span className="mb-1 block font-bold text-slate-500">Amount</span><p className="rounded bg-slate-50 px-2 py-2 text-sm font-bold">{amount.toLocaleString("vi-VN")}</p></div>
                            <div><span className="mb-1 block font-bold text-slate-500">Thực tế</span><p className="rounded bg-slate-50 px-2 py-2 text-sm font-bold">{target ? actual : "—"}</p></div>
                            <div><span className="mb-1 block font-bold text-slate-500">Chênh lệch</span><p className={`rounded px-2 py-2 text-sm font-black ${difference !== null && difference < 0 ? "bg-amber-300 text-amber-950" : difference === 0 ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"}`}>{difference ?? "—"}</p></div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                  <p className="text-xs text-slate-500">
                    Chênh lệch = Tồn hệ thống − Tồn thực tế. Những mặt hàng
                    không có trong danh sách dán sẽ được xem là tồn hệ thống 0
                    sau khi áp dụng.
                  </p>
                  <div className="hide-scrollbar hidden max-h-48 overflow-y-auto rounded-lg border border-slate-200 sm:block">
                    <table className="w-full border-collapse text-sm">
                      <thead className="sticky top-0 bg-slate-100 text-left text-xs font-black uppercase">
                        <tr>
                          <th className="p-2">
                            Mặt hàng chưa có trong file (tồn 0)
                          </th>
                          <th className="p-2">Thực tế</th>
                          <th className="p-2">Chênh lệch</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows
                          .filter(
                            (row) =>
                              !Object.prototype.hasOwnProperty.call(
                                systemByItem,
                                row.id,
                              ) && row.total !== 0,
                          )
                          .map((row) => (
                            <tr
                              key={row.id}
                              className="border-t border-slate-200 bg-amber-200"
                            >
                              <td className="p-2 font-bold">{row.name}</td>
                              <td className="p-2">{row.total}</td>
                              <td className="p-2 font-black text-red-700">
                                {-row.total}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-2 sm:hidden">
                    {rows.filter((row) => !Object.prototype.hasOwnProperty.call(systemByItem, row.id) && row.total !== 0).map((row) => (
                      <article key={`missing-mobile-${row.id}`} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 rounded-lg border border-amber-500 bg-amber-200 p-3 text-sm">
                        <span className="font-bold">{row.name}</span>
                        <span><span className="block text-[10px] font-bold uppercase text-slate-600">Thực tế</span>{row.total}</span>
                        <span className="font-black text-red-700"><span className="block text-[10px] uppercase text-slate-600">Lệch</span>{-row.total}</span>
                      </article>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={applySystemInventory}
                      disabled={importedInventory.some((entry) => {
                        const target =
                          entry.matches.find(
                            (item) => item.id === entry.selectedId,
                          ) ??
                          (entry.matches.length === 1 &&
                          normalizeProductName(entry.name) ===
                            normalizeProductName(entry.matches[0]?.name)
                            ? entry.matches[0]
                            : null);
                        return (
                          !target ||
                          !Number.isFinite(Number(entry.quantity)) ||
                          Number(entry.quantity) < 0
                        );
                      })}
                      className="rounded-lg border-2 border-black bg-[#007A3D] px-5 py-2 font-black uppercase text-white shadow-[2px_2px_0_0_#000] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Áp dụng tồn hệ thống
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      )}
      <div className="mto-print-sheet print-only bg-white text-black">
        <header className="mb-5">
          <div className="flex items-center justify-between border-b-[5px] border-[#ED1C24] pb-4">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="7-Eleven"
                className="h-[62px] w-[62px] object-contain"
              />
              <div>
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#00843D]">
                  Cửa hàng tiện lợi 24/7
                </p>
                <h1 className="text-[26px] font-black uppercase leading-none text-[#F58220]">
                  Bảng kiểm kê MTOs
                </h1>
              </div>
            </div>
            <div className="text-right">
              <div className="mb-2 flex justify-end gap-1">
                <span className="h-2 w-8 rounded-sm bg-[#F58220]" />
                <span className="h-2 w-8 rounded-sm bg-[#00843D]" />
                <span className="h-2 w-8 rounded-sm bg-[#ED1C24]" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Ngày in
              </p>
              <p className="text-xs font-black text-[#1A1A1A]">
                {new Date().toLocaleDateString("vi-VN")}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between bg-[#F4F4F4] px-3 py-2 text-[10px]">
            <p>
              <span className="font-black uppercase text-[#00843D]">
                Cửa hàng:
              </span>{" "}
              <span className="font-bold">7-Eleven ____________________</span>
            </p>
            <p>
              <span className="font-black uppercase text-[#ED1C24]">
                Quản lý:
              </span>{" "}
              <span className="font-bold">____________________</span>
            </p>
          </div>
        </header>
        <div>
            <table className="mto-print-table w-full min-w-0 table-fixed border-collapse text-[9px]">
              <thead>
                <tr className="bg-[#00843D] text-white">
                  <th className="w-[5%] border-2 border-[#006B35] px-1 py-2 text-center font-black uppercase">
                    STT
                  </th>
                  <th className="w-[8%] border-2 border-[#006B35] px-1 py-2 text-center font-black uppercase">
                    Mặt hàng
                  </th>
                  <th className="w-[29%] border-2 border-[#006B35] px-2 py-2 text-left font-black uppercase">
                    Tên mặt hàng
                  </th>
                  <th className="w-[11%] border-2 border-[#006B35] px-1 py-2 text-center font-black uppercase">
                    Tồn hệ thống
                  </th>
                  <th className="w-[10%] border-2 border-[#006B35] px-1 py-2 text-center font-black uppercase">
                    Price
                  </th>
                  <th className="w-[11%] border-2 border-[#006B35] px-1 py-2 text-center font-black uppercase">
                    Amount
                  </th>
                  <th className="w-[10%] border-2 border-[#006B35] px-1 py-2 text-center font-black uppercase">
                    Tồn thực tế
                  </th>
                  <th className="w-[16%] border-2 border-[#006B35] px-1 py-2 text-center font-black uppercase">
                    Chênh lệch
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => {
                  return (
                    <tr
                      key={row.id}
                      className={
                        row.difference !== null && row.difference < 0
                          ? "bg-amber-200"
                          : index % 2 === 0
                            ? "bg-white"
                            : "bg-[#F8FCF9]"
                      }
                    >
                      <td className="border-b border-l-2 border-r border-[#00843D]/30 p-1 text-center font-bold">
                        {index + 1}
                      </td>
                      <td className="border-b border-r border-[#00843D]/30 p-1 text-center">
                        <img
                          src={row.image}
                          alt=""
                          className="mx-auto h-8 w-12 object-contain"
                        />
                      </td>
                      <td className="border-b border-r border-[#00843D]/30 px-2 py-1 font-black uppercase">
                        {row.name}
                      </td>
                      <td className="border-b border-r border-[#00843D]/30 px-1 py-1 text-center font-bold">
                        {row.systemTotal ?? "—"}
                      </td>
                      <td className="border-b border-r border-[#00843D]/30 px-1 py-1 text-center font-bold">
                        {row.price?.toLocaleString("vi-VN") ?? "—"}
                      </td>
                      <td className="border-b border-r border-[#00843D]/30 px-1 py-1 text-center font-bold">
                        {row.amount?.toLocaleString("vi-VN") ?? "—"}
                      </td>
                      <td className="border-b border-r border-[#00843D]/30 px-1 py-1 text-center font-black text-[#ED1C24]">
                        {row.total}
                      </td>
                      <td className="border-b border-r-2 border-[#00843D]/30 px-1 py-1 text-center font-black">
                        {row.difference ?? "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
        <footer className="mto-print-footer mt-5">
          <div className="flex items-start justify-end">
            <div className="min-w-[230px]">
              <div className="border-b border-[#1A1A1A] pb-12 text-center">
                <p className="text-[9px] font-black uppercase text-[#00843D]">
                  Xác nhận của quản lý cửa hàng
                </p>
              </div>
              <p className="mt-1 text-center text-[8px] italic text-slate-400">
                Ký và ghi rõ họ tên
              </p>
            </div>
          </div>
          <div className="mt-5 flex h-1.5 w-full overflow-hidden">
            <div className="flex-1 bg-[#F58220]" />
            <div className="flex-1 bg-[#00843D]" />
            <div className="flex-1 bg-[#ED1C24]" />
          </div>
          <div className="mt-2 flex justify-between text-[8px] font-bold uppercase tracking-wider text-slate-400">
            <span>7-Eleven — Bảng kiểm kê MTOs</span>
          </div>
        </footer>
      </div>
    </>
  );
}

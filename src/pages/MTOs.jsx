import { useEffect, useMemo, useState } from "react";
import { FileSpreadsheet, ImageOff, Plus, Printer, RotateCcw, Trash2, X } from "lucide-react";
import { mtoItems } from "../data/mtos";

const STORAGE_KEY = "mtoInventoryEntries";
const DRAFT_STORAGE_PREFIX = "mtoQuantityDraft:";

function readEntries() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function downloadExcel(rows) {
  const tableRows = rows.map((row) => `<tr><td>${row.name}</td><td>${row.total}</td><td>${row.entries}</td></tr>`).join("");
  const workbook = `\ufeff<html><head><meta charset="utf-8"></head><body><table><thead><tr><th>Mặt hàng</th><th>Tổng số lượng</th><th>Số lần nhập</th></tr></thead><tbody>${tableRows}</tbody></table></body></html>`;
  const blob = new Blob([workbook], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kiem-ke-mtos-${new Date().toISOString().slice(0, 10)}.xls`;
  link.click();
  URL.revokeObjectURL(url);
}

function MTOCard({ item, entries, onAdd, onUpdate, onRemove }) {
  const [quantity, setQuantity] = useState(() => localStorage.getItem(`${DRAFT_STORAGE_PREFIX}${item.id}`) ?? "");
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
    onAdd(item.id, value);
    setQuantity("");
    return true;
  };

  return (
    <>
    <article className="overflow-hidden rounded-md border-2 border-[#008061] bg-white shadow-[3px_3px_0_0_#008061]">
      <button type="button" onClick={() => setShowInputModal(true)} className="relative block aspect-[4/3] w-full bg-white transition hover:bg-emerald-50" aria-label={`Nhập số lượng cho ${item.name}`}>
        {!imageFailed ? (
          <img src={item.image} alt={item.name} loading="lazy" onError={() => setImageFailed(true)} className="h-full w-full object-contain p-3" />
        ) : (
          <div className="grid h-full place-items-center gap-2 p-4 text-center text-stone-400">
            <ImageOff size={28} />
            <span className="text-[10px] font-bold uppercase">/images/mtos/{item.id}.png</span>
          </div>
        )}
      </button>
      <div className="border-t-2 border-[#008061] p-3">
        <div className="flex min-h-10 items-start justify-between gap-2">
          <h2 className="text-sm font-black uppercase leading-5 text-black">{item.name}</h2>
          <button type="button" onClick={() => entries.length > 0 && setShowEntries((current) => !current)} aria-label={`Tổng số lượng ${item.name}: ${total}. Nhấn để chỉnh sửa.`} aria-expanded={showEntries} className={`shrink-0 rounded-md bg-[#EE3124] px-2 py-1 text-lg font-black leading-none text-white transition ${entries.length > 0 ? "cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#EE3124]" : "cursor-default"}`}>{total}</button>
        </div>
        {showEntries && (
          <div className="mt-3 border-t-2 border-dashed border-slate-200 pt-2">
            <p className="mb-2 text-[10px] font-black uppercase text-stone-500">Lịch sử nhập</p>
            <div className="space-y-1.5">
              {entries.map((entry, index) => (
                <div key={`${index}-${entry}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
                  <span className="text-[10px] font-bold text-stone-500">#{index + 1}</span>
                  <input type="number" min="0.01" step="any" defaultValue={entry} aria-label={`Lần nhập ${index + 1} của ${item.name}`} onBlur={(event) => {
                    const value = Number(event.target.value);
                    if (Number.isFinite(value) && value > 0) onUpdate(index, value);
                    else event.target.value = entry;
                  }} className="h-8 min-w-0 rounded border border-slate-300 px-2 text-xs font-bold outline-none focus:border-[#007A3D]" />
                  <button type="button" onClick={() => onRemove(index)} aria-label={`Xóa lần nhập ${index + 1} của ${item.name}`} className="grid h-8 w-8 place-items-center rounded border border-red-200 text-[#EE3124] hover:bg-red-50"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
    {showInputModal && (
      <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/65 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setShowInputModal(false)}>
        <div role="dialog" aria-modal="true" aria-labelledby={`mto-input-${item.id}`} className="w-full max-w-sm overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[5px_5px_0_0_#000]">
          <div className="flex items-center justify-between gap-3 border-b-2 border-black bg-[#007A3D] p-4 text-white">
            <div className="flex min-w-0 items-center gap-2">
              <h2 id={`mto-input-${item.id}`} className="truncate text-base font-black uppercase">{item.name}</h2>
              <span className="shrink-0 rounded-md bg-[#EE3124] px-2 py-1 text-sm font-black leading-none text-white">{total}</span>
            </div>
            <button type="button" onClick={() => setShowInputModal(false)} className="rounded-md p-1 hover:bg-white/20" aria-label="Đóng"><X size={20} /></button>
          </div>
          <div className="p-4">
            <label className="block text-xs font-black uppercase text-black">Số lượng
              <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
              <input autoFocus type="number" min="0.01" step="any" value={quantity} onChange={(event) => setQuantity(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && addQuantity()) setShowInputModal(false); }} placeholder="Nhập số lượng" className="h-11 min-w-0 rounded-md border-2 border-black px-3 text-base font-bold outline-none focus:bg-orange-50 focus:ring-4 focus:ring-[#FF8200]/30" />
              <button type="button" onClick={() => addQuantity() && setShowInputModal(false)} className="flex h-11 items-center justify-center gap-2 rounded-md border-2 border-black bg-[#EE3124] px-3 text-sm font-black uppercase text-white shadow-[2px_2px_0_0_#000] hover:bg-red-700"><Plus size={18} /></button>
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

  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(records)), [records]);

  const rows = useMemo(() => mtoItems.map((item) => {
    const entries = records[item.id] ?? [];
    return { id: item.id, image: item.image, name: item.name, entries: entries.length, total: entries.reduce((sum, value) => sum + value, 0) };
  }), [records]);
  const grandTotal = rows.reduce((sum, row) => sum + row.total, 0);
  const printTables = [
    rows.slice(0, Math.ceil(rows.length / 2)),
    rows.slice(Math.ceil(rows.length / 2)),
  ];

  return (
    <>
      <style>{`.mto-print-sheet { display: none; } @media print { .mto-print-sheet { display: block; } .mto-print-table thead { display: table-header-group; } .mto-print-footer { break-inside: avoid; page-break-inside: avoid; } }`}</style>
    <main className="no-print min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8">
      <section className="mx-auto max-w-[1500px] overflow-hidden rounded-xl border-2 border-black bg-white">
        <div className="h-2" style={{ background: "repeating-linear-gradient(-35deg, #FF8200 0 22px, #EE3124 22px 44px, #007A3D 44px 66px)" }} />
        <div className="p-5 md:p-7">
          <div className="mto-actions flex flex-col gap-4 border-b-2 border-dashed border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="inline-block rounded-sm bg-[#007A3D] px-3 py-2 text-xl font-black uppercase tracking-wide text-white">Kiểm kê MTOs</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => downloadExcel(rows)} className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-2 text-sm font-black uppercase hover:bg-orange-50"><FileSpreadsheet size={18} /> Excel</button>
              <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#007A3D] px-3 py-2 text-sm font-black uppercase text-white shadow-[2px_2px_0_0_#000] hover:bg-[#005c3a]"><Printer size={18} /> PDF</button>
              <button type="button" onClick={() => { if (window.confirm("Xóa toàn bộ số lượng đã nhập?")) setRecords({}); }} className="inline-flex items-center gap-2 rounded-md border-2 border-black px-3 py-2 text-sm font-black uppercase hover:bg-stone-100"><RotateCcw size={17} /> Làm mới</button>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {mtoItems.map((item) => <MTOCard key={item.id} item={item} entries={records[item.id] ?? []} onAdd={(id, quantity) => setRecords((current) => ({ ...current, [id]: [...(current[id] ?? []), quantity] }))} onUpdate={(index, quantity) => setRecords((current) => ({ ...current, [item.id]: (current[item.id] ?? []).map((value, entryIndex) => entryIndex === index ? quantity : value) }))} onRemove={(index) => setRecords((current) => ({ ...current, [item.id]: (current[item.id] ?? []).filter((_, entryIndex) => entryIndex !== index) }))} />)}
          </div>
        </div>
      </section>
    </main>
      <div className="mto-print-sheet print-only bg-white text-black">
        <header className="mb-5">
          <div className="flex items-center justify-between border-b-[5px] border-[#ED1C24] pb-4">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="7-Eleven" className="h-[62px] w-[62px] object-contain" />
              <div>
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#00843D]">Cửa hàng tiện lợi 24/7</p>
                <h1 className="text-[26px] font-black uppercase leading-none text-[#F58220]">Bảng kiểm kê MTOs</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="mb-2 flex justify-end gap-1"><span className="h-2 w-8 rounded-sm bg-[#F58220]" /><span className="h-2 w-8 rounded-sm bg-[#00843D]" /><span className="h-2 w-8 rounded-sm bg-[#ED1C24]" /></div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Ngày in</p>
              <p className="text-xs font-black text-[#1A1A1A]">{new Date().toLocaleDateString("vi-VN")}</p>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between bg-[#F4F4F4] px-3 py-2 text-[10px]">
            <p><span className="font-black uppercase text-[#00843D]">Cửa hàng:</span> <span className="font-bold">7-Eleven ____________________</span></p>
            <p><span className="font-black uppercase text-[#ED1C24]">Quản lý:</span> <span className="font-bold">____________________</span></p>
          </div>
        </header>
        <div className="grid grid-cols-2 gap-4">
          {printTables.map((tableRows, tableIndex) => (
            <table key={tableIndex} className="mto-print-table w-full table-fixed border-collapse text-[9px]">
              <thead>
                <tr className="bg-[#00843D] text-white">
                  <th className="w-9 border-b-2 border-l-2 border-r border-white/30 px-1 py-2 text-center font-black uppercase">STT</th>
                  <th className="w-16 border-b-2 border-r border-white/30 px-1 py-2 text-center font-black uppercase">Mặt hàng</th>
                  <th className="border-b-2 border-r border-white/30 px-2 py-2 text-left font-black uppercase">Tên mặt hàng</th>
                  <th className="w-20 border-b-2 border-r-2 border-white/30 px-2 py-2 text-center font-black uppercase">Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rowIndex) => {
                  const index = tableIndex * Math.ceil(rows.length / 2) + rowIndex;
                  return (
                    <tr key={row.id} className={rowIndex % 2 === 0 ? "bg-white" : "bg-[#F8FCF9]"}>
                      <td className="border-b border-l-2 border-r border-[#00843D]/30 p-1 text-center font-bold">{index + 1}</td>
                      <td className="border-b border-r border-[#00843D]/30 p-1 text-center"><img src={row.image} alt="" className="mx-auto h-8 w-12 object-contain" /></td>
                      <td className="border-b border-r border-[#00843D]/30 px-2 py-1 font-black uppercase">{row.name}</td>
                      <td className="border-b border-r-2 border-[#00843D]/30 px-2 py-1 text-center font-black text-[#ED1C24]">{row.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ))}
        </div>
        <footer className="mto-print-footer mt-5">
          <div className="flex items-start justify-end">
            <div className="min-w-[230px]">
              <div className="border-b border-[#1A1A1A] pb-12 text-center">
                <p className="text-[9px] font-black uppercase text-[#00843D]">Xác nhận của quản lý cửa hàng</p>
              </div>
              <p className="mt-1 text-center text-[8px] italic text-slate-400">Ký và ghi rõ họ tên</p>
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

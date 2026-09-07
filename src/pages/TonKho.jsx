import { useEffect, useMemo, useState } from "react";

import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  ImageOff,
  Package2,
  Search,
  ShieldAlert,
  Truck,
  Trash2,
  RotateCcw,
  ArrowUpDown,
  Download,
  Settings2,
  X,
} from "lucide-react";

import { productCatalog } from "../data/productCatalog";

const STORAGE_KEY = "tonKhoInventoryV2";
const TODAY = new Date();

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date, amount) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + amount);
  return next;
}

function toDisplayDate(dateKey) {
  if (!dateKey) return "-";
  return parseDateKey(dateKey).toLocaleDateString("vi-VN");
}

function toInputDate(dateKey) {
  if (!dateKey) return "";
  const date = parseDateKey(dateKey);
  return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`;
}

function parseInputDate(value) {
  const digits = value.replace(/\D/g, "");
  const normalized = digits.length === 8
    ? `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4)}`
    : value.trim();
  const match = normalized.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (!match) return "";

  const [, day, month, year] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (
    date.getFullYear() !== Number(year) ||
    date.getMonth() !== Number(month) - 1 ||
    date.getDate() !== Number(day)
  ) {
    return "";
  }

  return formatDateKey(date);
}

function normalizeNumberInput(value) {
  return value.replace(/^0+(?=\d)/, "");
}

function daysUntil(dateKey) {
  if (!dateKey) return null;
  const target = parseDateKey(dateKey);
  const diff = target.getTime() - TODAY.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
}

function calculateSupplierReminderDate(expiryDate, reminderValue, reminderUnit) {
  if (!expiryDate) return "";
  const value = Math.max(0, Number(reminderValue) || 0);
  const days = reminderUnit === "year" ? value * 365 : reminderUnit === "month" ? value * 30 : value;
  return formatDateKey(addDays(parseDateKey(expiryDate), -days));
}

function buildInventorySeed() {
  const products = [];

  productCatalog.forEach((group) => {
    group.categories.forEach((category) => {
      category.products.forEach((product) => {
        const variants = product.variants ?? [product];
        const primaryVariant = variants[0];
        products.push({
          id: product.id ?? `${group.id}-${category.id}-${productIndex}`,
          groupId: group.id,
          groupName: group.name,
          categoryId: category.id,
          categoryName: category.name,
          name: product.name,
          image: primaryVariant.image ?? product.image ?? "",
          price: primaryVariant.price ?? product.price ?? 0,
          size: primaryVariant.size ?? null,
          quantity: "",
          expiryDate: "",
          expiryDateInput: "",
          supplierName: "",
          reminderValue: 3,
          reminderUnit: "day",
          supplierReminderDate: "",
          note: "",
          action: "normal",
          statusUpdatedAt: formatDateKey(TODAY),
        });
      });
    });
  });

  return products;
}

function loadInventory() {
  const seed = buildInventorySeed();

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return seed;

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return seed;

    const map = new Map(parsed.map((item) => [item.id, item]));
    return seed.map((item) => ({ ...item, ...map.get(item.id) }));
  } catch {
    return seed;
  }
}

function getStockState(item) {
  const remaining = daysUntil(item.expiryDate);

  if (!item.expiryDate) {
    return {
      label: "Chưa kiểm date",
      tone: "bg-slate-100 text-slate-700",
      detail: "Nhập số lượng và HSD khi đi kiểm hàng",
    };
  }

  if (item.action === "destroyed") {
    return {
      label: "Đã hủy",
      tone: "bg-slate-100 text-slate-700",
      detail: "Đã loại khỏi quầy",
    };
  }

  if (item.action === "withdrawn") {
    return {
      label: "Đã rút date",
      tone: "bg-orange-100 text-orange-700",
      detail: "Đã chuyển xử lý nội bộ",
    };
  }

  if (item.action === "notified") {
    return {
      label: "Đã báo NCC",
      tone: "bg-amber-100 text-amber-700",
      detail: "Đang chờ phản hồi nhà cung cấp",
    };
  }

  if (remaining < 0) {
    return {
      label: "Quá hạn",
      tone: "bg-red-100 text-red-700",
      detail: `Quá hạn ${Math.abs(remaining)} ngày`,
    };
  }

  if (remaining <= 3) {
    return {
      label: "Sắp hết hạn",
      tone: "bg-red-100 text-red-700",
      detail: `Còn ${remaining} ngày`,
    };
  }

  if (remaining <= 7) {
    return {
      label: "Cần theo dõi",
      tone: "bg-orange-100 text-orange-700",
      detail: `Còn ${remaining} ngày`,
    };
  }

  return {
    label: "An toàn",
    tone: "bg-emerald-100 text-emerald-700",
    detail: `Còn ${remaining} ngày`,
  };
}

function StripeBar() {
  return (
    <div
      className="h-2 w-full"
      style={{
        background:
          "repeating-linear-gradient(-35deg, #FF8200 0 22px, #EE3124 22px 44px, #007A3D 44px 66px)",
      }}
    />
  );
}

function InventoryCard({ item, onOpen }) {
  const state = getStockState(item);
  const variants = item.size ? [item.size] : [];
  const isDestroyed = item.action === "destroyed";

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(item.id);
        }
      }}
      className="group min-w-0 cursor-pointer overflow-hidden rounded-md border-2 border-[#008061] bg-white shadow-[3px_3px_0_0_#008061] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#008061] focus:outline-none focus:ring-4 focus:ring-[#FF8200]/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className={`h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105 ${
              isDestroyed ? "opacity-40 grayscale" : ""
            }`}
          />
        ) : (
          <div className="grid h-full place-items-center text-stone-300">
            <ImageOff size={26} />
          </div>
        )}
        <div className={`absolute right-1.5 top-1.5 whitespace-nowrap rounded px-1.5 py-1 text-[8px] font-black uppercase ${state.tone} sm:right-2 sm:top-2 sm:px-2 sm:text-[9px]`}>
          {state.label}
        </div>
      </div>
      <div className="min-w-0 border-t-2 border-[#008061] px-2 py-2 sm:px-2.5">
        <h3 className="line-clamp-2 min-h-8 text-[11px] font-bold uppercase leading-4 tracking-tight text-black sm:text-sm">
          {item.name}
        </h3>
        <div className="mt-2 grid grid-cols-[minmax(48px,0.6fr)_minmax(0,1.4fr)] gap-1.5 text-[9px] font-semibold text-stone-700 sm:gap-2 sm:text-[12px]">
          <div className="min-w-0 truncate rounded border border-stone-200 bg-stone-50 px-2 py-2">
            SL: <span className="font-black text-black">{item.quantity || "-"}</span>
          </div>
          <div className="min-w-0 whitespace-nowrap rounded border border-stone-200 bg-stone-50 p-2 text-[10px]">
            <span className="font-black text-black">{toDisplayDate(item.expiryDate)}</span>
          </div>
        </div>
        {item.supplierName && (
          <div className="mt-2 rounded border-2 border-dashed border-stone-300 bg-stone-50 px-2 py-2 text-[10px] font-black uppercase text-stone-600">
            <span className="block min-w-0 truncate">{item.supplierName}</span>
          </div>
        )}
      </div>
    </article>
  );

  return (
    <article className="group min-w-0 overflow-hidden rounded-md border-2 border-[#008061] bg-white shadow-[3px_3px_0_0_#008061] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#008061]">
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className={`h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105 ${
              isDestroyed ? "opacity-40 grayscale" : ""
            }`}
          />
        ) : (
          <div className="grid h-full place-items-center text-stone-300">
            <ImageOff size={26} />
          </div>
        )}

        <div className="absolute left-2 top-2 max-w-[46%] truncate rounded bg-black/80 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-white">
          {item.groupName}
        </div>

        <div className={`absolute right-2 top-2 max-w-[46%] truncate rounded px-2 py-1 text-[10px] font-black uppercase ${state.tone}`}>
          {state.label}
        </div>
      </div>

      <div className="min-w-0 border-t-2 border-[#008061] px-2.5 py-2">
        <h3 className="line-clamp-2 min-h-8 text-xs font-bold uppercase leading-4 tracking-tight text-black sm:text-sm">
          {item.name}
        </h3>

        {variants.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5" aria-label="Kích cỡ">
            {variants.map((variant) => (
              <span
                key={variant}
                className="rounded border-2 border-black bg-white px-2 py-1 text-[11px] font-black text-black"
              >
                {variant}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] font-semibold text-stone-700">
          <div className="rounded border border-stone-200 bg-stone-50 px-2 py-1.5">
            SL: <span className="font-black text-black">{item.quantity || "-"}</span>
          </div>
          <div className="rounded border border-stone-200 bg-stone-50 px-2 py-1.5">
            HSD: <span className="font-black text-black">{toDisplayDate(item.expiryDate)}</span>
          </div>
        </div>

        <div className="mt-2 text-[11px] font-bold text-stone-500">
          <span className="inline-flex items-center gap-1">
            <CalendarClock size={12} />
            Báo NCC: {toDisplayDate(item.supplierReminderDate)}
          </span>
          <div className="mt-1">{state.detail}</div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-1.5">
          <button
            type="button"
            onClick={() => onAction(item.id, "notified")}
            disabled={!item.expiryDate || item.quantity === ""}
            className="rounded border-2 border-black bg-amber-100 px-2 py-1 text-[11px] font-black uppercase text-amber-800 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Báo date NCC
          </button>
          <button
            type="button"
            onClick={() => onAction(item.id, "withdrawn")}
            disabled={!item.expiryDate || item.quantity === ""}
            className="rounded border-2 border-black bg-orange-100 px-2 py-1 text-[11px] font-black uppercase text-orange-800 transition hover:bg-orange-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Rút date
          </button>
          <button
            type="button"
            onClick={() => onAction(item.id, "destroyed")}
            disabled={!item.expiryDate || item.quantity === ""}
            className="rounded border-2 border-black bg-red-100 px-2 py-1 text-[11px] font-black uppercase text-red-800 transition hover:bg-red-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Hủy hàng
          </button>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-[9px] font-black uppercase tracking-wider text-stone-500">
              Tồn
            </span>
            <input
              type="number"
              min="0"
              value={item.quantity ?? ""}
              onChange={(event) =>
                onQuantityChange(item.id, normalizeNumberInput(event.target.value))
              }
              className="h-10 w-full rounded-md border-2 border-black bg-white px-2 text-sm font-bold outline-none focus:bg-orange-50"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[9px] font-black uppercase tracking-wider text-stone-500">
              HSD
            </span>
            <input
              type="text"
              inputMode="numeric"
              placeholder="dd-mm-yyyy"
              value={item.expiryDateInput ?? toInputDate(item.expiryDate)}
              onChange={(event) =>
                onFieldChange(item.id, "expiryDateInput", event.target.value)
              }
              className="h-10 w-full rounded-md border-2 border-black bg-white px-2 text-xs font-bold outline-none focus:bg-orange-50"
            />
          </label>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <label className="col-span-2 block min-w-0">
            <span className="mb-1 block text-[9px] font-black uppercase tracking-wider text-stone-500">
              Nhà cung cấp
            </span>
            <input
              type="text"
              value={item.supplierName ?? ""}
              onChange={(event) => onFieldChange(item.id, "supplierName", event.target.value)}
              placeholder="Tên NCC"
              className="h-10 w-full rounded-md border-2 border-black bg-white px-2 text-xs font-semibold outline-none placeholder:text-stone-400 focus:bg-orange-50"
            />
          </label>
          <label className="block min-w-0">
            <span className="mb-1 block text-[9px] font-black uppercase tracking-wider text-stone-500">
              Báo trước
            </span>
            <input
              type="number"
              min="0"
              value={item.reminderValue ?? 3}
              onChange={(event) => onFieldChange(item.id, "reminderValue", normalizeNumberInput(event.target.value))}
              className="h-10 w-full rounded-md border-2 border-black bg-white px-2 text-xs font-bold outline-none focus:bg-orange-50"
            />
          </label>
          <label className="block min-w-0">
            <span className="mb-1 block text-[9px] font-black uppercase tracking-wider text-stone-500">
              Đơn vị
            </span>
            <select
              value={item.reminderUnit ?? "day"}
              onChange={(event) => onFieldChange(item.id, "reminderUnit", event.target.value)}
              className="h-10 w-full rounded-md border-2 border-black bg-white px-1 text-xs font-bold outline-none focus:bg-orange-50"
            >
              <option value="day">Ngày</option>
              <option value="month">Tháng</option>
              <option value="year">Năm</option>
            </select>
          </label>
        </div>

        <button
          type="button"
          onClick={() => onAutoDate(item.id)}
          disabled={!item.expiryDate}
          className="mt-2 inline-flex w-full items-center justify-center gap-1 rounded-md border-2 border-black bg-[#FFF8EC] px-2 py-2 text-[11px] font-black uppercase text-black transition hover:bg-orange-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <CalendarClock size={13} />
          Tự tính ngày báo NCC
        </button>

        <label className="mt-2 block">
          <span className="mb-1 block text-[9px] font-black uppercase tracking-wider text-stone-500">
            Ghi chú
          </span>
          <input
            type="text"
            value={item.note}
            onChange={(event) =>
              onFieldChange(item.id, "note", event.target.value)
            }
            placeholder="Lý do / xử lý"
            className="h-10 w-full rounded-md border-2 border-black bg-white px-2 text-sm font-semibold outline-none placeholder:font-normal placeholder:text-stone-400 focus:bg-orange-50"
          />
        </label>
      </div>
    </article>
  );
}

function InventoryDrawer({ item, onClose, onAction, onQuantityChange, onFieldChange, onAutoDate }) {
  const state = getStockState(item);
  const canProcess = Boolean(item.expiryDate) && item.quantity !== "";

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end sm:items-stretch" role="dialog" aria-modal="true" aria-label={`Chỉnh thông tin ${item.name}`}>
      <button
        type="button"
        aria-label="Đóng chi tiết sản phẩm"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/40"
      />
      <aside className="relative flex h-auto max-h-[92dvh] w-full max-w-none flex-col overflow-y-auto rounded-t-[26px] border-t-2 border-black bg-[#FFFDF8] shadow-[0_-8px_0_rgba(0,0,0,0.12)] animate-[slideUp_180ms_ease-out] sm:h-full sm:max-h-none sm:max-w-md sm:rounded-t-none sm:border-l-2 sm:border-t-0 sm:shadow-[-8px_0_0_rgba(0,0,0,0.12)] sm:animate-[slideIn_180ms_ease-out]">
        <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-stone-300 sm:hidden" />
        <div className="flex items-start justify-between gap-2 border-b-2 border-black bg-white p-2.5 sm:gap-3 sm:p-5">
          <div className="min-w-0">
            <h2 className="mt-1 text-sm font-black uppercase leading-4 text-black sm:text-lg sm:leading-6">{item.name}</h2>
            <p className="mt-1 text-sm font-semibold text-stone-500">{item.categoryName} · {state.label}</p>
          </div>
          <button type="button" onClick={onClose} className="grid h-8 w-8 shrink-0 place-items-center rounded-md border-2 border-black bg-[#FF8200] text-white transition hover:bg-[#EE3124] sm:h-10 sm:w-10" aria-label="Đóng">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-2 p-2.5 sm:space-y-4 sm:p-5">
          <div className="mx-auto w-full max-w-[200px] overflow-hidden rounded-md border-2 border-[#008061] bg-white shadow-[3px_3px_0_0_#008061] sm:max-w-[260px]">
            <div className="aspect-[4/3] bg-white">
              {item.image ? <img src={item.image} alt={item.name} className="h-full w-full object-contain p-4" /> : <div className="grid h-full place-items-center text-stone-300"><ImageOff size={32} /></div>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-wider text-stone-500">Số lượng</span>
              <input type="number" min="0" value={item.quantity ?? ""} onChange={(event) => onQuantityChange(item.id, normalizeNumberInput(event.target.value))} className="h-9 w-full rounded-md border-2 border-black bg-white px-2 text-xs font-bold outline-none focus:bg-orange-50 sm:h-11 sm:px-3 sm:text-base" />
            </label>
            <label className="block">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-wider text-stone-500">HSD</span>
              <input type="text" inputMode="numeric" placeholder="dd-mm-yyyy" value={item.expiryDateInput ?? toInputDate(item.expiryDate)} onChange={(event) => onFieldChange(item.id, "expiryDateInput", event.target.value)} className="h-9 w-full rounded-md border-2 border-black bg-white px-2 text-[11px] font-bold outline-none focus:bg-orange-50 sm:h-11 sm:px-3 sm:text-sm" />
            </label>
          </div>

          <label className="block">
            <span className="mb-1 block text-[10px] font-black uppercase tracking-wider text-stone-500">Nhà cung cấp</span>
            <input type="text" value={item.supplierName ?? ""} onChange={(event) => onFieldChange(item.id, "supplierName", event.target.value)} placeholder="Tên nhà cung cấp" className="h-9 w-full rounded-md border-2 border-black bg-white px-2 text-[11px] font-semibold outline-none placeholder:text-stone-400 focus:bg-orange-50 sm:h-11 sm:px-3 sm:text-sm" />
          </label>

          <div className="rounded-xl border-2 border-black bg-[#FFF8EC] p-3">
            <p className="text-[10px] font-black uppercase tracking-wider text-black">Date NCC</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <input type="number" min="0" value={item.reminderValue ?? 3} onChange={(event) => onFieldChange(item.id, "reminderValue", normalizeNumberInput(event.target.value))} className="h-9 w-full rounded-md border-2 border-black bg-white px-2 text-[11px] font-bold outline-none focus:bg-orange-50 sm:h-11 sm:px-3 sm:text-sm" aria-label="Số ngày báo trước" />
              <select value={item.reminderUnit ?? "day"} onChange={(event) => onFieldChange(item.id, "reminderUnit", event.target.value)} className="h-9 w-full rounded-md border-2 border-black bg-white px-1 text-[11px] font-bold outline-none focus:bg-orange-50 sm:h-11 sm:px-2 sm:text-sm" aria-label="Đơn vị báo trước">
                <option value="day">Ngày</option>
                <option value="month">Tháng</option>
                <option value="year">Năm</option>
              </select>
            </div>
            <button type="button" onClick={() => onAutoDate(item.id)} disabled={!item.expiryDate} className="mt-2 inline-flex h-9 w-full items-center justify-center gap-1 rounded-md border-2 border-black bg-white px-2 text-[10px] font-black uppercase transition hover:bg-orange-100 disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:gap-2 sm:px-3 sm:text-xs">
              <CalendarClock size={15} /> Tự tính ngày báo NCC
            </button>
            <p className="mt-2 text-xs font-bold text-stone-600">Ngày báo: {toDisplayDate(item.supplierReminderDate)}</p>
          </div>

          <label className="block">
            <span className="mb-1 block text-[10px] font-black uppercase tracking-wider text-stone-500">Ghi chú xử lý</span>
            <textarea value={item.note ?? ""} onChange={(event) => onFieldChange(item.id, "note", event.target.value)} placeholder="Lý do, tình trạng hàng, phản hồi NCC..." rows="3" className="w-full resize-none rounded-md border-2 border-black bg-white px-3 py-2 text-sm font-semibold outline-none placeholder:text-stone-400 focus:bg-orange-50" />
          </label>

          <div className="grid grid-cols-3 gap-1 [&>button]:whitespace-nowrap [&>button]:px-1 [&>button]:py-2 [&>button]:text-[9px] sm:gap-2 sm:[&>button]:px-3 sm:[&>button]:py-3 sm:[&>button]:text-xs">
            <button type="button" disabled={!canProcess} onClick={() => onAction(item.id, "notified")} className="rounded-md border-2 border-black bg-amber-100 px-3 py-3 text-xs font-black uppercase text-amber-800 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40">Báo NCC</button>
            <button type="button" disabled={!canProcess} onClick={() => onAction(item.id, "withdrawn")} className="rounded-md border-2 border-black bg-orange-100 px-3 py-3 text-xs font-black uppercase text-orange-800 transition hover:bg-orange-200 disabled:cursor-not-allowed disabled:opacity-40">Rút date</button>
            <button type="button" disabled={!canProcess} onClick={() => onAction(item.id, "destroyed")} className="rounded-md border-2 border-black bg-red-100 px-3 py-3 text-xs font-black uppercase text-red-800 transition hover:bg-red-200 disabled:cursor-not-allowed disabled:opacity-40">Hủy hàng</button>
          </div>
        </div>
      </aside>
    </div>
  );
}

function SummaryCard({ icon: Icon, value, label, color }) {
  const colors = {
    green: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
    slate: "bg-slate-100 text-slate-700",
  };

  return (
    <div className="group relative flex aspect-square min-w-0 flex-col justify-between overflow-hidden rounded-[16px] border-2 border-[#008061] bg-white p-2 shadow-[0_4px_0_rgba(0,134,106,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,134,106,0.14)] sm:aspect-auto sm:min-h-[180px] sm:rounded-[22px] sm:border-[3px] sm:p-5 sm:shadow-[0_8px_0_rgba(0,134,106,0.10)] sm:hover:shadow-[0_13px_0_rgba(0,134,106,0.14)]">
      <div className="flex items-start justify-between gap-3">
        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg shadow-md transition duration-300 group-hover:rotate-3 group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-xl ${colors[color]}`}>
          <Icon size={15} className="sm:h-[22px] sm:w-[22px]" />
        </span>
        <span className="text-3xl font-black italic leading-none text-[#EE3124]/10 sm:text-5xl">7</span>
      </div>
      <div className="mt-2 sm:mt-4">
        <p className="text-xl font-black leading-none text-[#EE3124] sm:text-3xl">{value}</p>
        <div className="mt-3 hidden items-center sm:flex">
          <span className="h-1 w-10 rounded-full bg-[#FF8200] transition-all duration-300 group-hover:w-20" />
          <span className="ml-1 h-1 w-3 rounded-full bg-[#007A3D]" />
        </div>
        <p className="mt-2 text-[8px] font-black uppercase leading-tight tracking-wide text-[#FF8200] sm:mt-3 sm:text-xs">
          {label}
        </p>
      </div>
      
    </div>
  );
}

export default function TonKho() {
  const [inventory, setInventory] = useState(loadInventory);
  const [groupId, setGroupId] = useState(productCatalog[0].id);
  const [categoryId, setCategoryId] = useState(
    productCatalog[0].categories[0].id,
  );
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [expiryRange, setExpiryRange] = useState("all");
  const [customExpiryValue, setCustomExpiryValue] = useState(1);
  const [customExpiryUnit, setCustomExpiryUnit] = useState("month");
  const [sortMode, setSortMode] = useState("expiry");
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
  }, [inventory]);

  const activeGroup =
    productCatalog.find((group) => group.id === groupId) ?? productCatalog[0];
  const activeCategory =
    activeGroup.categories.find((category) => category.id === categoryId) ??
    activeGroup.categories[0];
  const editingItem = inventory.find((item) => item.id === editingItemId) ?? null;

  useEffect(() => {
    setCategoryId(activeGroup.categories[0].id);
    setQuery("");
    setFilter("all");
    setExpiryRange("all");
  }, [activeGroup.id]);

  const visibleItems = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase("vi");

    return inventory
      .filter((item) => item.groupId === activeGroup.id)
      .filter((item) => item.categoryId === activeCategory.id)
      .filter((item) => {
        if (!keyword) return true;
        return (
          item.name.toLocaleLowerCase("vi").includes(keyword) ||
          item.note.toLocaleLowerCase("vi").includes(keyword)
        );
      })
      .filter((item) => {
        if (filter === "all") return true;
        if (filter === "risk") return daysUntil(item.expiryDate) !== null && daysUntil(item.expiryDate) <= 7;
        if (filter === "urgent") return daysUntil(item.expiryDate) !== null && daysUntil(item.expiryDate) <= 3;
        if (filter === "notified") return item.action === "notified";
        if (filter === "withdrawn") return item.action === "withdrawn";
        if (filter === "destroyed") return item.action === "destroyed";
        return true;
      })
      .filter((item) => {
        if (expiryRange === "all" || !item.expiryDate) return expiryRange === "all";

        const range = expiryRange === "custom" ? customExpiryUnit : expiryRange;
        const amount = expiryRange === "custom"
          ? Math.max(0, Number(customExpiryValue) || 0)
          : expiryRange === "year"
            ? 1
            : Number(range.replace("m", ""));
        const endDate = range === "day"
          ? addDays(TODAY, amount)
          : addMonths(TODAY, range === "year" ? amount * 12 : amount);
        return parseDateKey(item.expiryDate) <= endDate;
      })
      .sort((a, b) => {
        if (sortMode === "quantity") return (Number(a.quantity) || 0) - (Number(b.quantity) || 0);
        if (sortMode === "name") return a.name.localeCompare(b.name, "vi");
        return (daysUntil(a.expiryDate) ?? Number.MAX_SAFE_INTEGER) - (daysUntil(b.expiryDate) ?? Number.MAX_SAFE_INTEGER);
      });
  }, [activeCategory.id, activeGroup.id, customExpiryUnit, customExpiryValue, expiryRange, filter, inventory, query, sortMode]);

  const stats = useMemo(() => {
    const relevant = inventory.filter((item) => item.groupId === activeGroup.id);
    const urgent = relevant.filter((item) => daysUntil(item.expiryDate) !== null && daysUntil(item.expiryDate) <= 3);
    const risk = relevant.filter((item) => daysUntil(item.expiryDate) !== null && daysUntil(item.expiryDate) <= 7);
    const notified = relevant.filter((item) => item.action === "notified");
    const withdrawn = relevant.filter((item) => item.action === "withdrawn");
    const destroyed = relevant.filter((item) => item.action === "destroyed");

    return {
      total: relevant.length,
      urgent: urgent.length,
      risk: risk.length,
      notified: notified.length,
      withdrawn: withdrawn.length,
      destroyed: destroyed.length,
      totalQty: relevant.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0),
    };
  }, [activeGroup.id, inventory]);

  const updateItem = (itemId, updater) => {
    setInventory((current) =>
      current.map((item) =>
        item.id === itemId ? updater(item) : item,
      ),
    );
  };

  const handleAction = (itemId, action) => {
    updateItem(itemId, (item) => ({
      ...item,
      action,
      statusUpdatedAt: formatDateKey(TODAY),
      note:
        action === "notified"
          ? "Đã báo NCC"
          : action === "withdrawn"
            ? "Đã rút date"
            : action === "destroyed"
              ? "Đã hủy hàng"
              : item.note,
    }));
  };

  const handleQuantityChange = (itemId, quantity) => {
    updateItem(itemId, (item) => ({
      ...item,
      quantity: quantity === "" ? "" : quantity,
    }));
  };

  const handleFieldChange = (itemId, field, value) => {
    updateItem(itemId, (item) => {
      if (field === "expiryDateInput") {
        const expiryDate = parseInputDate(value);
        return {
          ...item,
          expiryDateInput: expiryDate ? toInputDate(expiryDate) : value,
          expiryDate: expiryDate || "",
          supplierReminderDate: expiryDate
            ? calculateSupplierReminderDate(
                expiryDate,
                item.reminderValue,
                item.reminderUnit,
              )
            : "",
        };
      }

      return {
        ...item,
        [field]: value,
        ...(field === "expiryDate" || field === "reminderValue" || field === "reminderUnit"
          ? {
              supplierReminderDate: calculateSupplierReminderDate(
                field === "expiryDate" ? value : item.expiryDate,
                field === "reminderValue" ? value : item.reminderValue,
                field === "reminderUnit" ? value : item.reminderUnit,
              ),
            }
          : {}),
      };
    });
  };

  const handleAutoDate = (itemId) => {
    updateItem(itemId, (item) => {
      if (!item.expiryDate) return item;

      return {
        ...item,
        supplierReminderDate: calculateSupplierReminderDate(item.expiryDate, item.reminderValue, item.reminderUnit),
      };
    });
  };

  const exportFilteredItems = () => {
    const headers = ["Sản phẩm", "Nhóm hàng", "Danh mục", "Nhà cung cấp", "Số lượng", "HSD", "Ngày báo NCC", "Trạng thái", "Ghi chú"];
    const escapeHtml = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
    const rows = visibleItems.map((item) => [
      item.name,
      item.groupName,
      item.categoryName,
      item.supplierName,
      item.quantity,
      toDisplayDate(item.expiryDate),
      toDisplayDate(item.supplierReminderDate),
      getStockState(item).label,
      item.note,
    ]);
    const table = `<meta charset="utf-8"><table><thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((value) => `<td>${escapeHtml(value)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    const blob = new Blob([table], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ton-kho-${filter}-${formatDateKey(TODAY)}.xls`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="mx-auto max-w-[1750px]">
      <div className="overflow-hidden rounded-xl border-2 border-black bg-white">
        <StripeBar />

        <div className="p-3 sm:p-5 md:p-7">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#007A3D] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-white">
                  Store manager dashboard
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <SummaryCard
                  icon={Package2}
                  value={stats.total}
                  label="Mặt hàng trong nhóm"
                  color="green"
                />
                <SummaryCard
                  icon={AlertTriangle}
                  value={stats.urgent}
                  label="Sắp hết hạn"
                  color="red"
                />
                <SummaryCard
                  icon={RotateCcw}
                  value={stats.withdrawn}
                  label="Rút date"
                  color="orange"
                />
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)]">
              <aside className="rounded-2xl border-2 border-black bg-stone-50 p-4">
                <div className="flex items-center gap-2">
                  <Settings2 size={18} className="text-[#007A3D]" />
                  <p className="text-sm font-black uppercase tracking-wider text-black">
                    Bộ lọc vận hành
                  </p>
                </div>

                <label className="relative mt-4 block">
                  <Search
                    size={18}
                    strokeWidth={2.5}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Tìm sản phẩm, ghi chú..."
                    className="h-11 w-full rounded-md border-2 border-black bg-white pl-11 pr-4 text-sm font-semibold text-black outline-none placeholder:font-normal placeholder:text-stone-400 focus:bg-orange-50 focus:ring-4 focus:ring-[#FF8200]/30"
                  />
                </label>

                <label className="mt-3 block">
                  <span className="mb-1 block text-[10px] font-black uppercase tracking-wider text-stone-500">
                    Nhóm hàng
                  </span>
                  <select
                    value={groupId}
                    onChange={(event) => setGroupId(event.target.value)}
                    className="h-11 w-full rounded-md border-2 border-black bg-white px-3 text-sm font-semibold text-black outline-none focus:bg-orange-50"
                  >
                    {productCatalog.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </label>

                <div
                  className="mt-3 flex flex-wrap gap-2"
                  role="tablist"
                  aria-label={`Danh mục ${activeGroup.name}`}
                >
                  {activeGroup.categories.map((category) => {
                    const selected = category.id === activeCategory.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setCategoryId(category.id)}
                        className={`rounded-md border-2 border-black px-3 py-2 text-xs font-black uppercase tracking-tight transition ${
                          selected
                            ? "bg-[#EE3124] text-white shadow-[2px_2px_0_0_#000]"
                            : "bg-white text-black hover:bg-stone-50"
                        }`}
                      >
                        {category.name}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className={`rounded-md border-2 border-black px-3 py-2 text-xs font-black uppercase ${
                      filter === "all"
                        ? "bg-[#007A3D] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Tất cả
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("risk")}
                    className={`rounded-md border-2 border-black px-3 py-2 text-xs font-black uppercase ${
                      filter === "risk"
                        ? "bg-[#FF8200] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Cần xem
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("urgent")}
                    className={`rounded-md border-2 border-black px-3 py-2 text-xs font-black uppercase ${
                      filter === "urgent"
                        ? "bg-[#EE3124] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Sắp hết hạn
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("notified")}
                    className={`rounded-md border-2 border-black px-3 py-2 text-xs font-black uppercase ${
                      filter === "notified"
                        ? "bg-[#008061] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Đã báo NCC
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("withdrawn")}
                    className={`rounded-md border-2 border-black px-3 py-2 text-xs font-black uppercase ${
                      filter === "withdrawn"
                        ? "bg-slate-700 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Rút date
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("destroyed")}
                    className={`rounded-md border-2 border-black px-3 py-2 text-xs font-black uppercase ${
                      filter === "destroyed"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Hủy hàng
                  </button>
                </div>

                <div className="mt-4 rounded-xl border-2 border-black bg-[#FFF8EC] p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-black">
                      Lọc theo HSD
                    </span>
                    <CalendarClock size={16} className="text-[#EE3124]" />
                  </div>
                  <select
                    value={expiryRange}
                    onChange={(event) => setExpiryRange(event.target.value)}
                    className="mt-2 h-10 w-full rounded-md border-2 border-black bg-white px-2 text-sm font-bold outline-none focus:bg-orange-50"
                  >
                    <option value="all">Tất cả thời hạn</option>
                    <option value="1m">HSD trong 1 tháng</option>
                    <option value="2m">HSD trong 2 tháng</option>
                    <option value="3m">HSD trong 3 tháng</option>
                    <option value="6m">HSD trong 6 tháng</option>
                    <option value="year">HSD trong 1 năm</option>
                    <option value="custom">Tùy chỉnh</option>
                  </select>

                  {expiryRange === "custom" && (
                    <div className="mt-2 grid grid-cols-[1fr_1fr] gap-2">
                      <input
                        type="number"
                        min="0"
                        value={customExpiryValue}
                        onChange={(event) => setCustomExpiryValue(event.target.value)}
                        className="h-10 w-full rounded-md border-2 border-black bg-white px-2 text-sm font-bold outline-none focus:bg-orange-50"
                        aria-label="Số lượng thời gian lọc HSD"
                      />
                      <select
                        value={customExpiryUnit}
                        onChange={(event) => setCustomExpiryUnit(event.target.value)}
                        className="h-10 w-full rounded-md border-2 border-black bg-white px-2 text-sm font-bold outline-none focus:bg-orange-50"
                        aria-label="Đơn vị thời gian lọc HSD"
                      >
                        <option value="day">Ngày tới</option>
                        <option value="month">Tháng tới</option>
                        <option value="year">Năm tới</option>
                      </select>
                    </div>
                  )}
                </div>

                <label className="mt-4 block">
                  <span className="mb-1 block text-[10px] font-black uppercase tracking-wider text-stone-500">
                    Sắp xếp
                  </span>
                  <div className="relative">
                    <ArrowUpDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
                    />
                    <select
                      value={sortMode}
                      onChange={(event) => setSortMode(event.target.value)}
                      className="h-11 w-full appearance-none rounded-md border-2 border-black bg-white px-3 pr-9 text-sm font-semibold text-black outline-none focus:bg-orange-50"
                    >
                      <option value="expiry">Gần hết hạn</option>
                      <option value="quantity">Tồn thấp trước</option>
                      <option value="name">Tên A-Z</option>
                    </select>
                  </div>
                </label>

                <button
                  type="button"
                  onClick={exportFilteredItems}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-black bg-[#007A3D] px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-[#016a34]"
                >
                  <Download size={17} />
                  Xuất Excel theo bộ lọc
                </button>
              </aside>

              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-black uppercase text-black">
                      {activeCategory.name}
                    </h3>
                    <p className="text-sm text-stone-500">
                      {visibleItems.length} sản phẩm đang hiển thị
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-stone-500">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">
                      <CheckCircle2 size={14} />
                      An toàn
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-orange-700">
                      <AlertTriangle size={14} />
                      Cần theo dõi
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-red-700">
                      <Trash2 size={14} />
                      Can thiệp
                    </span>
                  </div>
                </div>

                {visibleItems.length > 0 ? (
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                    {visibleItems.map((item) => (
                      <InventoryCard
                        key={item.id}
                        item={item}
                        onOpen={setEditingItemId}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid min-h-64 place-items-center rounded-md border-2 border-dashed border-black bg-stone-50 p-8 text-center">
                    <div>
                      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-black bg-[#FF8200] text-white">
                        <Package2 size={28} />
                      </div>
                      <p className="mt-4 text-base font-black uppercase text-black">
                        Chưa có sản phẩm phù hợp
                      </p>
                      <p className="mt-1 max-w-sm text-sm leading-6 text-stone-600">
                        Hãy đổi bộ lọc hoặc từ khóa tìm kiếm để xem lại danh sách
                        hàng trong nhóm này.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {editingItem && (
        <InventoryDrawer
          item={editingItem}
          onClose={() => setEditingItemId(null)}
          onAction={handleAction}
          onQuantityChange={handleQuantityChange}
          onFieldChange={handleFieldChange}
          onAutoDate={handleAutoDate}
        />
      )}
    </section>
  );
}

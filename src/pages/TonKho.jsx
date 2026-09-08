import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  Download,
  PackageOpen,
  Search,
  Trash2,
} from "lucide-react";

const INVENTORY_STORAGE_KEY = "inventoryRecords";

const DEFAULT_THEME = {
  primary: "#008061",
  primaryDark: "#006C52",
  primarySoft: "#EAF8F3",
  accent: "#FF8200",
  accentSoft: "#FFF4E6",
  danger: "#EE3124",
  dangerDark: "#C92319",
  outline: "#008061",
  mutedOutline: "#87A89E",
};

const QUICK_FILTERS = [
  { id: "all", label: "Tất cả" },
  { id: "1d", label: "1 ngày", days: 1 },
  { id: "7d", label: "7 ngày", days: 7 },
  { id: "30d", label: "30 ngày", days: 30 },
  { id: "3m", label: "3 tháng", months: 3 },
  { id: "6m", label: "6 tháng", months: 6 },
  { id: "1y", label: "1 năm", months: 12 },
];

function readRecords() {
  try {
    const parsed = JSON.parse(
      localStorage.getItem(INVENTORY_STORAGE_KEY) ?? "[]",
    );
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseLocalDate(value) {
  if (!value) return null;

  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(value) {
  const date = parseLocalDate(value);
  if (!date) return "--";

  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatDateTime(value) {
  if (!value) return "--";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--";

  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function getDaysUntil(value) {
  const expiryDate = parseLocalDate(value);
  if (!expiryDate) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((expiryDate.getTime() - today.getTime()) / 86400000);
}

function getExpiryStatus(days) {
  if (days === null || days < 7) {
    return {
      label: days !== null && days < 0 ? "Đã hết hạn" : "Khẩn cấp",
      card: "bg-red-50",
      cardBorder: "border-red-600",
      cardShadow: "shadow-[3px_3px_0_0_#dc2626] hover:shadow-[5px_5px_0_0_#dc2626]",
      badge: "bg-red-600 text-white",
    };
  }

  if (days <= 14) {
    return {
      label: "Cần xử lý sớm",
      card: "bg-orange-50",
      cardBorder: "border-orange-500",
      cardShadow: "shadow-[3px_3px_0_0_#f97316] hover:shadow-[5px_5px_0_0_#f97316]",
      badge: "bg-orange-500 text-white",
    };
  }

  if (days <= 30) {
    return {
      label: "Sắp đến hạn",
      card: "bg-amber-50",
      cardBorder: "border-amber-400",
      cardShadow: "shadow-[3px_3px_0_0_#fbbf24] hover:shadow-[5px_5px_0_0_#fbbf24]",
      badge: "bg-amber-400 text-black",
    };
  }

  return {
    label: "Còn hạn",
    card: "bg-white",
    cardBorder: "border-emerald-600",
    cardShadow: "shadow-[3px_3px_0_0_#059669] hover:shadow-[5px_5px_0_0_#059669]",
    badge: "bg-emerald-100 text-emerald-800",
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function exportExcel(records) {
  const rows = records
    .map(
      (record) => `
        <tr>
          <td>${escapeHtml(record.productName)}</td>
          <td>${escapeHtml(record.variantSize || "-")}</td>
          <td>${escapeHtml(record.quantity)}</td>
          <td>${escapeHtml(formatDate(record.expiryDate))}</td>
          <td>${escapeHtml(record.supplier)}</td>
          <td>${escapeHtml(formatDateTime(record.savedAt))}</td>
        </tr>`,
    )
    .join("");
  const html = `
    <html>
      <head><meta charset="UTF-8" /></head>
      <body>
        <table border="1">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Size</th>
              <th>Số lượng</th>
              <th>Hạn sử dụng</th>
              <th>NCC</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </body>
    </html>`;
  const blob = new Blob([`\ufeff${html}`], {
    type: "application/vnd.ms-excel;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `ton-kho-${toDateInputValue(new Date())}.xls`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export default function TonKho({ theme = DEFAULT_THEME }) {
  const [records, setRecords] = useState(readRecords);
  const [quickFilter, setQuickFilter] = useState("all");
  const [expiryBand, setExpiryBand] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [search, setSearch] = useState("");

  useEffect(() => {
    const syncRecords = () => setRecords(readRecords());
    window.addEventListener("storage", syncRecords);
    return () => window.removeEventListener("storage", syncRecords);
  }, []);

  const filteredRecords = useMemo(() => {
    const selectedQuickFilter = QUICK_FILTERS.find(
      (filter) => filter.id === quickFilter,
    );
    const today = new Date();
    let quickLimitDays = null;

    if (selectedQuickFilter?.days) {
      const endDate = new Date(today);
      endDate.setDate(endDate.getDate() + selectedQuickFilter.days);
      quickLimitDays = getDaysUntil(toDateInputValue(endDate));
    }

    if (selectedQuickFilter?.months) {
      const endDate = new Date(today);
      endDate.setMonth(endDate.getMonth() + selectedQuickFilter.months);
      quickLimitDays = getDaysUntil(toDateInputValue(endDate));
    }

    const lowerSearch = search.trim().toLocaleLowerCase("vi");

    return records
      .filter((record) => {
        const matchesSearch =
          !lowerSearch ||
          `${record.productName} ${record.supplier}`
            .toLocaleLowerCase("vi")
            .includes(lowerSearch);
        const remainingDays = getDaysUntil(record.expiryDate);
        const matchesQuick =
          quickFilter === "all" ||
          (remainingDays !== null &&
            remainingDays >= 0 &&
            remainingDays <= quickLimitDays);
        const matchesExpiryBand =
          expiryBand === "all" ||
          (remainingDays !== null &&
            ((expiryBand === "15-30" && remainingDays >= 15 && remainingDays <= 30) ||
              (expiryBand === "8-14" && remainingDays >= 8 && remainingDays <= 14) ||
              (expiryBand === "1-7" && remainingDays >= 0 && remainingDays <= 7)));
        const matchesFrom = !dateFrom || record.expiryDate >= dateFrom;
        const matchesTo = !dateTo || record.expiryDate <= dateTo;

        return (
          matchesSearch &&
          matchesQuick &&
          matchesExpiryBand &&
          matchesFrom &&
          matchesTo
        );
      })
      .sort((a, b) => a.expiryDate.localeCompare(b.expiryDate));
  }, [dateFrom, dateTo, expiryBand, quickFilter, records, search]);

  const allFilteredSelected =
    filteredRecords.length > 0 &&
    filteredRecords.every((record) => selectedIds.has(record.id));

  const toggleSelected = (id) => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAllFiltered = () => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (allFilteredSelected) {
        filteredRecords.forEach((record) => next.delete(record.id));
      } else {
        filteredRecords.forEach((record) => next.add(record.id));
      }
      return next;
    });
  };

  const deleteSelected = () => {
    if (selectedIds.size === 0) return;
    if (!window.confirm(`Xóa ${selectedIds.size} bản ghi đã chọn?`)) return;

    const remaining = records.filter((record) => !selectedIds.has(record.id));
    localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(remaining));
    setRecords(remaining);
    setSelectedIds(new Set());
  };

  const clearDateFilters = () => {
    setQuickFilter("all");
    setExpiryBand("all");
    setDateFrom("");
    setDateTo("");
  };

  return (
    <section
      className="mx-auto max-w-[1500px]"
      style={{
        "--ui-primary": theme.primary,
        "--ui-primary-dark": theme.primaryDark,
        "--ui-primary-soft": theme.primarySoft,
        "--ui-accent": theme.accent,
        "--ui-accent-soft": theme.accentSoft,
        "--ui-danger": theme.danger,
        "--ui-danger-dark": theme.dangerDark,
        "--ui-outline": theme.outline,
        "--ui-muted-outline": theme.mutedOutline,
      }}
    >
      <div className="overflow-hidden rounded-xl border-2 border-black bg-white">
        <div
          className="h-2 w-full"
          style={{
            background:
              "repeating-linear-gradient(-35deg, #FF8200 0 22px, #EE3124 22px 44px, #007A3D 44px 66px)",
          }}
        />

        <div className="p-5 md:p-7">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#008061]">
                Theo dõi lô hàng
              </p>
              <h1 className="mt-2 inline-block rounded-sm bg-[#007A3D] px-2 py-0.5 text-[18px] font-black uppercase tracking-wide text-white">
                Tồn kho & Hạn sử dụng
              </h1>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => exportExcel(filteredRecords)}
                disabled={filteredRecords.length === 0}
                className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#007A3D] px-4 py-2.5 text-sm font-black uppercase text-white shadow-[2px_2px_0_0_#000] transition hover:bg-[#006b35] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Download size={17} />
                Xuất Excel
              </button>
              <button
                type="button"
                onClick={deleteSelected}
                disabled={selectedIds.size === 0}
                className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-[#EE3124] px-4 py-2.5 text-sm font-black uppercase text-white shadow-[2px_2px_0_0_#000] transition hover:bg-red-700 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Trash2 size={17} />
                Xóa đã chọn ({selectedIds.size})
              </button>
            </div>
          </div>

          <div className="mt-5 rounded-md border-2 border-black bg-orange-50 p-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {QUICK_FILTERS.map((filter) => {
                  const selected = quickFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => {
                        setQuickFilter(filter.id);
                        setExpiryBand("all");
                        if (filter.id !== "all") {
                          setDateFrom("");
                          setDateTo("");
                        }
                      }}
                      className={`rounded-md border-2 border-black px-3 py-2 text-xs font-black uppercase transition ${
                        selected
                          ? "bg-[#EE3124] text-white shadow-[2px_2px_0_0_#000]"
                          : "bg-white text-black hover:bg-stone-50"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-end gap-2">
                <label className="text-xs font-black uppercase text-black">
                  Từ ngày
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(event) => {
                      setDateFrom(event.target.value);
                      setQuickFilter("all");
                      setExpiryBand("all");
                    }}
                    className="mt-1 block h-10 rounded-md border-2 border-black bg-white px-2 text-sm font-semibold outline-none focus:bg-orange-50 focus:ring-4 focus:ring-[#FF8200]/30"
                  />
                </label>
                <label className="text-xs font-black uppercase text-black">
                  Đến ngày
                  <input
                    type="date"
                    value={dateTo}
                    onChange={(event) => {
                      setDateTo(event.target.value);
                      setQuickFilter("all");
                      setExpiryBand("all");
                    }}
                    className="mt-1 block h-10 rounded-md border-2 border-black bg-white px-2 text-sm font-semibold outline-none focus:bg-orange-50 focus:ring-4 focus:ring-[#FF8200]/30"
                  />
                </label>
                {(dateFrom || dateTo || quickFilter !== "all" || expiryBand !== "all") && (
                  <button
                    type="button"
                    onClick={clearDateFilters}
                    className="h-10 rounded-md border-2 border-black bg-white px-3 text-xs font-black uppercase text-black transition hover:bg-stone-50"
                  >
                    Xóa lọc
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative block w-full sm:max-w-sm">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Tìm sản phẩm hoặc NCC..."
                className="h-11 w-full rounded-md border-2 border-black bg-white pl-10 pr-3 text-sm font-semibold outline-none transition focus:bg-orange-50 focus:ring-4 focus:ring-[#FF8200]/30"
              />
            </label>

            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
              {[
                ["15-30", "bg-amber-400"],
                ["8-14", "bg-orange-500"],
                ["1-7", "bg-red-600"],
              ].map(([band, color]) => (
                <button
                  key={band}
                  type="button"
                  onClick={() => {
                    setExpiryBand((current) => (current === band ? "all" : band));
                    setQuickFilter("all");
                    setDateFrom("");
                    setDateTo("");
                  }}
                  className={`inline-flex items-center gap-1.5 rounded px-2 py-1 transition ${
                    expiryBand === band
                      ? "bg-black text-white"
                      : "hover:bg-white hover:text-black"
                  }`}
                >
                  <span className={`h-3 w-3 rounded-full ${color}`} /> {band}
                </button>
              ))}
            </div>
          </div>

          {filteredRecords.length > 0 ? (
            <div className="mt-5">
              <button
                type="button"
                onClick={toggleAllFiltered}
                className="mb-3 inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-2 text-xs font-black uppercase text-black transition hover:bg-stone-50"
              >
                <span className="grid h-4 w-4 place-items-center rounded border-2 border-black">
                  {allFilteredSelected && <Check size={12} strokeWidth={4} />}
                </span>
                Chọn tất cả kết quả
              </button>

              <div className="space-y-3">
                {filteredRecords.map((record) => {
                  const days = getDaysUntil(record.expiryDate);
                  const status = getExpiryStatus(days);
                  const checked = selectedIds.has(record.id);

                  return (
                    <article
                      key={record.id}
                      onClick={() => toggleSelected(record.id)}
                      className={`relative cursor-pointer rounded-md border-2 ${status.cardBorder} bg-white px-2.5 py-2 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 ${status.cardShadow} ${status.card}`}
                    >
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleSelected(record.id);
                        }}
                        className={`absolute right-2 top-2 z-10 grid h-5 w-5 place-items-center rounded border-2 border-black bg-[var(--ui-accent)] shadow-none ${
                          checked ? "" : "hidden"
                        }`}
                        aria-label={checked ? "Bỏ chọn" : "Chọn bản ghi"}
                      >
                        {checked && <Check size={15} strokeWidth={4} />}
                      </button>

                      <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-2 pl-16 pr-8 md:gap-x-3 md:pl-20">
                        <div
                          className={`absolute bottom-2 left-2 top-2 w-14 overflow-hidden rounded border-2 ${status.cardBorder} bg-white md:w-16`}
                        >
                          {record.productImage ? (
                            <img
                              src={record.productImage}
                              alt={record.productName}
                              className="h-full w-full object-contain p-1"
                            />
                          ) : (
                            <div className="grid h-full place-items-center text-slate-300">
                              <PackageOpen size={18} />
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h2 className="line-clamp-1 text-sm font-black uppercase leading-tight tracking-tight text-black sm:text-base">
                              {record.productName}
                            </h2>
                            {record.variantSize && (
                              <span className="shrink-0 text-xs font-bold text-slate-600">
                                ({record.variantSize})
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="grid w-full grid-cols-[0.65fr_1fr_1.35fr] gap-1 text-[10px] md:flex md:w-auto md:flex-none md:items-center md:gap-2 md:text-xs">
                          <div className="min-w-0 whitespace-nowrap rounded border border-[#008061] px-1 py-1 text-center md:px-2">
                            <span className="font-bold text-slate-500">SL </span>
                            <span className="font-black text-black">{record.quantity}</span>
                          </div>
                          <div className="min-w-0 whitespace-nowrap rounded border border-[#008061] px-1 py-1 text-center md:px-2">
                            <span className="font-bold text-slate-500">&lt; </span>
                            <span className="font-black text-black">
                              {days === null
                                ? "--"
                                : days < 0
                                  ? `${Math.abs(days)} ngày quá hạn`
                                  : `${days} ngày`}
                            </span>
                          </div>
                          <div
                            className={`flex min-w-0 items-center justify-center gap-0.5 whitespace-nowrap rounded border-2 px-1 py-1 text-[9px] md:gap-1 md:px-2 md:text-xs ${
                              days === null || days < 7
                                ? "border-red-600 bg-red-100 text-red-700"
                                : days <= 14
                                  ? "border-orange-500 bg-orange-100 text-orange-800"
                                  : days <= 30
                                    ? "border-amber-500 bg-amber-100 text-amber-900"
                                    : "border-emerald-600 bg-emerald-100 text-emerald-800"
                            }`}
                          >
                            <span className="font-black">
                              {formatDate(record.expiryDate)}
                            </span>
                          </div>
                        </div>

                      </div>

                      <div className="mt-1 flex min-w-0 items-center gap-2 pl-16 text-[10px] text-slate-500 md:gap-3 md:pl-20">
                        <span className="inline-flex min-w-0 items-center gap-1 rounded border border-[#008061] bg-[#EAF8F3] px-2 py-0.5 font-bold text-[#006C52]">
                          <span className="font-black uppercase">NCC</span>
                          <span className="truncate uppercase text-black">{record.supplier}</span>
                        </span>
                        <span className="shrink-0">{formatDateTime(record.savedAt)}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="mt-5 grid min-h-64 place-items-center rounded-md border-2 border-dashed border-black bg-stone-50 p-8 text-center">
              <div>
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-black bg-[#FF8200] text-white shadow-[3px_3px_0_0_#000]">
                  <CalendarDays size={28} />
                </div>
                <p className="mt-4 text-base font-black uppercase text-black">
                  Chưa có dữ liệu tồn kho
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Hãy nhấn vào một card sản phẩm để thêm lô hàng đầu tiên.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

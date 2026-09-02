import {
  BookOpenCheck,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  PackageSearch,
  LayoutGrid,
  X,
} from "lucide-react";
import { productCatalog } from "../data/productCatalog";

const nav = [
  {
    id: "daoTao",
    label: "Đào tạo nhân sự",
    icon: BookOpenCheck,
  },
  {
    id: "phanCongCa",
    label: "Phân công ca",
    icon: CalendarDays,
  },
  {
    id: "tonKho",
    label: "Tồn kho & HSD",
    icon: PackageSearch,
  },
];

export default function Sidebar({
  activePage,
  activeProductGroupId,
  onNavigate,
  open,
  onClose,
}) {
  const productPageActive = activePage === "danhMucSanPham";

  const navigate = (pageId, groupId = null) => {
    onNavigate(pageId, groupId);
    onClose();
  };

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Đóng menu"
          className="fixed inset-0 z-30 bg-slate-950/35 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-brand-green text-white transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-24 shrink-0 items-center gap-3 border-b border-white/10 px-6">
          <img
            src="/logo.png"
            alt="Logo cửa hàng"
            className="h-14 w-14 shrink-0 rounded-xl object-contain shadow-sm"
          />

          <div className="min-w-0">
            <p className="truncate text-lg font-extrabold tracking-tight">
              STORE MANAGER
            </p>

            <p className="truncate text-xs text-emerald-100">
              QUẢN LÝ CỬA HÀNG
            </p>
          </div>

          <button
            type="button"
            aria-label="Đóng menu"
            className="ml-auto rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nội dung sidebar có thể cuộn */}
        <nav className="sidebar-scroll flex-1 overflow-y-auto px-4 py-6">
          {" "}
          <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[.18em] text-emerald-200">
            Không gian làm việc
          </p>
          <div className="space-y-2">
            {nav.map(({ id, label, icon: Icon }) => {
              const selected = activePage === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => navigate(id)}
                  className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition ${
                    selected
                      ? "bg-white text-brand-green shadow-lg"
                      : "text-emerald-50 hover:bg-white/10"
                  }`}
                >
                  <Icon size={20} strokeWidth={2.2} />

                  <span>{label}</span>

                  {selected && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-brand-orange" />
                  )}
                </button>
              );
            })}
          </div>
          {/* Danh mục sản phẩm */}
          <div className="mt-2">
            <div className="flex w-full items-center gap-3 px-4 py-3.5">
              <LayoutGrid
  size={20}
  strokeWidth={2.2}
  className="shrink-0 text-emerald-50"
/>

              <p className="flex-1 text-left text-sm font-semibold text-emerald-50">
                Danh mục sản phẩm
              </p>

              {productPageActive ? (
                <ChevronDown size={16} className="shrink-0 text-emerald-200" />
              ) : (
                <ChevronRight size={16} className="shrink-0 text-emerald-200" />
              )}
            </div>

            <div className="space-y-1">
              {productCatalog.map((group) => {
                const selected =
                  productPageActive && activeProductGroupId === group.id;

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => navigate("danhMucSanPham", group.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                      selected
                        ? "bg-white text-brand-green shadow-lg"
                        : "text-emerald-50 hover:bg-white/10"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        selected ? "bg-brand-orange" : "bg-emerald-300"
                      }`}
                    />

                    <span className="min-w-0 flex-1">{group.name}</span>

                    {group.badge && (
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] font-black ${
                          selected
                            ? "bg-brand-red text-white"
                            : "bg-white/15 text-white"
                        }`}
                      >
                        {group.badge}
                      </span>
                    )}

                    <ChevronRight
                      size={14}
                      className={
                        selected ? "text-brand-green" : "text-emerald-200"
                      }
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Trạng thái cửa hàng */}
        <div className="m-4 shrink-0 rounded-2xl bg-emerald-950/20 p-4">
          <p className="text-xs text-emerald-100">Cửa hàng hôm nay</p>

          <div className="mt-2 flex items-center justify-between">
            <span className="font-bold">Hoạt động tốt</span>

            <span className="h-2.5 w-2.5 rounded-full bg-lime-300 ring-4 ring-lime-300/15" />
          </div>
        </div>
      </aside>
    </>
  );
}

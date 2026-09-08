import { useEffect, useMemo, useState } from "react";

import { ImageOff, PackageOpen, Search } from "lucide-react";

import { formatPrice, productCatalog } from "../data/productCatalog";

const INVENTORY_STORAGE_KEY = "inventoryRecords";

function formatDateInput(value) {
  const digits = value.replace(/\D/g, "").slice(0, 6);

  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}-${digits.slice(2)}`;

  return `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4)}`;
}

function toIsoDate(value) {
  const digits = value.replace(/\D/g, "");

  if (digits.length !== 6) return null;

  const day = Number(digits.slice(0, 2));
  const month = Number(digits.slice(2, 4));
  const year = 2000 + Number(digits.slice(4));
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return `${year.toString().padStart(4, "0")}-${month
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}

function createRecordId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
}

function InventoryModal({ product, variant, onClose, onSaved }) {
  const [quantity, setQuantity] = useState("");
  const [expiryInput, setExpiryInput] = useState("");
  const [supplier, setSupplier] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const expiryDate = toIsoDate(expiryInput);
    const parsedQuantity = Number(quantity);

    if (!Number.isInteger(parsedQuantity) || parsedQuantity <= 0) {
      setError("Số lượng phải là số nguyên lớn hơn 0.");
      return;
    }

    if (!expiryDate) {
      setError("Vui lòng nhập ngày theo định dạng dd-mm-yy.");
      return;
    }

    const storedRecords = JSON.parse(
      localStorage.getItem(INVENTORY_STORAGE_KEY) ?? "[]",
    );
    const records = Array.isArray(storedRecords) ? storedRecords : [];

    records.push({
      id: createRecordId(),
      productId: product.id ?? null,
      productName: product.name,
      productImage: variant.image ?? product.image ?? "",
      variantId: variant.id ?? null,
      variantSize: variant.size ?? "",
      quantity: parsedQuantity,
      expiryDate,
      supplier: supplier.trim(),
      savedAt: new Date().toISOString(),
    });

    localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(records));
    onSaved();
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/65 p-2 backdrop-blur-sm sm:p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <form
        role="dialog"
        aria-modal="true"
        aria-labelledby="inventory-modal-title"
        onSubmit={handleSubmit}
        className="max-h-[calc(100vh-1rem)] w-full max-w-lg overflow-y-auto rounded-2xl border-2 border-black bg-white p-0 shadow-[4px_4px_0_0_#000] sm:max-h-[calc(100vh-2rem)] sm:rounded-3xl sm:shadow-[6px_6px_0_0_#000]"
      >
        <div className="flex items-start justify-between gap-2 border-b-2 border-black bg-gradient-to-br from-[#007A3D] to-[#005c3a] p-3 text-white sm:gap-3 sm:p-5">
          <div>
            <h2
              id="inventory-modal-title"
              className="mt-1 text-base font-black uppercase leading-tight text-white sm:text-lg"
            >
              {product.name}
              {variant.size ? ` - Size ${variant.size}` : ""}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg border-2 border-white bg-white/10 p-0 text-lg font-black leading-none text-white hover:bg-white hover:text-[#007A3D] sm:h-9 sm:w-9"
            aria-label="Đóng"
          >
            ×
          </button>
        </div>

        <div className="mx-3 mt-3 grid grid-cols-2 gap-2 sm:mx-5 sm:mt-5 sm:gap-3">
          <label className="rounded-xl border-2 border-slate-200 bg-slate-50 p-2 text-xs font-black text-black transition focus-within:border-[#007A3D] focus-within:bg-emerald-50 sm:rounded-2xl sm:p-3 sm:text-sm">
            SL
            <input
              type="number"
              min="1"
              step="1"
              required
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="mt-1 h-10 w-full rounded-lg border-2 border-black bg-white px-3 outline-none focus:ring-4 focus:ring-[#FF8200]/30 sm:mt-2 sm:h-11 sm:rounded-xl"
            />
          </label>

          <label className="rounded-xl border-2 border-slate-200 bg-slate-50 p-2 text-xs font-black text-black transition focus-within:border-[#007A3D] focus-within:bg-emerald-50 sm:rounded-2xl sm:p-3 sm:text-sm">
            HSD
            <input
              type="text"
              inputMode="numeric"
              required
              maxLength={8}
              placeholder="dd-mm-yy"
              value={expiryInput}
              onChange={(event) =>
                setExpiryInput(formatDateInput(event.target.value))
              }
              className="mt-1 h-10 w-full rounded-lg border-2 border-black bg-white px-3 outline-none focus:ring-4 focus:ring-[#FF8200]/30 sm:mt-2 sm:h-11 sm:rounded-xl"
            />
          </label>

          <label className="col-span-2 rounded-xl border-2 border-slate-200 bg-slate-50 p-2 text-xs font-black text-black transition focus-within:border-[#007A3D] focus-within:bg-emerald-50 sm:rounded-2xl sm:p-3 sm:text-sm">
            NCC
            <input
              type="text"
              value={supplier}
              onChange={(event) => setSupplier(event.target.value)}
              className="mt-1 h-10 w-full rounded-lg border-2 border-black bg-white px-3 outline-none focus:ring-4 focus:ring-[#FF8200]/30 sm:mt-2 sm:h-11 sm:rounded-xl"
            />
          </label>

        </div>

        {error && (
          <p className="mx-3 mt-2 rounded-xl border-2 border-[#EE3124] bg-red-50 px-3 py-2 text-xs font-bold text-[#B42318] sm:mx-5 sm:mt-3 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm">
            {error}
          </p>
        )}

        <div className="mx-3 mt-3 flex flex-row justify-end gap-2 border-t-2 border-dashed border-slate-200 pb-3 pt-3 sm:mx-5 sm:mt-4 sm:pb-5 sm:pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border-2 border-black px-4 py-2.5 text-xs font-black uppercase transition hover:bg-stone-50 sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="rounded-lg border-2 border-black bg-[#EE3124] px-4 py-2.5 text-xs font-black uppercase text-white shadow-[2px_2px_0_0_#000] transition hover:-translate-y-0.5 hover:bg-red-700 sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm sm:shadow-[3px_3px_0_0_#000]"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}

/* Dải sọc 3 màu đặc trưng của biển hiệu 7-Eleven */
function StripeBar({ className = "" }) {
  return (
    <div
      className={`h-2 w-full ${className}`}
      style={{
        background:
          "repeating-linear-gradient(-35deg, #FF8200 0 22px, #EE3124 22px 44px, #007A3D 44px 66px)",
      }}
    />
  );
}

function ProductCard({ product, onOpen }) {
  const variants = product.variants ?? [product];
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0].id);

  const selectedVariant =
    variants.find((variant) => variant.id === selectedVariantId) ?? variants[0];

  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-md border-2 border-[#008061] bg-white shadow-[3px_3px_0_0_#008061] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#008061]"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(product, selectedVariant)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onOpen(product, selectedVariant);
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {selectedVariant.image ? (
          <img
            src={selectedVariant.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-stone-300">
            <ImageOff size={26} />
          </div>
        )}
      </div>

      <div className="border-t-2 border-[#008061] px-2.5 py-2">
        <h3 className="line-clamp-2 min-h-8 text-xs font-bold uppercase leading-4 tracking-tight text-black sm:text-sm">
          {product.name}
        </h3>

        {variants.length > 1 && (
          <div
            className="mt-2 flex flex-wrap gap-1.5"
            aria-label="Chọn kích cỡ"
          >
            {variants.map((variant) => {
              const selected = variant.id === selectedVariant.id;

              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedVariantId(variant.id);
                  }}
                  className={`min-w-9 rounded border-2 px-2 py-1 text-[11px] font-black transition ${
                    selected
                      ? "border-[#007A3D] bg-[#007A3D] text-white"
                      : "border-black bg-white text-black hover:bg-orange-50"
                  }`}
                >
                  {variant.size}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-[9px] font-black uppercase tracking-wider text-[#008061]">
            Giá
          </span>
          <span className="whitespace-nowrap rounded bg-[#EE3124] px-2 py-1 text-xs font-black leading-none text-white sm:text-sm">
            {formatPrice(selectedVariant.price)}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function DanhMucSanPham({ groupId }) {
  const activeGroup =
    productCatalog.find((group) => group.id === groupId) ?? productCatalog[0];

  const [categoryId, setCategoryId] = useState(null);

  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    if (!saveMessage) return undefined;

    const timeoutId = window.setTimeout(() => {
      setSaveMessage("");
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [saveMessage]);

  /*
   * Khi người dùng chọn một nhóm khác từ Sidebar,
   * hiển thị toàn bộ sản phẩm của nhóm đó.
   */
  useEffect(() => {
    setCategoryId(null);
    setQuery("");
  }, [activeGroup.id]);

  const activeCategory =
    categoryId == null
      ? null
      : activeGroup.categories.find((category) => category.id === categoryId) ??
        null;

  const products = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase("vi");

    const sourceProducts = activeCategory
      ? activeCategory.products
      : activeGroup.categories.flatMap((category) => category.products);
    const uniqueProducts = Array.from(
      new Map(
        sourceProducts.map((product) => [
          `${product.id ?? ""}|${product.name ?? ""}|${product.image ?? ""}`,
          product,
        ]),
      ).values(),
    );

    if (!keyword) {
      return uniqueProducts;
    }

    return uniqueProducts.filter((product) =>
      product.name.toLocaleLowerCase("vi").includes(keyword),
    );
  }, [activeCategory, activeGroup.categories, query]);

  return (
    <section className="mx-auto max-w-[1500px]">
      <div className="overflow-hidden rounded-xl border-2 border-black bg-white">
        <StripeBar />

        <div className="p-5 md:p-7">
          {/* Tiêu đề + tìm kiếm */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="inline-block rounded-sm bg-[#007A3D] px-2 py-0.5 text-[18px] font-black uppercase tracking-wide text-white">
                {activeGroup.name}
              </h2>
            </div>

            <label className="relative block w-full md:max-w-xs">
              <Search
                size={18}
                strokeWidth={2.5}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black"
              />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm sản phẩm..."
                className="h-11 w-full rounded-md border-2 border-black bg-white pl-11 pr-4 text-sm font-semibold text-black outline-none placeholder:font-normal placeholder:text-stone-400 focus:bg-orange-50 focus:ring-4 focus:ring-[#FF8200]/30"
              />
            </label>
          </div>

          {/* Danh sách category của nhóm đang chọn */}
          <div
            className="mt-3 flex flex-wrap gap-2"
            role="tablist"
            aria-label={`Danh mục ${activeGroup.name}`}
          >
            {activeGroup.categories.map((category) => {
              const selected = category.id === activeCategory?.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setCategoryId(selected ? null : category.id);
                    setQuery("");
                  }}
                  className={`rounded-md border-2 border-black px-4 py-2 text-sm font-black uppercase tracking-tight transition ${
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

          {/* Danh sách sản phẩm */}
          <div className="mt-7">
            {products.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {products.map((product) => (
                  <ProductCard
                    key={`${product.id ?? ""}|${product.name ?? ""}|${product.image ?? ""}`}
                    product={product}
                    onOpen={(openedProduct, variant) =>
                      setSelectedProduct({ product: openedProduct, variant })
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="grid min-h-64 place-items-center rounded-md border-2 border-dashed border-black bg-stone-50 p-8 text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-black bg-[#FF8200] text-white">
                    <PackageOpen size={28} />
                  </div>

                  <p className="mt-4 text-base font-black uppercase text-black">
                    Chưa có sản phẩm
                  </p>

                  <p className="mt-1 max-w-sm text-sm leading-6 text-stone-600">
                    Thêm sản phẩm vào mảng{" "}
                    <code className="rounded bg-stone-200 px-1.5 py-0.5 text-xs">
                      products
                    </code>{" "}
                    của danh mục này trong{" "}
                    <code className="rounded bg-stone-200 px-1.5 py-0.5 text-xs">
                      productCatalog.js
                    </code>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <InventoryModal
          product={selectedProduct.product}
          variant={selectedProduct.variant}
          onClose={() => setSelectedProduct(null)}
          onSaved={() => {
            setSelectedProduct(null);
            setSaveMessage("Đã lưu.");
          }}
        />
      )}

      {saveMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-4 z-[60] rounded-xl border-2 border-black bg-[#007A3D] px-4 py-3 text-sm font-black text-white shadow-[4px_4px_0_0_#000]"
        >
          {saveMessage}
        </div>
      )}
    </section>
  );
}

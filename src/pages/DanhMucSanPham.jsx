import { useEffect, useMemo, useState } from "react";

import { Heading3, ImageOff, PackageOpen, Search } from "lucide-react";

import { formatPrice, productCatalog } from "../data/productCatalog";

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

function ProductCard({ product }) {
  const variants = product.variants ?? [product];
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0].id);

  const selectedVariant =
    variants.find((variant) => variant.id === selectedVariantId) ?? variants[0];

  return (
    <article className="group overflow-hidden rounded-md border-2 border-[#008061] bg-white shadow-[3px_3px_0_0_#008061] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#008061]">
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
                  onClick={() => setSelectedVariantId(variant.id)}
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

  const [categoryId, setCategoryId] = useState(activeGroup.categories[0].id);

  const [query, setQuery] = useState("");

  /*
   * Khi người dùng chọn một nhóm khác từ Sidebar,
   * tự động chọn danh mục con đầu tiên của nhóm đó.
   */
  useEffect(() => {
    setCategoryId(activeGroup.categories[0].id);
    setQuery("");
  }, [activeGroup.id]);

  const activeCategory =
    activeGroup.categories.find((category) => category.id === categoryId) ??
    activeGroup.categories[0];

  const products = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase("vi");

    if (!keyword) {
      return activeCategory.products;
    }

    return activeCategory.products.filter((product) =>
      product.name.toLocaleLowerCase("vi").includes(keyword),
    );
  }, [activeCategory, query]);

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
              const selected = category.id === activeCategory.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setCategoryId(category.id);
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
                    key={product.id ?? product.name}
                    product={product}
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
    </section>
  );
}

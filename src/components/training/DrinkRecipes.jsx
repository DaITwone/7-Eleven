import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ImageOff, X } from 'lucide-react'
import DanhMucSanPham from '../../pages/DanhMucSanPham'
import { formatPrice, productCatalog } from '../../data/productCatalog'
import { drinkRecipes } from '../../data/drinkRecipes'

const groups = productCatalog.filter((group) =>
  ['ca-phe-viet-nam', 'thuc-uong-dac-biet', 'tra-sua-tra-trai-cay'].includes(group.id),
)

function RecipeSection({ recipe, title, step, productName }) {
  const [failedImage, setFailedImage] = useState(null)
  const imageFailed = Boolean(recipe?.image && failedImage === recipe.image)

  return (
    <section aria-label={title} className="border-t border-slate-200">
      <div className="flex items-center gap-2 bg-emerald-50 px-4 py-3 sm:gap-3 sm:px-7 sm:py-4">
        {step && <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-black text-white">{step}</span>}
        <h2 className="text-sm font-bold text-brand-green sm:text-base">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="min-w-0 whitespace-pre-wrap break-words p-4 text-sm leading-7 sm:p-7 max-sm:[&_th]:px-2 max-sm:[&_td]:px-2">
          {recipe?.content || <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-500">Công thức đang được cập nhật.</p>}
        </div>
        <div className="min-w-0 border-t border-slate-200 bg-[#fdfdfd] p-4 sm:p-7 md:border-l md:border-t-0">
          {recipe?.image && !imageFailed ? (
            <img src={recipe.image} alt={`${title} — ${productName}`} onError={() => setFailedImage(recipe.image)} className="h-auto w-full rounded-xl object-contain" />
          ) : (
            <div className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-300 p-5 text-center text-slate-400 sm:min-h-64">
              <ImageOff size={40} />
              <p className="text-sm">{imageFailed ? 'Không tải được hình ảnh công thức.' : 'Hình ảnh công thức đang được cập nhật.'}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function RecipeModal({ product, variant, onClose }) {
  const dialogRef = useRef(null)
  const catalogVariants = product.variants ?? [product]
  const recipeSizes = drinkRecipes[product.id]?.sizes
  const variants = recipeSizes
    ? recipeSizes.map((size) =>
        catalogVariants.find((item) => item.size?.toUpperCase() === size) ?? {
          id: `${product.id}-${size.toLowerCase()}`,
          size,
        },
      )
    : catalogVariants
  const [selectedVariantId, setSelectedVariantId] = useState(variant.id)
  const selectedVariant =
    variants.find((item) => item.id === selectedVariantId) ?? variants[0]
  const recipe = drinkRecipes[selectedVariant.id] ?? drinkRecipes[product.id]
  // undefined inherits the shared base; null explicitly disables it for a size.
  const teaBase = recipe?.teaBase !== undefined
    ? recipe.teaBase
    : drinkRecipes[product.id]?.teaBase

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    const dialog = dialogRef.current
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="recipe-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="m-auto h-[100dvh] max-h-[100dvh] w-full max-w-full overflow-hidden border-0 bg-white p-0 text-slate-800 shadow-xl backdrop:bg-slate-950/65 sm:h-auto sm:max-h-[90dvh] sm:w-[calc(100%-2rem)] sm:max-w-5xl sm:rounded-2xl sm:border-2 sm:border-brand-green"
    >
      <div className="flex h-full max-h-[100dvh] flex-col sm:max-h-[calc(90dvh-4px)]">
      <div className="z-10 flex shrink-0 items-start justify-between gap-3 bg-brand-green px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] text-white sm:items-center sm:gap-4 sm:p-5">
        <div className="min-w-0">
          <h1 id="recipe-title" className="break-words text-base font-bold uppercase tracking-wide sm:text-xl">{product.name}</h1>
          <p className="mt-1 text-xs leading-5 text-white/80 sm:text-sm">{teaBase ? 'Làm cốt trà trước, sau đó pha món nước theo size đã chọn.' : 'Công thức pha chế món nước'}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Đóng công thức" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-white/20 focus-visible:outline focus-visible:outline-2">
          <X size={24} />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-[env(safe-area-inset-bottom)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="p-4 sm:p-5 sm:px-7">
          <div className="flex flex-wrap items-center gap-2">
            {variants.length > 1 && variants.map((item) => {
              const selected = item.id === selectedVariant.id

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSelectedVariantId(item.id)}
                  className={`min-h-11 rounded-lg border-2 px-3 py-2 text-xs font-black transition sm:min-h-0 sm:py-1.5 ${
                    selected
                      ? 'border-brand-green bg-brand-green text-white'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-brand-green hover:bg-emerald-50'
                  }`}
                >
                  Size {item.size}
                </button>
              )
            })}
            {selectedVariant.price && (
              <span className="rounded-lg bg-brand-red px-3 py-1.5 text-xs font-black text-white">
                {formatPrice(selectedVariant.price)}
              </span>
            )}
          </div>
      </div>
      {teaBase && <RecipeSection key={`base-${selectedVariant.id}`} recipe={teaBase} title="CHUẨN BỊ NGUYÊN LIỆU" step={1} productName={product.name} />}
      <RecipeSection key={`drink-${selectedVariant.id}`} recipe={recipe} title="CÔNG THỨC NƯỚC" step={teaBase ? 2 : undefined} productName={product.name} />
      </div>
      </div>
    </dialog>
  )
}

export default function DrinkRecipes({ onBack }) {
  const [groupId, setGroupId] = useState(groups[0].id)
  const [selected, setSelected] = useState(null)

  return (
    <div className="mx-auto max-w-[1500px]">
      <button type="button" onClick={onBack} className="mb-5 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-brand-green hover:bg-emerald-50">
        <ArrowLeft size={18} /> Quay lại đào tạo
      </button>
      <h1 className="text-2xl font-extrabold text-brand-red md:text-3xl">CÔNG THỨC MÓN NƯỚC</h1>
      <p className="mt-2 text-sm text-slate-500">Chọn món để xem công thức pha chế.</p>
      <div className="my-5 flex flex-wrap gap-3" aria-label="Nhóm thức uống">
        {groups.map((group) => (
          <button key={group.id} type="button" aria-pressed={groupId === group.id} onClick={() => setGroupId(group.id)} className={`rounded-lg border-2 border-brand-green px-4 py-2 text-sm font-bold ${groupId === group.id ? 'bg-brand-green text-white' : 'bg-white text-brand-green hover:bg-emerald-50'}`}>
            {group.name}
          </button>
        ))}
      </div>
      <DanhMucSanPham
        key={groupId}
        groupId={groupId}
        showCommerceInfo={false}
        onProductOpen={(product, variant) => setSelected({ product, variant })}
      />
      {selected && <RecipeModal product={selected.product} variant={selected.variant} onClose={() => setSelected(null)} />}
    </div>
  )
}

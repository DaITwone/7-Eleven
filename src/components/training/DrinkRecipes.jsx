import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ImageOff, X } from 'lucide-react'
import DanhMucSanPham from '../../pages/DanhMucSanPham'
import { formatPrice, productCatalog } from '../../data/productCatalog'
import { drinkRecipes } from '../../data/drinkRecipes'

const groups = productCatalog.filter((group) =>
  ['ca-phe-viet-nam', 'thuc-uong-dac-biet', 'tra-sua-tra-trai-cay'].includes(group.id),
)

function RecipeModal({ product, variant, onClose }) {
  const dialogRef = useRef(null)
  const variants = product.variants ?? [product]
  const [selectedVariantId, setSelectedVariantId] = useState(variant.id)
  const selectedVariant =
    variants.find((item) => item.id === selectedVariantId) ?? variants[0]
  const recipe = drinkRecipes[selectedVariant.id] ?? drinkRecipes[product.id]
  const [imageFailed, setImageFailed] = useState(false)

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

  useEffect(() => {
    setImageFailed(false)
  }, [recipe?.image])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="recipe-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl border-2 border-brand-green bg-white p-0 text-slate-800 shadow-xl backdrop:bg-slate-950/65"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-brand-green p-5 text-white">
        <div>
          <h1 className="text-xl font-bold uppercase tracking-wide">Công thức món nước</h1>
        </div>
        <button type="button" onClick={onClose} aria-label="Đóng công thức" className="shrink-0 rounded-lg p-2 hover:bg-white/20 focus-visible:outline focus-visible:outline-2">
          <X size={24} />
        </button>
      </div>
      <div className="grid md:grid-cols-2">
        <section aria-label="Nội dung công thức" className="min-w-0 space-y-4 overflow-x-auto p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            {variants.length > 1 && variants.map((item) => {
              const selected = item.id === selectedVariant.id

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSelectedVariantId(item.id)}
                  className={`rounded-lg border-2 px-3 py-1.5 text-xs font-black transition ${
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
          <div className="whitespace-pre-wrap text-sm leading-7">
            {recipe?.content || <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-500">Công thức đang được cập nhật.</p>}
          </div>
        </section>
        <section aria-label="Hình ảnh công thức" className="min-w-0 border-t border-slate-200 bg-stone-50 p-5 sm:p-7 md:border-l md:border-t-0">
          {recipe?.image && !imageFailed ? (
            <img src={recipe.image} alt={`Công thức ${product.name}`} onError={() => setImageFailed(true)} className="h-auto w-full rounded-xl object-contain" />
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-300 p-5 text-center text-slate-400">
              <ImageOff size={40} />
              <p className="text-sm">{imageFailed ? 'Không tải được hình ảnh công thức.' : 'Hình ảnh công thức đang được cập nhật.'}</p>
            </div>
          )}
        </section>
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

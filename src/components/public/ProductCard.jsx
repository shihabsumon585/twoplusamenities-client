import { Link } from 'react-router-dom'
import ProductVisual from './ProductVisual.jsx'

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-lg">
      <ProductVisual visual={product.visual} className="h-56">
        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
          Illustrative
        </span>
      </ProductVisual>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
          {product.description}
        </p>
        <Link
          to={`/product/${product.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover"
        >
          View Details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default ProductCard

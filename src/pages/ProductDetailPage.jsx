import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/public/ProductCard.jsx'
import ProductVisual from '../components/public/ProductVisual.jsx'
import featuredProducts from '../data/featuredProducts.js'

function ProductDetailPage() {
  const { productSlug } = useParams()
  const product = featuredProducts.find((item) => item.slug === productSlug)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <section className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface px-6 py-12 text-center shadow-sm sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
            Product catalog
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Product Not Found
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted">
            We couldn&apos;t find a demonstration product for this address.
            Browse the catalog to explore the available examples.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover"
          >
            Back to Products
          </Link>
        </section>
      </div>
    )
  }

  const relatedProducts = [
    ...featuredProducts.filter(
      (item) => item.slug !== product.slug && item.category === product.category,
    ),
    ...featuredProducts.filter(
      (item) => item.slug !== product.slug && item.category !== product.category,
    ),
  ].slice(0, 3)

  const quoteSearch = new URLSearchParams({ product: product.slug }).toString()

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <nav aria-label="Breadcrumb" className="overflow-hidden text-sm">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
            <li>
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/products" className="hover:text-brand">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li
              aria-current="page"
              className="max-w-full truncate font-medium text-ink"
            >
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-14">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm sm:p-5">
          <ProductVisual
            visual={product.visual}
            className="aspect-[4/3] w-full rounded-2xl sm:aspect-[5/4]"
          >
            <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:left-6 sm:top-6">
              Demonstration visual
            </span>
          </ProductVisual>
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            {product.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>
          {product.description && (
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {product.description}
            </p>
          )}
          <p className="mt-6 rounded-xl border border-[#dce5df] bg-[#f2f5f1] p-4 text-sm leading-6 text-muted">
            This is demonstration content. Product details, options, and
            suitability should be confirmed for your requirements before a
            quotation.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to={`/request-a-quote?${quoteSearch}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Request a Quote <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="product-overview-heading"
        className="bg-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
                Product information
              </p>
              <h2
                id="product-overview-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
              >
                Product Overview
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-semibold text-ink">
                  About this example
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {product.description ||
                    'A demonstration product entry for discussion.'}{' '}
                  This description is illustrative and is not a confirmed
                  specification or product listing.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-paper p-5">
                  <h3 className="text-base font-semibold text-ink">
                    Illustrative business uses
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    The product category may prompt ideas for business
                    environments. Specific uses and suitability depend on your
                    needs and should be discussed.
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-paper p-5">
                  <h3 className="text-base font-semibold text-ink">
                    Customization inquiries
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Options such as logo printing or branded packaging are
                    illustrative possibilities only and require confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4ee] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-brand px-6 py-8 text-white sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/70">
              Business inquiry
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Interested in {product.name}?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Request pricing and discuss your requirements for this product.
              Details can be confirmed as part of your inquiry.
            </p>
          </div>
          <Link
            to={`/request-a-quote?${quoteSearch}`}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-[#edf2ef] focus-visible:outline-white"
          >
            Request a Quote <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section
          aria-labelledby="related-products-heading"
          className="bg-paper py-12 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
                More to explore
              </p>
              <h2
                id="related-products-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
              >
                You May Also Like
              </h2>
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ProductDetailPage

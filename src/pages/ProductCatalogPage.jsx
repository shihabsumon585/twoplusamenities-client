import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/public/ProductCard.jsx'
import featuredProducts from '../data/featuredProducts.js'

const sortOptions = [
  { value: 'default', label: 'Default order' },
  { value: 'name-asc', label: 'Product name: A–Z' },
  { value: 'name-desc', label: 'Product name: Z–A' },
]

function ProductCatalogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [sortOrder, setSortOrder] = useState('default')

  const categories = useMemo(
    () => [
      'All Products',
      ...new Set(featuredProducts.map((product) => product.category)),
    ],
    [],
  )

  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase()
    const matches = featuredProducts.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLocaleLowerCase().includes(normalizedSearch) ||
        product.category.toLocaleLowerCase().includes(normalizedSearch)
      const matchesCategory =
        selectedCategory === 'All Products' ||
        product.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    if (sortOrder === 'name-asc') {
      return [...matches].sort((first, second) =>
        first.name.localeCompare(second.name),
      )
    }

    if (sortOrder === 'name-desc') {
      return [...matches].sort((first, second) =>
        second.name.localeCompare(first.name),
      )
    }

    return matches
  }, [searchTerm, selectedCategory, sortOrder])

  const hasActiveFilters =
    searchTerm.length > 0 ||
    selectedCategory !== 'All Products' ||
    sortOrder !== 'default'

  function clearFilters() {
    setSearchTerm('')
    setSelectedCategory('All Products')
    setSortOrder('default')
  }

  return (
    <>
      <section className="bg-[#f3f4ee]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-2 text-muted">
              <li>
                <Link to="/" className="hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-ink">
                Products
              </li>
            </ol>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Product catalog
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Explore Our Products
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Discover product options for hospitality, healthcare, and other
              business environments.
            </p>
            <p className="mt-4 text-xs leading-5 text-muted">
              Product examples shown are demonstration content. Details and
              options should be confirmed for your requirements.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="catalog-products-heading"
        className="bg-paper py-10 sm:py-14"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <label
                  htmlFor="product-search"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  Search products
                </label>
                <div className="relative max-w-xl">
                  <input
                    id="product-search"
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search by product or category"
                    className="min-h-12 w-full rounded-lg border border-line bg-white px-4 py-3 pr-12 text-sm text-ink placeholder:text-muted/80 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      aria-label="Clear product search"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-sm font-medium text-brand hover:bg-paper"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-56">
                <label
                  htmlFor="product-sort"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  Sort by
                </label>
                <select
                  id="product-sort"
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                  className="min-h-12 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className="mb-3 text-sm font-semibold text-ink">
                Browse by category
              </legend>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isSelected = selectedCategory === category

                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedCategory(category)}
                      className={`min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-offset-2 ${
                        isSelected
                          ? 'border-brand bg-brand text-white'
                          : 'border-line bg-white text-muted hover:border-brand/40 hover:text-brand'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </fieldset>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2
                id="catalog-products-heading"
                className="text-xl font-semibold tracking-tight text-ink"
              >
                Product options
              </h2>
              <p
                className="mt-1 text-sm text-muted"
                aria-live="polite"
                aria-atomic="true"
              >
                {visibleProducts.length}{' '}
                {visibleProducts.length === 1 ? 'product' : 'products'} shown
              </p>
            </div>
            {hasActiveFilters && visibleProducts.length > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-md px-3 py-2 text-sm font-semibold text-brand hover:bg-white"
              >
                Clear Filters
              </button>
            )}
          </div>

          {visibleProducts.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-line bg-surface px-5 py-12 text-center sm:px-8">
              <h3 className="text-lg font-semibold text-ink">
                No products found
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
                Try changing your search or choosing a different category to
                see more product options.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#e9eee6] px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Have something specific in mind?
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Let&apos;s discuss your product requirements.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Share what your organization is looking for to start a quotation
              conversation.
            </p>
          </div>
          <Link
            to="/request-a-quote"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline-offset-4"
          >
            Request a Quote <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default ProductCatalogPage

function PlaceholderPage({ title, description = 'Page placeholder.' }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section
        aria-labelledby="page-title"
        className="rounded-xl border border-line bg-surface p-6 shadow-sm sm:p-8"
      >
        <p className="mb-2 text-sm font-medium text-brand">
          Frontend foundation
        </p>
        <h1
          id="page-title"
          className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          {title}
        </h1>
        <p className="mt-3 text-base leading-7 text-muted">{description}</p>
      </section>
    </div>
  )
}

export default PlaceholderPage

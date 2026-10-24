import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-4 py-16">
      <p className="text-sm font-medium text-brand">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-3 text-base leading-7 text-muted">
        The address may be incorrect or the page may not exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
      >
        Return to home
      </Link>
    </main>
  )
}

export default NotFoundPage

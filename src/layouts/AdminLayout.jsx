import { NavLink, Outlet } from 'react-router-dom'

const navigation = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/products', label: 'Products' },
  { to: '/admin/categories', label: 'Categories' },
  { to: '/admin/quotes', label: 'Quotes' },
  { to: '/admin/content', label: 'Content' },
  { to: '/admin/settings', label: 'Settings' },
]

function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-lg font-semibold tracking-tight text-ink">
            Two Plus Amenities
          </span>
          <nav aria-label="Admin navigation" className="flex flex-wrap gap-1">
            {navigation.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-paper hover:text-ink aria-[current=page]:bg-paper aria-[current=page]:text-brand"
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout

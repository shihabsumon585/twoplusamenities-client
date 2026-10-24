import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/custom-branding', label: 'Custom Branding' },
  { to: '/our-process', label: 'Our Process' },
  { to: '/contact', label: 'Contact' },
]

function PublicLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!menuOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative z-10 border-b border-line bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3 text-ink"
          >
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-sm font-semibold tracking-tight text-white"
            >
              2+
            </span>
            <span className="text-base font-semibold tracking-tight sm:text-lg">
              Two Plus Amenities
            </span>
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="public-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 shrink-0 place-items-center rounded-lg border border-line text-ink hover:bg-paper lg:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full rounded bg-current" />
              <span className="h-0.5 w-full rounded bg-current" />
              <span className="h-0.5 w-full rounded bg-current" />
            </span>
          </button>

          <nav
            id="public-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-b border-line bg-surface p-4 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          >
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-paper hover:text-ink aria-[current=page]:text-brand"
            >
              Home
            </NavLink>
            {navigation.map(({ to, label }) => {
              const isActive =
                pathname === to ||
                pathname.startsWith(`${to}/`) ||
                (to === '/products' && pathname.startsWith('/product/'))

              return (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-paper hover:text-ink ${
                    isActive ? 'text-brand' : ''
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              to="/request-a-quote"
              onClick={closeMenu}
              aria-current={
                pathname === '/request-a-quote' || pathname === '/request-quote'
                  ? 'page'
                  : undefined
              }
              className="mt-1 rounded-md bg-brand px-3 py-2 text-center text-sm font-medium text-white hover:bg-brand-hover lg:mt-0"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      </header>

      <main className="w-full flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-lg font-semibold tracking-tight text-ink">
              Two Plus Amenities
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
              Product and amenity solutions for businesses and organizations.
            </p>
          </div>
          <FooterLinkGroup
            title="Explore"
            links={[
              ['About Us', '/about'],
              ['Products', '/products'],
              ['Our Process', '/our-process'],
              ['FAQ', '/faq'],
            ]}
          />
          <FooterLinkGroup
            title="Services"
            links={[
              ['Custom Branding', '/custom-branding'],
              ['Request a Quote', '/request-a-quote'],
              ['Contact Us', '/contact'],
            ]}
          />
          <FooterLinkGroup
            title="Information"
            links={[
              ['Privacy Policy', '/privacy-policy'],
              ['Terms & Conditions', '/terms-and-conditions'],
            ]}
          />
          <p className="border-t border-line pt-5 text-xs text-muted md:col-span-2 lg:col-span-4">
            © {new Date().getFullYear()} Two Plus Amenities
          </p>
        </div>
      </footer>
    </div>
  )
}

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map(([label, to]) => (
          <li key={to}>
            <Link
              to={to}
              className="text-sm text-muted transition-colors hover:text-brand"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PublicLayout

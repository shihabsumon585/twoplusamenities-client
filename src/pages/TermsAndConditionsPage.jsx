import { Link } from 'react-router-dom'

const termsSections = [
  {
    id: 'website-purpose',
    title: 'Website Purpose',
    content: (
      <p>
        This website provides information about product examples and helps
        visitors explore potential business inquiries. The current website is
        a frontend demonstration and does not yet provide a functioning backend
        inquiry system. You can browse the{' '}
        <Link
          to="/products"
          className="font-semibold text-brand underline-offset-4 hover:underline"
        >
          product catalog
        </Link>{' '}
        or review the{' '}
        <Link
          to="/request-quote"
          className="font-semibold text-brand underline-offset-4 hover:underline"
        >
          Request a Quote
        </Link>{' '}
        demonstration.
      </p>
    ),
  },
  {
    id: 'product-information',
    title: 'Product Information',
    content: (
      <p>
        Product descriptions and visual representations are provided for
        informational purposes. Confirm relevant product specifications and
        suitability with the business before relying on them. The website does
        not establish product warranties, certifications, availability, or
        guaranteed specifications.
      </p>
    ),
  },
  {
    id: 'requests-for-quotations',
    title: 'Requests for Quotations',
    content: (
      <p>
        Visitors may use the Request a Quote form to prepare a demonstration
        inquiry. The current form only validates entries in the browser; it
        does not transmit or store submissions. Its confirmation message does
        not mean the business received an inquiry or issued a quotation. Any
        future quotation must be reviewed and confirmed through a working
        business communication channel before it is treated as an actual offer.
      </p>
    ),
  },
  {
    id: 'orders-and-agreements',
    title: 'Orders and Agreements',
    content: (
      <p>
        Submitting an inquiry through this demonstration website does not
        establish a confirmed order or binding agreement. An actual order
        should proceed only after the relevant parties have confirmed the
        applicable product details, quantities, prices, payment terms, delivery
        arrangements, and other relevant conditions. This website does not set
        company-specific ordering procedures or terms.
      </p>
    ),
  },
  {
    id: 'custom-branding',
    title: 'Custom Branding',
    content: (
      <p>
        Visitors may inquire about potential branding or packaging
        requirements. Availability, suitability, costs, specifications, and
        applicable conditions must be discussed and confirmed for the
        particular request. Branding options are not guaranteed to be available
        for every product.
      </p>
    ),
  },
  {
    id: 'website-use',
    title: 'Website Use',
    content: (
      <p>
        Use the website lawfully and do not intentionally interfere with its
        operation or misuse its forms and links.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    content: (
      <p>
        Links within this website help visitors navigate its pages. This
        project does not establish that third-party services are integrated or
        endorsed.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to Website Content and Terms',
    content: (
      <p>
        Website content and these draft terms may need to change as the project
        evolves. No notification mechanism for changes is established by this
        demonstration website.
      </p>
    ),
  },
  {
    id: 'contact-and-questions',
    title: 'Contact and Questions',
    content: (
      <p>
        For relevant website information, visit the{' '}
        <Link
          to="/contact"
          className="font-semibold text-brand underline-offset-4 hover:underline"
        >
          Contact page
        </Link>{' '}
        or the{' '}
        <Link
          to="/faq"
          className="font-semibold text-brand underline-offset-4 hover:underline"
        >
          Frequently Asked Questions
        </Link>
        . No specific contact details or working inquiry channel are verified
        by these links.
      </p>
    ),
  },
]

function TermsAndConditionsPage() {
  return (
    <>
      <section className="bg-[#f3f4ee]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-2 text-muted">
              <li>
                <Link to="/" className="hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-ink">
                Terms &amp; Conditions
              </li>
            </ol>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Website information
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              These preliminary terms describe general conditions for using
              the current Two Plus Amenities website and its demonstration
              features.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <aside className="rounded-2xl border border-[#d9e0d8] bg-[#e9eee6] p-5 sm:p-7">
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              Important notice
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              This is a preliminary website-terms draft for review before
              public launch. It is not verified legal advice and does not
              guarantee compliance with any particular law.
            </p>
          </aside>

          <div className="mt-8 rounded-2xl border border-line bg-surface px-5 sm:px-8">
            {termsSections.map(({ id, title, content }) => (
              <section
                key={id}
                aria-labelledby={`${id}-heading`}
                className="border-b border-line py-7 last:border-b-0"
              >
                <h2
                  id={`${id}-heading`}
                  className="text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                >
                  {title}
                </h2>
                <div className="mt-3 text-sm leading-7 text-muted sm:text-base">
                  {content}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-8 rounded-2xl border border-line bg-surface p-5 sm:p-7">
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              Related policy
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Review the{' '}
              <Link
                to="/privacy-policy"
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>{' '}
              for the information-handling practices established for this
              frontend demonstration.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}

export default TermsAndConditionsPage

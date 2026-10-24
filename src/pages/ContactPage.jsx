import { Link } from 'react-router-dom'

const contactOptions = [
  {
    number: '01',
    title: 'Product Inquiries',
    description:
      'Explore the product catalog and share the options that may fit your organization’s needs.',
    link: '/products',
    linkLabel: 'Explore Products',
    tone: 'bg-[#e9eee6]',
  },
  {
    number: '02',
    title: 'Custom Branding',
    description:
      'Discuss potential branding or packaging ideas. Specific options require confirmation.',
    link: '/custom-branding',
    linkLabel: 'Learn About Custom Branding',
    tone: 'bg-[#f0ebe2]',
  },
  {
    number: '03',
    title: 'Request a Quote',
    description:
      'Share your product interests, estimated quantities, and other requirements.',
    link: '/request-quote',
    linkLabel: 'Start an Inquiry',
    tone: 'bg-[#e6edec]',
  },
]

const inquiryDetails = [
  'Business or organization name',
  'Products of interest',
  'Estimated quantity',
  'Intended use or customer segment',
  'Relevant branding or packaging preferences',
  'Questions or special requirements',
]

function ContactPage() {
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
                Contact
              </li>
            </ol>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Business inquiries
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              Let’s Talk About Your Business Needs
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Businesses, retailers, organizations, and other potential buyers
              can explore product options and share the requirements they would
              like to discuss.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-options-heading"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Ways to get started
            </p>
            <h2
              id="contact-options-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Choose what best fits your inquiry.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Browse product examples, read about potential branding topics, or
              share your requirements through the quote inquiry page.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {contactOptions.map((option) => (
              <article
                key={option.number}
                className="flex flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6"
              >
                <span
                  className={`grid size-12 place-items-center rounded-xl text-xs font-semibold tracking-widest text-brand ${option.tone}`}
                >
                  {option.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {option.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {option.description}
                </p>
                <Link
                  to={option.link}
                  className="mt-5 inline-flex min-h-10 w-fit items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover"
                >
                  {option.linkLabel} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="inquiry-details-heading"
        className="bg-paper py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Make a start
            </p>
            <h2
              id="inquiry-details-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              What to include in your inquiry.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              A few details can help explain what you are looking for. You can
              still begin an inquiry if you do not have everything figured out.
            </p>
            <Link
              to="/request-quote"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Share Your Requirements <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {inquiryDetails.map((detail, index) => (
                <li key={detail} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#e5ece5] text-xs font-semibold text-brand"
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-ink">{detail}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-muted">
              Product availability, suitability, and any branding or packaging
              options should be confirmed as part of the discussion.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="faq-shortcut-heading"
        className="bg-white py-12 sm:py-14"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2
              id="faq-shortcut-heading"
              className="text-xl font-semibold tracking-tight text-ink"
            >
              Have a question?
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Visit the FAQ section for answers to common questions.
            </p>
          </div>
          <Link
            to="/faq"
            className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
          >
            Visit our FAQs <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-[#f3f4ee] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-brand px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/70">
              Business inquiries
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Share what your organization is looking for or browse the
              demonstration product options.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Products <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-[#edf2ef]"
            >
              Request a Quote <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage

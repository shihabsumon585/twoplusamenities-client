import { Link } from 'react-router-dom'

const processSteps = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description:
      'Share your business type, product interests, estimated quantities, and any relevant packaging or branding preferences.',
  },
  {
    number: '02',
    title: 'Discuss Suitable Options',
    description:
      'The inquiry can be reviewed and potentially suitable products and requirements discussed with you.',
  },
  {
    number: '03',
    title: 'Review the Quotation',
    description:
      'Review proposed product details, quantities, pricing, and any other applicable terms once they are provided.',
  },
  {
    number: '04',
    title: 'Confirm the Order Details',
    description:
      'If both parties agree, order details and applicable terms can be confirmed before proceeding.',
  },
  {
    number: '05',
    title: 'Coordinate the Next Steps',
    description:
      'Discuss and confirm next steps as appropriate, including any applicable preparation, packaging, branding, or delivery arrangements.',
  },
]

const preparationItems = [
  'Business or organization name',
  'Products of interest',
  'Estimated quantities',
  'Intended use or target customers',
  'Packaging or branding preferences, if applicable',
  'Expected timeline or other requirements',
]

function OurProcessPage() {
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
                Our Process
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_0.65fr] lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
                A proposed customer journey
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
                A Clear Process, From Inquiry to Delivery
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The process can begin by understanding your business
                requirements and exploring product options that may be
                suitable for discussion.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
              >
                Explore Products <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Request a Quote <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="process-steps-heading"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              From first conversation onward
            </p>
            <h2
              id="process-steps-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Five steps to guide the conversation.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              This is a proposed journey for business inquiries, not a
              statement of verified company procedures or service commitments.
            </p>
          </div>

          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-line bg-paper p-5 sm:p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[#e5ece5] text-sm font-semibold tracking-[0.12em] text-brand">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="preparation-heading"
        className="bg-paper py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Before you get in touch
            </p>
            <h2
              id="preparation-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Helpful details to prepare.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Having some context ready can help explain what you are looking
              for, but you can still contact the business if you do not have
              every detail yet.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {preparationItems.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#e5ece5] text-xs font-semibold text-brand"
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-muted">
              Your inquiry can still begin with the details you have available.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="helpful-links-heading"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Take the next step
            </p>
            <h2
              id="helpful-links-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Useful places to continue.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <HelpfulLinkCard
              to="/products"
              number="01"
              title="Explore Products"
              description="Browse the current demonstration product catalog."
            />
            <HelpfulLinkCard
              to="/custom-branding"
              number="02"
              title="Learn About Custom Branding"
              description="Review illustrative branding topics that may be discussed."
            />
            <HelpfulLinkCard
              to="/request-quote"
              number="03"
              title="Start an Inquiry"
              description="Share your organization and product requirements."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4ee] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-brand px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/70">
              Business inquiries
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to share what your organization needs?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Start a conversation about your product interests and discuss
              which options may be suitable.
            </p>
          </div>
          <Link
            to="/request-quote"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-[#edf2ef]"
          >
            Start an Inquiry <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}

function HelpfulLinkCard({ to, number, title, description }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/40 sm:p-6"
    >
      <span className="text-xs font-semibold tracking-[0.14em] text-brand">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink group-hover:text-brand">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
        Learn more <span aria-hidden="true">→</span>
      </span>
    </Link>
  )
}

export default OurProcessPage

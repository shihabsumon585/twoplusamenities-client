import { Link } from 'react-router-dom'

const audienceSegments = [
  {
    number: '01',
    title: 'Hotels & Resorts',
    description:
      'Explore amenity ideas for guest rooms, welcome moments, and shared spaces.',
    tone: 'bg-[#e9eee6]',
  },
  {
    number: '02',
    title: 'Hospitals & Clinics',
    description:
      'Consider product options for patient-facing and professional environments.',
    tone: 'bg-[#e6edec]',
  },
  {
    number: '03',
    title: 'Restaurants & Cafés',
    description:
      'Browse possibilities for dining spaces, hospitality, and everyday operations.',
    tone: 'bg-[#f0ebe2]',
  },
  {
    number: '04',
    title: 'Corporate & Institutional Buyers',
    description:
      'Discuss amenity needs for workplaces, teams, and other organizations.',
    tone: 'bg-[#ede9e5]',
  },
  {
    number: '05',
    title: 'Distributors & Wholesalers',
    description:
      'Explore product categories and share the needs of your distribution business.',
    tone: 'bg-[#e9eee6]',
  },
]

const approachSteps = [
  {
    number: '01',
    title: 'Understand your requirements',
    description:
      'Share the context, organization, and product needs behind your inquiry.',
  },
  {
    number: '02',
    title: 'Explore relevant options',
    description:
      'Review product examples and identify topics you would like to discuss.',
  },
  {
    number: '03',
    title: 'Discuss customization',
    description:
      'Ask whether presentation or branding possibilities may fit your needs.',
  },
  {
    number: '04',
    title: 'Request and review a quotation',
    description:
      'Provide details for a business inquiry and review the information shared.',
  },
]

function AboutPage() {
  return (
    <>
      <section className="overflow-hidden bg-[#f3f4ee]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.8fr] lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm">
              <ol className="flex items-center gap-2 text-muted">
                <li>
                  <Link to="/" className="hover:text-brand">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-ink">
                  About Us
                </li>
              </ol>
            </nav>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              About the business
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              About Two Plus Amenities
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Business-focused amenities and product solutions designed around
              organizational needs.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto aspect-[5/4] w-full max-w-lg overflow-hidden rounded-[2rem] border border-[#dce3da] bg-[#e4ebe3]"
          >
            <div className="absolute -right-12 -top-12 size-56 rounded-full border border-white/70" />
            <div className="absolute -right-2 -top-2 size-40 rounded-full border border-white/70" />
            <div className="absolute bottom-0 left-0 h-[28%] w-full bg-[#d3dfd4]" />
            <div className="absolute bottom-[12%] left-[12%] h-[4%] w-[76%] rounded-full bg-[#c4d2c5]" />
            <div className="absolute bottom-[16%] left-[22%] h-[43%] w-[25%] rounded-t-[2.5rem] rounded-b-xl border border-[#d4d9ce] bg-[#fbfaf5] shadow-lg">
              <span className="absolute -top-4 left-[32%] h-6 w-[36%] rounded-t-lg bg-[#667b6b]" />
              <span className="absolute left-0 top-[36%] h-[20%] w-full bg-[#e8ece3]" />
            </div>
            <div className="absolute bottom-[16%] left-[52%] h-[34%] w-[19%] rounded-t-[2rem] rounded-b-xl border border-[#d0d8ce] bg-[#f4f3eb] shadow-lg">
              <span className="absolute -top-4 left-[30%] h-6 w-[40%] rounded-t-lg bg-[#899988]" />
              <span className="absolute left-0 top-[39%] h-[22%] w-full bg-[#e3e9df]" />
            </div>
            <div className="absolute left-[8%] top-[9%] rounded-full border border-white/80 bg-white/85 px-4 py-2 text-xs font-semibold tracking-wide text-ink shadow-sm">
              Thoughtful product conversations
            </div>
            <div className="absolute bottom-[8%] right-[7%] rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                Business needs
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">
                A considered starting point
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="company-overview-heading"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Our focus
            </p>
            <h2
              id="company-overview-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              A business-first way to explore amenities.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-muted">
            <p>
              Two Plus Amenities is being presented as a business-oriented
              amenities and product supply resource. The website is designed to
              help organizations explore product options and start a
              requirements-focused conversation.
            </p>
            <p>
              Visitors can browse a clear product catalog, learn about
              illustrative customization topics, and share the context behind a
              business inquiry. Product examples and options shown on this
              website are demonstration content and may require confirmation.
            </p>
            <Link
              to="/products"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              Explore Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="audience-heading"
        className="bg-paper py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Who we aim to serve
            </p>
            <h2
              id="audience-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Product conversations for different settings.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              These are example buyer groups the website is designed to support,
              not a list of confirmed customers.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audienceSegments.map((segment) => (
              <article
                key={segment.number}
                className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/30 sm:p-6"
              >
                <span
                  className={`grid size-12 place-items-center rounded-xl text-xs font-semibold tracking-widest text-brand ${segment.tone}`}
                >
                  {segment.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {segment.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {segment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="approach-heading"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Our approach
            </p>
            <h2
              id="approach-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Start with what your organization needs.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              A proposed path for exploring products and beginning a business
              inquiry—not a service policy or timeline.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-line bg-paper p-5 sm:p-6"
              >
                <span className="text-sm font-semibold tracking-[0.14em] text-brand">
                  {step.number}
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink">
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
        aria-labelledby="customization-heading"
        className="bg-[#f3f4ee] py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Product selection & presentation
            </p>
            <h2
              id="customization-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Explore products. Ask about your ideas.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              If branding or presentation matters to your organization, you can
              ask about possibilities such as logo printing or branded
              packaging. These are illustrative inquiry topics only; available
              options require company confirmation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/products"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Browse Products <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/custom-branding"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              Custom Branding <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-brand px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/70">
              For business buyers
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Tell us what your organization is looking for.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Explore the demonstration catalog or share your requirements to
              begin a quotation inquiry.
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
              to="/request-a-quote"
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

export default AboutPage

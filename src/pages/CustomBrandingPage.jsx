import { Link } from 'react-router-dom'
import ProductVisual from '../components/public/ProductVisual.jsx'

const brandingTopics = [
  {
    number: '01',
    title: 'Logo and Brand Identity',
    description:
      'Discuss where and how your organization would like its identity to appear on a product.',
    tone: 'bg-[#e9eee6]',
  },
  {
    number: '02',
    title: 'Packaging and Presentation',
    description:
      'Share ideas for a presentation that may suit your setting, audience, or occasion.',
    tone: 'bg-[#f0ebe2]',
  },
  {
    number: '03',
    title: 'Product Selection',
    description:
      'Explore product examples and explain which options may be relevant to your organization.',
    tone: 'bg-[#e6edec]',
  },
  {
    number: '04',
    title: 'Business-Specific Requirements',
    description:
      'Tell us about the environment, use, and considerations behind your inquiry.',
    tone: 'bg-[#ede9e5]',
  },
]

const inquirySteps = [
  {
    number: '01',
    title: 'Explore the Product Catalog',
    description:
      'Browse demonstration product examples that may help frame your inquiry.',
  },
  {
    number: '02',
    title: 'Share Your Requirements',
    description:
      'Describe the product, presentation, and branding ideas you would like to discuss.',
  },
  {
    number: '03',
    title: 'Discuss Available Options',
    description:
      'Confirm whether your requested product and branding possibilities can be considered.',
  },
  {
    number: '04',
    title: 'Request and Review a Quotation',
    description:
      'Use the inquiry form to share details and review any information provided.',
  },
]

const businessContexts = [
  {
    title: 'Hotels & Resorts',
    description:
      'Guest spaces and welcome experiences can call for a considered product presentation.',
  },
  {
    title: 'Hospitals & Clinics',
    description:
      'Care environments may have distinct practical needs and presentation considerations.',
  },
  {
    title: 'Restaurants & Cafés',
    description:
      'Dining and hospitality settings may benefit from products that suit their environment.',
  },
  {
    title: 'Corporate & Institutional Buyers',
    description:
      'Organizations may have identity and product requirements shaped by their teams and spaces.',
  },
]

function CustomBrandingPage() {
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
                Custom Branding
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
                Product presentation
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
                Custom Branding for Your Business
              </h1>
              <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Explore ways to discuss branded product presentation and
                business-specific requirements with Two Plus Amenities.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/request-a-quote"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
                >
                  Discuss Your Requirements <span aria-hidden="true">→</span>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                >
                  Explore Products <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-line bg-white p-3 shadow-sm sm:p-5">
              <ProductVisual
                visual="box"
                className="aspect-[5/4] w-full rounded-2xl"
              >
                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted sm:left-6 sm:top-6">
                  Illustrative presentation
                </span>
                <div className="absolute bottom-4 right-4 max-w-[80%] rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm sm:bottom-6 sm:right-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    An idea to discuss
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Your product, your requirements
                  </p>
                </div>
              </ProductVisual>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="branding-topics-heading"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Possibilities to discuss
            </p>
            <h2
              id="branding-topics-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Start with the details that matter to you.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              These are illustrative inquiry topics, not a confirmed list of
              available customization services. Any option would need to be
              confirmed by the company.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandingTopics.map((topic) => (
              <article
                key={topic.number}
                className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/30 sm:p-6"
              >
                <span
                  className={`grid size-12 place-items-center rounded-xl text-xs font-semibold tracking-widest text-brand ${topic.tone}`}
                >
                  {topic.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-[#dce5df] bg-[#f2f5f1] p-4 text-sm leading-6 text-muted">
            Logo placement, branded packaging, and presentation are examples
            only. Their availability depends on confirmation.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="branding-inquiry-steps-heading"
        className="bg-paper py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              A proposed customer journey
            </p>
            <h2
              id="branding-inquiry-steps-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              How a branding inquiry could begin.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              An illustrative path for discussing your needs, not a confirmed
              company process or guarantee.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inquirySteps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-line bg-white p-5 sm:p-6"
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
        aria-labelledby="business-contexts-heading"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Different settings, different needs
            </p>
            <h2
              id="business-contexts-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Consider the environment around the product.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Organizations may approach product presentation differently
              depending on their setting and audience. These examples describe
              potential buyer contexts, not existing customers.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {businessContexts.map((context, index) => (
              <article
                key={context.title}
                className="rounded-2xl border border-line bg-paper p-5 sm:p-6"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-brand">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {context.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {context.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4ee] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-brand px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/70">
              Start a conversation
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Have a branding or product idea in mind?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Share what you are looking for. Specific branding methods and
              product suitability need to be confirmed.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Products <span aria-hidden="true">→</span>
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

export default CustomBrandingPage

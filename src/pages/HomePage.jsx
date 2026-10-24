import { Link } from 'react-router-dom'
import ProductCard from '../components/public/ProductCard.jsx'
import featuredProducts from '../data/featuredProducts.js'

const businessCategories = [
  {
    number: '01',
    title: 'Hotels & Resorts',
    description:
      'Amenity ideas for guest rooms, welcome moments, and shared spaces.',
    tone: 'bg-[#e9eee6]',
  },
  {
    number: '02',
    title: 'Hospitals & Clinics',
    description:
      'Considered essentials for patient-facing and professional environments.',
    tone: 'bg-[#e6edec]',
  },
  {
    number: '03',
    title: 'Restaurants & Cafés',
    description:
      'Product possibilities for thoughtful dining and hospitality experiences.',
    tone: 'bg-[#f0ebe2]',
  },
  {
    number: '04',
    title: 'Corporate & Institutional',
    description:
      'Flexible product conversations for teams, organizations, and buyers.',
    tone: 'bg-[#ede9e5]',
  },
]

const benefits = [
  {
    number: '01',
    title: 'Business-focused solutions',
    description:
      'Explore product ideas with your organization, audience, and setting in mind.',
  },
  {
    number: '02',
    title: 'A considered product selection',
    description:
      'Browse amenity possibilities across hospitality, care, and workplace contexts.',
  },
  {
    number: '03',
    title: 'Customization conversations',
    description:
      'Share your branding goals and ask which options may suit your requirements.',
  },
  {
    number: '04',
    title: 'A straightforward next step',
    description:
      'Tell us what you are looking for to begin a quotation conversation.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Explore Products',
    description: 'Browse ideas that may suit your organization and setting.',
  },
  {
    number: '02',
    title: 'Share Your Requirements',
    description: 'Tell us about the products and presentation you have in mind.',
  },
  {
    number: '03',
    title: 'Receive a Quotation',
    description: 'Discuss your request and receive details to review.',
  },
  {
    number: '04',
    title: 'Confirm the Details',
    description: 'Continue the conversation once your requirements are clear.',
  },
]

function ArrowLink({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-offset-4 ${
        light
          ? 'bg-white text-brand hover:bg-[#edf2ef]'
          : 'bg-brand text-white hover:bg-brand-hover'
      }`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}

function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-[#f3f4ee]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              Product solutions for business
            </p>
            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.65rem]">
              Premium Amenities for Businesses That Care About Every Detail.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Discover quality amenities and customizable product solutions
              designed for hospitality, healthcare, and corporate environments.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ArrowLink to="/products">Explore Products</ArrowLink>
              <Link
                to="/request-a-quote"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:bg-white"
              >
                Request a Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#dce1d7] pt-6 text-sm text-muted">
              <span className="font-medium text-ink">Made for business buyers</span>
              <span className="hidden h-4 w-px bg-line sm:block" />
              <span>Hospitality</span>
              <span>Healthcare</span>
              <span>Workplace</span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-[2rem] bg-[#dfe7df] shadow-[0_24px_70px_-35px_rgba(31,41,51,0.35)]"
          >
            <div className="absolute -right-10 -top-14 size-64 rounded-full border border-white/50" />
            <div className="absolute -right-2 -top-6 size-48 rounded-full border border-white/50" />
            <div className="absolute bottom-0 left-0 h-[34%] w-full bg-[#d1ddd2]" />
            <div className="absolute bottom-[13%] left-[9%] h-[3%] w-[82%] rounded-full bg-[#bdcdbf]" />
            <div className="absolute bottom-[16%] left-[15%] h-[49%] w-[25%] rounded-t-[3rem] rounded-b-2xl border border-[#d4d9ce] bg-[#fbfaf5] shadow-[0_18px_28px_-18px_rgba(31,41,51,0.4)]">
              <span className="absolute -top-5 left-[35%] h-7 w-[30%] rounded-t-lg bg-[#667b6b]" />
              <span className="absolute left-0 top-[28%] h-[20%] w-full bg-[#e8ece3]" />
              <span className="absolute left-0 top-[48%] h-px w-full bg-[#d8dfd4]" />
              <span className="absolute inset-x-2 top-[33%] text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#68786b]">
                Amenities
              </span>
            </div>
            <div className="absolute bottom-[16%] left-[43%] h-[42%] w-[21%] rounded-t-[2.5rem] rounded-b-2xl border border-[#d0d8ce] bg-[#f4f3eb] shadow-[0_18px_28px_-18px_rgba(31,41,51,0.4)]">
              <span className="absolute -top-5 left-[32%] h-7 w-[36%] rounded-t-lg bg-[#899988]" />
              <span className="absolute left-0 top-[34%] h-[22%] w-full bg-[#e3e9df]" />
              <span className="absolute inset-x-2 top-[39%] text-center text-[9px] font-medium uppercase tracking-[0.15em] text-[#68786b]">
                Care
              </span>
            </div>
            <div className="absolute bottom-[16%] right-[13%] h-[34%] w-[20%] rounded-t-[2rem] rounded-b-2xl border border-[#d9d6ca] bg-[#f7f3e9] shadow-[0_18px_28px_-18px_rgba(31,41,51,0.4)]">
              <span className="absolute -top-4 left-[30%] h-6 w-[40%] rounded-t-md bg-[#a4a58c]" />
              <span className="absolute left-0 top-[37%] h-[24%] w-full bg-[#ece9dd]" />
              <span className="absolute inset-x-1 top-[43%] text-center text-[8px] font-medium uppercase tracking-[0.12em] text-[#777b67]">
                Daily
              </span>
            </div>
            <div className="absolute left-[8%] top-[9%] rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-ink shadow-sm">
              A considered first impression
            </div>
            <div className="absolute bottom-[8%] right-[7%] rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                Your business
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">
                Your requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="business-categories-title"
        className="bg-surface py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Who we serve
            </p>
            <h2
              id="business-categories-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Solutions for Every Business.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Explore product possibilities for the spaces where people stay,
              gather, receive care, and work.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessCategories.map((category) => (
              <article
                key={category.number}
                className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/30 sm:p-6"
              >
                <span
                  className={`grid size-12 place-items-center rounded-xl text-xs font-semibold tracking-widest text-brand ${category.tone}`}
                >
                  {category.number}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="featured-products-title"
        className="bg-paper py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
                A look at the possibilities
              </p>
              <h2
                id="featured-products-title"
                className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Explore Featured Products.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                Demonstration concepts to help start a product conversation.
                Product availability and details require confirmation.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              View All Products <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="custom-branding-title"
        className="overflow-hidden bg-brand text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Make it your own
            </p>
            <h2
              id="custom-branding-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Your brand, thoughtfully presented.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
              Looking for a more personal touch? Ask us about possibilities such
              as logo printing, branded packaging, or a customized presentation.
              Options depend on the product and need to be confirmed.
            </p>
            <div className="mt-7">
              <ArrowLink to="/custom-branding" light>
                Explore Custom Branding
              </ArrowLink>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="relative mx-auto flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07]"
          >
            <div className="absolute -right-12 -top-12 size-52 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-12 size-64 rounded-full border border-white/10" />
            <div className="relative flex h-48 w-64 items-center justify-center rounded-xl border border-[#e7dfd0] bg-[#f5f1e7] shadow-2xl sm:h-56 sm:w-72">
              <div className="absolute inset-x-0 top-0 h-4 rounded-t-xl bg-[#e6ddcc]" />
              <div className="grid size-16 place-items-center rounded-2xl bg-brand text-xl font-semibold tracking-tight text-white">
                2+
              </div>
              <span className="absolute bottom-7 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#73786c]">
                Your identity here
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="why-choose-title"
        className="bg-surface py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              A thoughtful way to source
            </p>
            <h2
              id="why-choose-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Built around your business needs.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              A useful starting point for organizations looking to discuss
              amenity products and presentation options.
            </p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="border-t border-line py-5 first:border-t-0 sm:first:border-t"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-brand">
                  {benefit.number}
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="process-title"
        className="bg-[#f3f4ee] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              A possible path forward
            </p>
            <h2
              id="process-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              A simple way to get started.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              An illustrative customer journey. We can discuss the details
              together when you get in touch.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#dce1d7] bg-white/70 p-5 sm:p-6"
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
          <p className="mt-5 text-center text-xs leading-5 text-muted">
            The steps shown are a suggested starting point and are not a
            statement of company policy.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-[#e9eee6] px-6 py-9 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Start a conversation
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Let&apos;s discuss what your business needs.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Share what you are looking for and take the first step toward a
              quotation conversation.
            </p>
          </div>
          <ArrowLink to="/request-a-quote">Request a Quote</ArrowLink>
        </div>
      </section>
    </>
  )
}

export default HomePage

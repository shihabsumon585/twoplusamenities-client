import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqCategories = [
  {
    id: 'products',
    title: 'Products',
    description: 'Finding products and sharing what your business needs.',
    questions: [
      {
        id: 'explore-products',
        question: 'How can I explore the available products?',
        answer: (
          <>
            Visitors can browse the{' '}
            <Link to="/products" className="font-semibold text-brand hover:text-brand-hover">
              Products page
            </Link>{' '}
            to review the product information currently available on the
            website.
          </>
        ),
      },
      {
        id: 'ask-about-product',
        question: 'How do I ask about a specific product?',
        answer: (
          <>
            Visitors can use{' '}
            <Link
              to="/request-quote"
              className="font-semibold text-brand hover:text-brand-hover"
            >
              Request a Quote
            </Link>{' '}
            to share the product they are interested in and their requirements.
          </>
        ),
      },
      {
        id: 'quantities',
        question: 'Can I inquire about quantities for my business?',
        answer:
          'Yes. Visitors can include their estimated quantities in the inquiry so that the requirements can be reviewed.',
      },
    ],
  },
  {
    id: 'quotation',
    title: 'Quotation and Inquiry',
    description: 'What to prepare and what the current inquiry form does.',
    questions: [
      {
        id: 'request-quotation',
        question: 'How can I request a quotation?',
        answer: (
          <>
            Use the{' '}
            <Link
              to="/request-quote"
              className="font-semibold text-brand hover:text-brand-hover"
            >
              Request a Quote page
            </Link>{' '}
            and provide the requested contact and product information.
          </>
        ),
      },
      {
        id: 'prepare-inquiry',
        question: 'What information should I prepare before making an inquiry?',
        answer:
          'Business or organization name, products of interest, estimated quantities, intended use, and any relevant requirements may be helpful. Visitors can still start an inquiry if some details are not yet available.',
      },
      {
        id: 'form-submission',
        question: 'Does submitting the current website form send my inquiry to the company?',
        answer:
          'The current form is a frontend demonstration. It does not transmit or store submissions.',
      },
    ],
  },
  {
    id: 'custom-branding',
    title: 'Custom Branding',
    description: 'Discussing possible branding and packaging requirements.',
    questions: [
      {
        id: 'branding-inquiry',
        question: 'Can I ask about custom branding or packaging?',
        answer: (
          <>
            Visitors can share their branding or packaging requirements through{' '}
            <Link
              to="/request-quote"
              className="font-semibold text-brand hover:text-brand-hover"
            >
              Request a Quote
            </Link>
            . Any available options must be discussed and confirmed with the
            business. You can also{' '}
            <Link
              to="/custom-branding"
              className="font-semibold text-brand hover:text-brand-hover"
            >
              learn about branding inquiries
            </Link>
            .
          </>
        ),
      },
      {
        id: 'branding-guarantee',
        question: 'Are custom branding options guaranteed for every product?',
        answer:
          'No. Suitability and availability need to be reviewed and confirmed for the specific product and requirements.',
      },
    ],
  },
  {
    id: 'process-and-terms',
    title: 'Process and Business Terms',
    description: 'What is currently known—and not yet confirmed—about next steps.',
    questions: [
      {
        id: 'after-inquiry',
        question: 'What happens after I submit an inquiry on the current demo website?',
        answer:
          'The current website is frontend-only. Its form displays a demonstration confirmation but does not send the inquiry to a company or save it.',
      },
      {
        id: 'quotation-timing',
        question: 'How long does it take to receive a quotation?',
        answer:
          'Quotation timing has not yet been confirmed. Visitors should discuss expected timing directly with the business when contact details or a working contact channel become available.',
      },
      {
        id: 'payment-delivery',
        question: 'What are the payment and delivery terms?',
        answer:
          'Payment and delivery terms have not been confirmed in the current website content. They should be discussed and agreed upon with the business before confirming an order.',
      },
    ],
  },
]

function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState(() => new Set())

  function toggleQuestion(questionId) {
    setOpenQuestions((currentOpenQuestions) => {
      const nextOpenQuestions = new Set(currentOpenQuestions)

      if (nextOpenQuestions.has(questionId)) {
        nextOpenQuestions.delete(questionId)
      } else {
        nextOpenQuestions.add(questionId)
      }

      return nextOpenQuestions
    })
  }

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
                FAQ
              </li>
            </ol>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Help and information
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Find information about exploring products, the inquiry and
              quotation process, and what the current website demonstration
              does.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          {faqCategories.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`${category.id}-heading`}
            >
              <div className="mb-4">
                <h2
                  id={`${category.id}-heading`}
                  className="text-2xl font-semibold tracking-tight text-ink"
                >
                  {category.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {category.description}
                </p>
              </div>
              <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
                {category.questions.map((item) => {
                  const isOpen = openQuestions.has(item.id)
                  const buttonId = `${item.id}-button`
                  const panelId = `${item.id}-panel`

                  return (
                    <article key={item.id} className="px-4 sm:px-6">
                      <h3>
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggleQuestion(item.id)}
                          className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold leading-6 text-ink hover:text-brand sm:text-base"
                        >
                          <span>{item.question}</span>
                          <span
                            aria-hidden="true"
                            className="grid size-8 shrink-0 place-items-center rounded-full bg-paper text-lg font-normal text-brand"
                          >
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                      </h3>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        hidden={!isOpen}
                        className="pb-5 pr-10 text-sm leading-7 text-muted"
                      >
                        {item.answer}
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="faq-help-heading"
        className="bg-white py-12 sm:py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <HelpfulLink
            to="/products"
            title="Explore Products"
            description="Review the product information currently available."
          />
          <HelpfulLink
            to="/our-process"
            title="Understand Our Process"
            description="Read about the proposed business inquiry journey."
          />
          <HelpfulLink
            to="/contact"
            title="Contact Information"
            description="Find ways to continue exploring your inquiry."
          />
        </div>
      </section>

      <section className="bg-[#f3f4ee] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-brand px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/70">
              Continue exploring
            </p>
            <h2
              id="faq-help-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Have product requirements to discuss?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Browse the available product examples or begin a frontend
              demonstration inquiry.
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

function HelpfulLink({ to, title, description }) {
  return (
    <Link
      to={to}
      className="rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-brand/40 sm:p-6"
    >
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
        Learn more <span aria-hidden="true">→</span>
      </span>
    </Link>
  )
}

export default FAQPage

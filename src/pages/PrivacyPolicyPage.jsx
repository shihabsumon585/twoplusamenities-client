import { Link } from 'react-router-dom'

const policySections = [
  {
    id: 'information-you-provide',
    title: 'Information You Provide',
    content: (
      <>
        <p>
          The Request a Quote form may ask for details such as your name,
          business or organization, email address, phone number, product
          interests, and other requirements.
        </p>
        <p>
          The form on this website is currently a frontend demonstration.
          Submitting it only runs client-side validation and displays a
          demonstration confirmation. It does not transmit or store your
          submission, and information entered into it is not received by the
          business.
        </p>
      </>
    ),
  },
  {
    id: 'automatic-information',
    title: 'Information Collected Automatically',
    content: (
      <p>
        The current project has not established a specific practice for
        automatic information collection, analytics, or tracking technologies.
        No particular use of cookies, analytics, or advertising trackers is
        represented by this page.
      </p>
    ),
  },
  {
    id: 'how-information-is-used',
    title: 'How Information Is Used',
    content: (
      <p>
        If a working inquiry system is implemented in the future, information
        voluntarily provided may be used to review product interests,
        understand business requirements, and prepare quotations. These are
        intended purposes only; the current demonstration form does not send
        information for these uses.
      </p>
    ),
  },
  {
    id: 'sharing-and-disclosure',
    title: 'Sharing and Disclosure',
    content: (
      <p>
        The current demonstration form does not send its entries to the
        business or to other recipients. Any future information handling or
        sharing arrangements must be documented and confirmed before the form
        becomes operational.
      </p>
    ),
  },
  {
    id: 'storage-and-security',
    title: 'Data Storage and Security',
    content: (
      <p>
        The current frontend demonstration does not store quote-form
        submissions. Storage, retention, and security practices will need to be
        established and verified if backend functionality is implemented.
      </p>
    ),
  },
  {
    id: 'choices-and-contact',
    title: 'Your Choices and Contact',
    content: (
      <>
        <p>
          Please avoid entering sensitive or confidential information into a
          demonstration form. You can read the{' '}
          <Link
            to="/request-quote"
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            Request a Quote
          </Link>{' '}
          page for details about its current behavior.
        </p>
        <p>
          For the website’s contact page, visit{' '}
          <Link
            to="/contact"
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            Contact Us
          </Link>
          . This link does not imply that verified contact details or a working
          inquiry channel are currently available.
        </p>
      </>
    ),
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    content: (
      <p>
        This page may need to be updated if the website’s functionality or
        information-handling practices change. Its content should be reviewed
        and confirmed before the website launches with a working inquiry
        system.
      </p>
    ),
  },
]

function PrivacyPolicyPage() {
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
                Privacy Policy
              </li>
            </ol>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Website information
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              This page describes the information-handling practices currently
              established for the Two Plus Amenities website. The inquiry form
              is a frontend demonstration, and this page is not a verified
              final legal policy or legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-8">
            <p className="text-sm leading-6 text-muted">
              The practices described here reflect the current frontend
              demonstration only. Review and confirm this policy before
              enabling a working inquiry system.
            </p>
          </div>

          <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-surface px-5 sm:px-8">
            {policySections.map(({ id, title, content }) => (
              <section key={id} aria-labelledby={`${id}-heading`} className="py-7">
                <h2
                  id={`${id}-heading`}
                  className="text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                >
                  {title}
                </h2>
                <div className="mt-3 space-y-4 text-sm leading-7 text-muted sm:text-base">
                  {content}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-8 rounded-2xl bg-[#e9eee6] p-5 sm:p-7">
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              Related information
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Learn more about the inquiry demonstration in our{' '}
              <Link
                to="/faq"
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                Frequently Asked Questions
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicyPage

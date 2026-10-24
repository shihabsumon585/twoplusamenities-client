import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import featuredProducts from '../data/featuredProducts.js'

const organizationTypes = [
  'Hotel or Resort',
  'Hospital or Clinic',
  'Restaurant or Café',
  'Corporate Organization',
  'Distributor or Wholesaler',
  'Other',
]

const brandingOptions = ['Yes', 'No', 'Not sure']

const initialFormValues = {
  fullName: '',
  businessEmail: '',
  phoneNumber: '',
  jobTitle: '',
  organizationName: '',
  organizationType: '',
  selectedProducts: [],
  estimatedQuantity: '',
  brandingInterest: '',
  additionalRequirements: '',
  inquiryAcknowledged: false,
}

function RequestQuotePage() {
  const [searchParams] = useSearchParams()
  const requestedProduct = searchParams.get('product')
  const initialProduct = featuredProducts.find(
    (product) => product.slug === requestedProduct,
  )
  const [formValues, setFormValues] = useState(() => ({
    ...initialFormValues,
    selectedProducts: initialProduct ? [initialProduct.slug] : [],
  }))
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function updateField(event) {
    const { name, value, checked, type } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setSubmitted(false)
  }

  function toggleProduct(slug) {
    setFormValues((currentValues) => {
      const selectedProducts = currentValues.selectedProducts.includes(slug)
        ? currentValues.selectedProducts.filter(
            (selectedSlug) => selectedSlug !== slug,
          )
        : [...currentValues.selectedProducts, slug]

      return { ...currentValues, selectedProducts }
    })
    setSubmitted(false)
  }

  function validateForm() {
    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneDigits = formValues.phoneNumber.replace(/\D/g, '')
    const phonePattern = /^\+?[0-9()\s.-]+$/

    if (!formValues.fullName.trim()) {
      nextErrors.fullName = 'Enter your full name.'
    }

    if (!formValues.businessEmail.trim()) {
      nextErrors.businessEmail = 'Enter your business email.'
    } else if (!emailPattern.test(formValues.businessEmail.trim())) {
      nextErrors.businessEmail = 'Enter a valid email address.'
    }

    if (!formValues.phoneNumber.trim()) {
      nextErrors.phoneNumber = 'Enter your phone number.'
    } else if (
      !phonePattern.test(formValues.phoneNumber.trim()) ||
      phoneDigits.length < 7 ||
      phoneDigits.length > 15
    ) {
      nextErrors.phoneNumber =
        'Enter a valid phone number with 7 to 15 digits.'
    }

    if (!formValues.organizationName.trim()) {
      nextErrors.organizationName = 'Enter your organization name.'
    }

    if (!formValues.organizationType) {
      nextErrors.organizationType = 'Select an organization type.'
    }

    if (formValues.selectedProducts.length === 0) {
      nextErrors.selectedProducts = 'Select at least one product.'
    }

    if (
      formValues.estimatedQuantity !== '' &&
      (!Number.isInteger(Number(formValues.estimatedQuantity)) ||
        Number(formValues.estimatedQuantity) < 1)
    ) {
      nextErrors.estimatedQuantity =
        'Enter a whole number greater than zero, or leave this field blank.'
    }

    if (!formValues.inquiryAcknowledged) {
      nextErrors.inquiryAcknowledged =
        'Confirm how the information is intended to be used.'
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateForm()
    setErrors(nextErrors)
    setSubmitted(false)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function fieldClassName(hasError = false) {
    return `min-h-12 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 ${
      hasError ? 'border-red-700' : 'border-line'
    }`
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
                Request a Quote
              </li>
            </ol>
          </nav>
          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-brand">
              Business inquiry
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Request a Quote
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Tell us about your organization and product requirements so we
              can understand your inquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="min-w-0 space-y-6"
          >
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="rounded-xl border border-[#a8c5b4] bg-[#edf5ef] p-5 text-sm leading-6 text-ink"
              >
                <h2 className="font-semibold">Demonstration form validated</h2>
                <p className="mt-1">
                  Your entries passed the client-side checks. No information
                  was transmitted or saved, and no quotation was sent.
                </p>
              </div>
            )}

            <FormSection
              number="01"
              title="Contact Information"
              description="How should we identify you for this inquiry?"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  required
                  autoComplete="name"
                  value={formValues.fullName}
                  onChange={updateField}
                  error={errors.fullName}
                  className={fieldClassName}
                />
                <TextField
                  id="businessEmail"
                  name="businessEmail"
                  label="Business Email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={formValues.businessEmail}
                  onChange={updateField}
                  error={errors.businessEmail}
                  className={fieldClassName}
                />
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+1 555 010 1234"
                  value={formValues.phoneNumber}
                  onChange={updateField}
                  error={errors.phoneNumber}
                  className={fieldClassName}
                />
                <TextField
                  id="jobTitle"
                  name="jobTitle"
                  label="Job Title"
                  autoComplete="organization-title"
                  optional
                  value={formValues.jobTitle}
                  onChange={updateField}
                  className={fieldClassName}
                />
              </div>
            </FormSection>

            <FormSection
              number="02"
              title="Organization Information"
              description="Share a little about the business or organization making the inquiry."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="organizationName"
                  name="organizationName"
                  label="Company or Organization Name"
                  required
                  autoComplete="organization"
                  value={formValues.organizationName}
                  onChange={updateField}
                  error={errors.organizationName}
                  className={fieldClassName}
                />
                <div>
                  <label
                    htmlFor="organizationType"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Organization Type <RequiredMark />
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    required
                    value={formValues.organizationType}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.organizationType)}
                    aria-describedby={
                      errors.organizationType
                        ? 'organizationType-error'
                        : undefined
                    }
                    className={fieldClassName(Boolean(errors.organizationType))}
                  >
                    <option value="">Select an organization type</option>
                    {organizationTypes.map((organizationType) => (
                      <option key={organizationType} value={organizationType}>
                        {organizationType}
                      </option>
                    ))}
                  </select>
                  <FieldError
                    id="organizationType-error"
                    message={errors.organizationType}
                  />
                </div>
              </div>
            </FormSection>

            <FormSection
              number="03"
              title="Product Requirements"
              description="Select the product examples you would like to discuss. The options shown are demonstration content."
            >
              <fieldset
                aria-required="true"
                aria-describedby={
                  errors.selectedProducts ? 'selectedProducts-error' : undefined
                }
              >
                <legend className="text-sm font-medium text-ink">
                  Products of interest <RequiredMark />
                </legend>
                <div
                  className={`mt-3 grid gap-3 sm:grid-cols-2 ${
                    errors.selectedProducts
                      ? 'rounded-lg ring-2 ring-red-700/50 ring-offset-4'
                      : ''
                  }`}
                >
                  {featuredProducts.map((product) => {
                    const checked = formValues.selectedProducts.includes(
                      product.slug,
                    )

                    return (
                      <label
                        key={product.slug}
                        className={`flex min-h-16 cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
                          checked
                            ? 'border-brand bg-[#f1f5f1]'
                            : 'border-line bg-white hover:border-brand/40'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="selectedProducts"
                          value={product.slug}
                          checked={checked}
                          onChange={() => toggleProduct(product.slug)}
                          className="mt-0.5 size-4 shrink-0 accent-[#245b52] focus-visible:outline-offset-2"
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink">
                            {product.name}
                          </span>
                          <span className="mt-1 block text-xs text-muted">
                            {product.category}
                          </span>
                        </span>
                      </label>
                    )
                  })}
                </div>
                <FieldError
                  id="selectedProducts-error"
                  message={errors.selectedProducts}
                />
              </fieldset>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <TextField
                  id="estimatedQuantity"
                  name="estimatedQuantity"
                  label="Estimated Quantity"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  placeholder="Optional"
                  optional
                  value={formValues.estimatedQuantity}
                  onChange={updateField}
                  error={errors.estimatedQuantity}
                  className={fieldClassName}
                />
                <fieldset>
                  <legend className="text-sm font-medium text-ink">
                    Interested in custom branding?{' '}
                    <span className="font-normal text-muted">(Optional)</span>
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {brandingOptions.map((option) => (
                      <label
                        key={option}
                        className="inline-flex min-h-10 items-center gap-2 text-sm text-muted"
                      >
                        <input
                          type="radio"
                          name="brandingInterest"
                          value={option}
                          checked={formValues.brandingInterest === option}
                          onChange={updateField}
                          className="size-4 accent-[#245b52] focus-visible:outline-offset-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="additionalRequirements"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Additional Requirements{' '}
                  <span className="font-normal text-muted">(Optional)</span>
                </label>
                <textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  rows="4"
                  value={formValues.additionalRequirements}
                  onChange={updateField}
                  placeholder="Share any context that may help explain your inquiry."
                  className="w-full resize-y rounded-lg border border-line bg-white px-3 py-3 text-sm leading-6 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>
            </FormSection>

            <section
              aria-labelledby="confirmation-heading"
              className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-7"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-brand">
                  04
                </p>
                <h2
                  id="confirmation-heading"
                  className="mt-2 text-xl font-semibold tracking-tight text-ink"
                >
                  Confirmation
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Please confirm the intended use of the information in this
                  demonstration form.
                </p>
              </div>
              <div className="mt-5">
                <label className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <input
                    type="checkbox"
                    name="inquiryAcknowledged"
                    required
                    checked={formValues.inquiryAcknowledged}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.inquiryAcknowledged)}
                    aria-describedby={
                      errors.inquiryAcknowledged
                        ? 'inquiryAcknowledged-error'
                        : undefined
                    }
                    className="mt-1 size-4 shrink-0 accent-[#245b52] focus-visible:outline-offset-2"
                  />
                  <span>
                    I understand that information entered here is intended to
                    describe an inquiry and, in this demonstration, will not be
                    transmitted or saved.
                    <RequiredMark />
                  </span>
                </label>
                <FieldError
                  id="inquiryAcknowledged-error"
                  message={errors.inquiryAcknowledged}
                />
              </div>

              <p className="mt-5 rounded-lg bg-paper p-4 text-xs leading-5 text-muted">
                Demonstration only: submitting this form validates your entries
                in the browser. It does not send or store information and is not
                a company privacy policy.
              </p>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:w-auto"
              >
                Submit Quote Request <span aria-hidden="true">→</span>
              </button>
            </section>
          </form>

          <aside className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-6 lg:sticky lg:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              What to share
            </p>
            <h2 className="mt-3 text-lg font-semibold tracking-tight text-ink">
              Help describe your inquiry
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Choose the product examples that interest you and include any
              context that may help explain your organization&apos;s needs.
            </p>
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-sm font-semibold text-ink">
                Demonstration experience
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                This page does not contact the company or submit a real
                quotation request.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover"
            >
              Browse Products <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}

function FormSection({ number, title, description, children }) {
  return (
    <section
      aria-labelledby={`${number}-section-heading`}
      className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-7"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-[0.14em] text-brand">
          {number}
        </p>
        <h2
          id={`${number}-section-heading`}
          className="mt-2 text-xl font-semibold tracking-tight text-ink"
        >
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
      </div>
      {children}
    </section>
  )
}

function TextField({
  id,
  name,
  label,
  type = 'text',
  required = false,
  optional = false,
  error,
  value,
  onChange,
  className,
  ...inputProps
}) {
  const inputClassName = className(Boolean(error))

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-ink"
      >
        {label} {required ? <RequiredMark /> : optional ? <OptionalMark /> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClassName}
        {...inputProps}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  )
}

function RequiredMark() {
  return (
    <span className="text-red-800">
      <span aria-hidden="true">*</span>
      <span className="sr-only"> required</span>
    </span>
  )
}

function OptionalMark() {
  return <span className="font-normal text-muted">(Optional)</span>
}

function FieldError({ id, message }) {
  if (!message) return null

  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-800">
      {message}
    </p>
  )
}

export default RequestQuotePage

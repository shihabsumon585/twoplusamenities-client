import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout.jsx'
import PublicLayout from './layouts/PublicLayout.jsx'
import ProductCatalogPage from './pages/ProductCatalogPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import RequestQuotePage from './pages/RequestQuotePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CustomBrandingPage from './pages/CustomBrandingPage.jsx'
import OurProcessPage from './pages/OurProcessPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductCatalogPage />} />
        <Route
          path="products/:categorySlug"
          element={<PlaceholderPage title="Product category" />}
        />
        <Route
          path="product/:productSlug"
          element={<ProductDetailPage />}
        />
        <Route path="custom-branding" element={<CustomBrandingPage />} />
        <Route path="our-process" element={<OurProcessPage />} />
        <Route path="request-quote" element={<RequestQuotePage />} />
        <Route path="request-a-quote" element={<RequestQuotePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route path="terms" element={<TermsAndConditionsPage />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<PlaceholderPage title="Dashboard" />} />
        <Route
          path="products"
          element={<PlaceholderPage title="Products" />}
        />
        <Route
          path="categories"
          element={<PlaceholderPage title="Categories" />}
        />
        <Route path="quotes" element={<PlaceholderPage title="Quotes" />} />
        <Route path="content" element={<PlaceholderPage title="Content" />} />
        <Route path="settings" element={<PlaceholderPage title="Settings" />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout/Layout';
import Loader from '../components/common/Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Services = lazy(() => import('../pages/Services/Services'));
const ServiceDetails = lazy(() => import('../pages/ServiceDetails/ServiceDetails'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Booking = lazy(() => import('../pages/Booking/Booking'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy/PrivacyPolicy'));
const Terms = lazy(() => import('../pages/Terms/Terms'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader fullPage />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="service/:slug" element={<ServiceDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-appointment" element={<Booking />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

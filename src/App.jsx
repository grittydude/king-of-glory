import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollRestoration />
      <ScrollToTop />
      <AppRoutes />
    </ErrorBoundary>
  );
}

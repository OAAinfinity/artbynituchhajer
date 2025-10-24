import { lazy, Suspense } from 'react';

// Lazy load components for better initial load performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Gallery = lazy(() => import('./components/Gallery'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const ComponentLoadingSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-terracotta/30 border-t-terracotta rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-terracotta font-light">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<ComponentLoadingSkeleton />}>
        <Header />
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

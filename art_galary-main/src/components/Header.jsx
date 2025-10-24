import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

export default function Header() {
  const handleNavClick = useCallback((e) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80; // px, adjust if your header height changes
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cream/90 via-peach/85 to-sand/90 backdrop-blur-md shadow-md border-b border-coral/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-terracotta to-rust bg-clip-text text-transparent">
            Nitu Chhajer’s Art
          </h1>
          <nav className="hidden md:flex space-x-8 text-sm font-light text-gray-700">
            <a onClick={handleNavClick} href="#gallery" className="hover:text-coral transition-colors duration-300 hover:scale-105 inline-block">
              Gallery
            </a>
            <a onClick={handleNavClick} href="#about" className="hover:text-coral transition-colors duration-300 hover:scale-105 inline-block">
              About
            </a>
            <a onClick={handleNavClick} href="#contact" className="hover:text-coral transition-colors duration-300 hover:scale-105 inline-block">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MobileMenu handleNavClick={handleNavClick} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function MobileMenu({ handleNavClick }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-gray-700"
      >
        <span className="sr-only">Open menu</span>
        {/* simple hamburger */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-6 top-16 bg-white/95 backdrop-blur-md rounded-lg shadow-lg py-3 px-4">
          <a onClick={(e) => { setOpen(false); handleNavClick(e); }} href="#gallery" className="block py-2 px-3 hover:bg-gray-100 rounded">Gallery</a>
          <a onClick={(e) => { setOpen(false); handleNavClick(e); }} href="#about" className="block py-2 px-3 hover:bg-gray-100 rounded">About</a>
          <a onClick={(e) => { setOpen(false); handleNavClick(e); }} href="#contact" className="block py-2 px-3 hover:bg-gray-100 rounded">Contact</a>
        </div>
      )}
    </div>
  );
}

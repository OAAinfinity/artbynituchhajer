import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-terracotta via-rust to-amber text-cream py-12 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-light text-white drop-shadow-lg mb-2">
            Nitu Chhajer’s Art
          </h3>
          <p className="text-sm font-light text-cream/90">
            A journey of peace, color, and mindfulness
          </p>
        </div>

        <div className="border-t border-cream/30 pt-6">
          <p className="text-sm font-light text-cream/80">
            © 2025 Nitu Chhajer’s Art — Inspired by peace and creation.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

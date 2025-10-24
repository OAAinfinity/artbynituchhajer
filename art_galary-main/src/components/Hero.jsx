import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-peach via-sand to-amber pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warmGold rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
            A Journey of Peace,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral via-terracotta to-rust font-normal">Color, and Mindfulness</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-light max-w-2xl mx-auto mb-12">
            Explore a curated collection of spiritual art, from serene Buddha paintings
            to intricate Mandala designs, each piece crafted to inspire tranquility and reflection.
          </p>
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-coral to-terracotta text-white rounded-full font-light tracking-wide hover:from-terracotta hover:to-rust transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Gallery
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

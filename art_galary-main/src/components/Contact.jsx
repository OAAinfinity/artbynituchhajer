import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-cream to-peach section-fade">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-terracotta via-coral to-rust bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coral to-terracotta mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Interested in a commission, collaboration, or simply want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col items-center max-w-2xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-center w-full"
          >
            <h3 className="text-2xl font-light text-gray-800 mb-1">
              Let's Create Something Beautiful
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Whether you're looking for a custom piece, want to discuss a project,
              or simply wish to learn more about my work, I'm here to listen.
            </p>

            <div className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-6 md:space-y-0">
                <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral/20 to-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                      <path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0120.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75zM4.5 6.99v.01L12 11.25l7.5-4.25v-.01H4.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-normal text-gray-800 mb-1">Email</h4>
                    <a
                      href="mailto:neetuchhajer@gmail.com"
                      className="text-coral hover:text-terracotta transition-colors font-light"
                    >
                      neetuchhajer@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex-1 md:flex-none flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral/20 to-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-normal text-gray-800 mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/nituchhajersart?igsh=MW9jbXdocmdmZWtybw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-coral hover:text-terracotta transition-colors font-light"
                    >
                      @nituchhajersart
                    </a>
                  </div>
                </div>

                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

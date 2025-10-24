import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ image, onClose }) {
  // Disable scroll when modal is open
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [image]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!image) return null;

  const titleText = image.title || image.name || 'Artwork';
  const descText = image.description || 'No description available.';

  return createPortal(
    <AnimatePresence>
      {image && (
        <motion.div
          key="lightbox-bg"
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-start z-[9999] p-4 pt-8 md:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            key="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-6xl w-[90%] flex flex-col md:flex-row items-stretch"
          >
            {/* Image Section */}
            <div className="w-full md:w-3/5 bg-black flex justify-center items-start p-4 md:p-6">
              <img
                src={image.src}
                alt={titleText}
                className="object-contain max-h-[90vh] w-full h-auto"
              />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-2/5 p-6 md:p-8 bg-gradient-to-b from-gray-50 to-gray-100 max-h-[90vh]">
              <h3 className="text-gray-800 text-2xl font-semibold mb-3">{titleText}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{descText}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-800 text-3xl hover:text-red-500 transition"
              aria-label="Close lightbox"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
      
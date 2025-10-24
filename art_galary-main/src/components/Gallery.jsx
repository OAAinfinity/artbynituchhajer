import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

const categories = [
  { id: 'buddha', name: 'Buddha', description: 'Sacred depictions of enlightenment and wisdom' },
  { id: 'ganesha', name: 'Ganesha', description: 'The remover of obstacles and bringer of wisdom' },
  { id: 'mandala', name: 'Mandala', description: 'Sacred geometric patterns for meditation' },
  { id: 'nature', name: 'Nature', description: 'Spiritual connections with the natural world' },
  { id: 'self-love', name: 'Self Love', description: 'Art for inner peace and self-acceptance' },
];

const loadCategoryImages = async (category) => {
  const imageModules = {
    buddha: () => import('../assets/gallery_img/BUDDHA/images.js'),
    ganesha: () => import('../assets/gallery_img/GANESHA/images.js'),
    mandala: () => import('../assets/gallery_img/MANDALA/images.js'),
    nature: () => import('../assets/gallery_img/NATURE/images.js'),
    'self-love': () => import('../assets/gallery_img/SELF_LOVE/images.js'),
  };

  try {
    const module = await imageModules[category]();
    return module.default;
  } catch (error) {
    console.error(`Failed to load images for category: ${category}`, error);
    return [];
  }
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('buddha');
  const [currentArtworks, setCurrentArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      const images = await loadCategoryImages(selectedCategory);
      setCurrentArtworks(images);
      setIsLoading(false);
    };
    fetchImages();
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <p className="text-gray-600">Explore our curated collection of spiritual art.</p>
        </div>

        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl"
                onClick={() => setSelectedImage(artwork)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={artwork.src}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{artwork.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
}

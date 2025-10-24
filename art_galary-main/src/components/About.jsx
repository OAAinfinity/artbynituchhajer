import { motion } from 'framer-motion';
import AboutImage from '../../New folder/WhatsApp Image 2025-10-16 at 10.13.57_e791339e.jpg';

export default function About() {
  return (
  <section id="about" className="py-20 px-6 bg-gradient-to-br from-peach via-cream to-sand section-fade">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-terracotta via-coral to-rust bg-clip-text text-transparent mb-4">
            About the Artist
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coral to-terracotta mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-coral/20 hover:ring-coral/40 transition-all duration-300">
              <img
                src={AboutImage}
                alt="Artist at work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl space-y-6 text-center"
          >
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              My journey as an artist began in 2012, during my studies in fashion design. It was there that I discovered my deep connection with colors—a discovery that soon transformed into a calling. Painting came to me as a blessing at a time when I was uncertain about my career path. As I explored different mediums and forms of expression, I eventually found my true artistic voice in creating spiritual artworks using acrylics on canvas.
            </p>

            <p className="text-lg text-gray-700 font-light leading-relaxed">
              My art is a reflection of my inner journey—a quest to understand the unknown, uncover life’s deeper truths, and embrace the present moment through mindfulness. These personal explorations have inspired me to depict the rising consciousness of humanity through my work.
            </p>

            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Each of my paintings is an amalgamation of art and spirituality, carrying its own unique meaning. In my mandala art, I believe the entire universe is contained within each piece. The rhythmic repetition of patterns inside every circle brings serenity to the restless mind. Similarly, trees in my artwork symbolize the inner growth of human consciousness. Just as a tree flourishes when nurtured with love and compassion, we too grow and strengthen our roots when we are supported by the same.
            </p>

            <p className="text-lg text-gray-700 font-light leading-relaxed">
              The presence of Buddha in my paintings represents the essence of mindfulness and awakening. For me, a Buddha is anyone who is conscious, present, and truly alive. Through these images, I aim to remind viewers of the power of inner awareness.
            </p>

            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Color plays a vital role in my artistic expression. Each hue vibrates at its own unique frequency and conveys a distinct emotion. Shades of red express love, power, and passion; blue evokes calmness and peace; green symbolizes abundance, and so on. These vibrant colors breathe life into my work and reflect the emotional depth behind each creation.
            </p>

            <p className="text-lg text-gray-700 font-light leading-relaxed">
              I believe that while artists beautify spaces with their work, they also hold a greater responsibility. Through their art, they can inspire reflection, healing, and conscious change. As an artist, I strive not just to create beauty, but also to contribute meaningfully to the world’s growth and evolution.
            </p>

            {/* Subsections removed as requested */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

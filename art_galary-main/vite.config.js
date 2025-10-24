import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          // Group gallery images by category for better caching
          'gallery-buddha': ['./src/assets/gallery_img/BUDDHA/images.js'],
          'gallery-ganesha': ['./src/assets/gallery_img/GANESHA/images.js'],
          'gallery-mandala': ['./src/assets/gallery_img/MANDALA/images.js'],
          'gallery-nature': ['./src/assets/gallery_img/NATURE/images.js'],
          'gallery-self-love': ['./src/assets/gallery_img/SELF_LOVE/images.js'],
        },
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096, // Inline small assets
    cssCodeSplit: true, // Split CSS for better caching
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },
  // Optimize dev server
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  // Enable source maps for better debugging in production
  css: {
    devSourcemap: true
  }
})

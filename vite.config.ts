import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries - loaded on every page
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // UI components (Radix) - heavy library, split separately
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
          ],

          // Form libraries - only loaded when forms are used
          'form-libs': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
          ],

          // Animation libraries - heavy, split separately
          'animation': ['framer-motion', 'locomotive-scroll', 'embla-carousel-react'],

          // Utilities and helpers
          'utils': ['date-fns', 'clsx', 'tailwind-merge', 'class-variance-authority'],

          // Calendar components
          'calendar': ['react-calendar', 'react-day-picker'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,

    // Enable minification with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production', // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
      },
      format: {
        comments: false, // Remove comments
      },
    },

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Generate sourcemaps for production debugging (optional)
    sourcemap: mode === 'development',
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-calendar',
      'framer-motion',
    ],
  },
}));


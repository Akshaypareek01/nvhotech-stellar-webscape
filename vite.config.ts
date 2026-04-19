import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync } from "fs";

interface RouteEntry { path: string; priority: string; freq: string; }

function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    closeBundle() {
      const today = new Date().toISOString().split('T')[0];
      const entries: RouteEntry[] = [
        { path: '/', priority: '1.0', freq: 'weekly' },
        { path: '/services', priority: '0.8', freq: 'weekly' },
        { path: '/blog', priority: '0.8', freq: 'weekly' },
        { path: '/book-appointment', priority: '0.6', freq: 'monthly' },
        ...(['/web-development', '/mobile-app-development', '/ai-automation', '/software-development', '/digital-marketing', '/logo-design'] as string[])
          .map(p => ({ path: p, priority: '0.9', freq: 'weekly' })),
        ...(['/blog/future-of-mobile-app-development-nvhotech', '/blog/ai-and-web-development-revolution'] as string[])
          .map(p => ({ path: p, priority: '0.7', freq: 'monthly' })),
        ...(['/legal/privacy-policy', '/legal/terms-of-service', '/legal/refund-policy', '/legal/cookie-policy', '/legal/gdpr'] as string[])
          .map(p => ({ path: p, priority: '0.5', freq: 'monthly' })),
      ];
      const toUrl = ({ path: loc, priority, freq }: RouteEntry) =>
        `  <url>\n    <loc>https://nvhotech.com${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map(toUrl).join('\n')}\n</urlset>\n`;
      writeFileSync(path.resolve(__dirname, 'dist/sitemap.xml'), sitemap, 'utf-8');
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    sitemapPlugin(),
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


# NVHO Tech – Mobile PageSpeed & Lighthouse Optimization Plan

**Website:** [https://nvhotech.in](https://nvhotech.in)  
**Framework:** Vite + React (with React Router)  
**Target:** Mobile Performance 90+ | LCP < 2.5s | SEO 95+

---

## 📊 Current Status (From Lighthouse Report)

### Desktop ✅
- Performance: 91 (GOOD – no major action required)
- SEO: 91 (GOOD)

### Mobile ❌ (Priority)
- Performance: 73 ❌
- LCP: 4.4s ❌ (Main ranking issue)
- FCP: 3.8s ❌
- SEO: 92 ⚠️ (Minor fixes)

**Google uses mobile-first indexing**, so all fixes below are **mandatory**.

---

## 🎯 Implementation Roadmap

### Phase 1: Critical Performance Fixes (High Impact)
1. ✅ Fix Largest Contentful Paint (LCP)
2. ✅ Optimize Images
3. ✅ Remove Render-Blocking Resources
4. ✅ Reduce Unused JavaScript

### Phase 2: Performance Enhancements (Medium Impact)
5. ✅ Avoid Long Main Thread Tasks
6. ✅ Implement Code Splitting
7. ✅ Add Resource Hints

### Phase 3: SEO & Accessibility (Important)
8. ✅ SEO Fix – Descriptive Links
9. ✅ Accessibility Improvements
10. ✅ Security Headers

---

## 1. Fix Largest Contentful Paint (LCP) – CRITICAL 🔥

### Issue
- Hero/banner image loads late
- LCP element not prioritized
- Current LCP: 4.4s (Target: < 2.5s)

### Solution for Vite + React

#### A. Optimize Hero Image Loading
```tsx
// HeroSection.tsx - Add preload and optimize image
<img 
  src="/images/hero-banner.webp"
  alt="NVHO Tech - Software Development Company"
  width="1920"
  height="1080"
  loading="eager"  // Don't lazy load LCP image
  fetchpriority="high"  // Prioritize this image
  decoding="async"
/>
```

#### B. Add Preload Link in index.html
```html
<head>
  <!-- Preload LCP image -->
  <link rel="preload" as="image" href="/images/hero-banner.webp" fetchpriority="high">
</head>
```

#### C. Convert Images to WebP
- Convert all hero images to `.webp` format
- Use responsive images with `srcset`
- Compress images to < 100KB

### Expected Result
- LCP: < 2.5s ✅
- Mobile Performance: +15-20 points

---

## 2. Image Optimization (High Impact) 🖼️

### Issues
- Incorrect aspect ratios
- Low resolution images
- Missing width & height attributes
- No responsive images

### Required Changes

#### A. Image Component Pattern
```tsx
// Create reusable OptimizedImage component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className 
}: OptimizedImageProps) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    className={className}
    style={{ aspectRatio: `${width}/${height}` }}
  />
);
```

#### B. Responsive Images with srcset
```tsx
<img
  src="/images/hero-mobile.webp"
  srcSet="
    /images/hero-mobile.webp 640w,
    /images/hero-tablet.webp 1024w,
    /images/hero-desktop.webp 1920w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
  alt="Hero Image"
  width="1920"
  height="1080"
  loading="eager"
  fetchpriority="high"
/>
```

#### C. Image Conversion Checklist
- [ ] Convert all `.jpg`, `.png` to `.webp`
- [ ] Compress images (target: < 100KB for hero, < 50KB for others)
- [ ] Add explicit `width` and `height` to all images
- [ ] Use `loading="lazy"` for below-fold images
- [ ] Use `loading="eager"` for LCP image only

### Tools for Conversion
```bash
# Install image optimization tools
npm install -D vite-plugin-imagemin

# Or use online tools:
# - Squoosh.app
# - TinyPNG
# - ImageOptim (Mac)
```

---

## 3. Remove Render-Blocking Resources 🚫

### Issue
- Google Fonts blocking first render
- CSS blocking rendering
- Lighthouse saving potential: ~750ms

### Solution

#### A. Optimize Google Fonts Loading
**Current (Blocking):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Optimized (Non-Blocking):**
```html
<head>
  <!-- Preconnect to font origins -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Load fonts asynchronously -->
  <link 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
    media="print" 
    onload="this.media='all'"
  >
  <noscript>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  </noscript>
</head>
```

#### B. Self-Host Fonts (Best Option)
```bash
# Download fonts and place in /public/fonts/
# Update CSS to use local fonts
```

```css
/* index.css */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter-400.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/inter-700.woff2') format('woff2');
}
```

#### C. Reduce Font Weights
- Only load weights you actually use: 400, 500, 600, 700
- Remove unused weights: 300, 800, 900

---

## 4. Reduce Unused JavaScript 📦

### Issue
- ~108 KB unused JS
- Large bundle size
- Long main-thread tasks

### Solution

#### A. Enhanced Code Splitting (vite.config.ts)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // UI components (Radix)
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
          ],
          
          // Form libraries
          'form-libs': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
          ],
          
          // Animation libraries
          'animation': ['framer-motion', 'locomotive-scroll'],
          
          // Utilities
          'utils': ['date-fns', 'clsx', 'tailwind-merge'],
        },
      },
    },
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
});
```

#### B. Lazy Load Heavy Components
```tsx
// App.tsx - Already implemented, but ensure all routes are lazy loaded
import { lazy, Suspense } from 'react';

const Services = lazy(() => import('./pages/Services'));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'));
const MobileAppDevelopment = lazy(() => import('./pages/MobileAppDevelopment'));
const AIAutomation = lazy(() => import('./pages/AIAutomation'));
const SoftwareDevelopment = lazy(() => import('./pages/SoftwareDevelopment'));

// Lazy load heavy sections on home page
const AppSliderSection = lazy(() => import('./components/AppSliderSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
```

#### C. Import Icons Individually
```tsx
// ❌ Bad - Imports entire icon library
import * as Icons from 'lucide-react';

// ✅ Good - Import only what you need
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
```

#### D. Remove Unused Dependencies
```bash
# Analyze bundle size
npm install -D vite-plugin-bundle-analyzer

# Check for unused dependencies
npx depcheck
```

---

## 5. Avoid Long Main Thread Tasks ⚡

### Issue
- 3-4 long JS tasks blocking UI
- Heavy computations in render
- Blocking animations

### Solution

#### A. Use Web Workers for Heavy Computations
```tsx
// Create worker for heavy tasks
// src/workers/analytics.worker.ts
self.addEventListener('message', (e) => {
  const result = performHeavyCalculation(e.data);
  self.postMessage(result);
});

// Use in component
const worker = new Worker(new URL('./workers/analytics.worker.ts', import.meta.url));
```

#### B. Debounce/Throttle Event Handlers
```tsx
import { useCallback } from 'react';

// Debounce scroll events
const handleScroll = useCallback(
  debounce(() => {
    // Handle scroll
  }, 100),
  []
);
```

#### C. Use CSS Animations Instead of JS
```css
/* ✅ Use CSS animations - GPU accelerated */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

```tsx
// ❌ Avoid JS animations for simple effects
// Use framer-motion only for complex animations
```

#### D. Optimize Locomotive Scroll
```tsx
// useSmoothScroll.ts - Add performance optimizations
useEffect(() => {
  if (!scrollRef.current) return;

  const scroll = new LocomotiveScroll({
    el: scrollRef.current,
    smooth: true,
    multiplier: 1,
    class: 'is-reveal',
    smartphone: {
      smooth: false, // Disable on mobile for better performance
    },
    tablet: {
      smooth: false,
    },
  });

  locoRef.current = scroll;

  return () => {
    scroll.destroy();
  };
}, []);
```

---

## 6. Add Resource Hints 🔗

### Solution
Add to `index.html`:

```html
<head>
  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  
  <!-- Preconnect to critical origins -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Preload critical resources -->
  <link rel="preload" as="image" href="/images/hero-banner.webp" fetchpriority="high">
  <link rel="preload" as="style" href="/src/index.css">
  
  <!-- Prefetch next likely pages -->
  <link rel="prefetch" href="/services">
  <link rel="prefetch" href="/web-development">
</head>
```

---

## 7. SEO Fix – Descriptive Links (IMPORTANT) 🔍

### Issue
- Generic link text: "Learn More", "Click Here"
- Poor keyword relevance

### Solution

#### Before ❌
```tsx
<Link to="/services">Learn More</Link>
<Button>Click Here</Button>
```

#### After ✅
```tsx
<Link to="/web-development">
  Explore Our Web Development Services in India
</Link>

<Link to="/mobile-app-development">
  View Mobile App Development Solutions
</Link>

<Link to="/ai-automation">
  Discover AI Automation Services for Business
</Link>

<Button>
  Get Custom Software Development Quote
</Button>
```

### Implementation Checklist
- [ ] Replace all "Learn More" links
- [ ] Add keyword-rich anchor text
- [ ] Ensure links are descriptive and contextual
- [ ] Update button text to be action-oriented

---

## 8. Accessibility Fixes (Easy Wins) ♿

### Issues
- Buttons without accessible names
- Small touch targets (< 44px)
- Missing ARIA labels

### Solution

#### A. Add ARIA Labels
```tsx
// ❌ Before
<button onClick={handleClick}>
  <MenuIcon />
</button>

// ✅ After
<button 
  onClick={handleClick}
  aria-label="Open navigation menu"
>
  <MenuIcon />
</button>
```

#### B. Ensure Minimum Touch Target Size
```css
/* Ensure all interactive elements are at least 44x44px */
button, a {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}

/* Add spacing between touch targets */
.button-group button + button {
  margin-left: 12px;
}
```

#### C. Improve Focus Indicators
```css
/* Add visible focus indicators */
button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

#### D. Semantic HTML
```tsx
// ✅ Use semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>

<main>
  <h1>Main Heading</h1>
</main>

<footer>
  <p>&copy; 2024 NVHO Tech</p>
</footer>
```

---

## 9. Security Headers (Best Practices) 🔒

### Issue
- Missing security headers
- No CSP, HSTS, XFO headers

### Solution

#### Option A: Add via Vercel/Netlify Config
**vercel.json:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;"
        }
      ]
    }
  ]
}
```

**netlify.toml:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
```

---

## 10. Post-Deployment Checklist ✅

After implementing all fixes:

### A. Testing
- [ ] Run Lighthouse audit (Mobile)
- [ ] Check PageSpeed Insights
- [ ] Test on real mobile devices
- [ ] Verify Core Web Vitals

### B. Monitoring
- [ ] Open Google Search Console
- [ ] URL Inspection → Request Indexing
- [ ] Monitor Core Web Vitals report
- [ ] Set up performance monitoring

### C. Validation
- [ ] Mobile Performance ≥ 90
- [ ] LCP < 2.5 seconds
- [ ] FCP < 1.8 seconds
- [ ] SEO Score ≥ 95
- [ ] Accessibility Score ≥ 90

---

## 📈 Expected Results

| Metric | Before | Target | Expected Improvement |
|--------|--------|--------|---------------------|
| Mobile Performance | 73 | 90+ | +17-20 points |
| LCP | 4.4s | <2.5s | -1.9s (43% faster) |
| FCP | 3.8s | <1.8s | -2.0s (53% faster) |
| SEO Score | 92 | 95+ | +3-5 points |
| Total Blocking Time | High | <300ms | -70% |

---

## 🛠️ Implementation Order

**Follow this exact order for maximum impact:**

1. **Day 1: Critical Performance**
   - [ ] Convert and optimize hero image to WebP
   - [ ] Add preload hints for LCP image
   - [ ] Optimize font loading
   - [ ] Update HeroSection component

2. **Day 2: Image Optimization**
   - [ ] Convert all images to WebP
   - [ ] Add width/height to all images
   - [ ] Implement lazy loading
   - [ ] Create OptimizedImage component

3. **Day 3: JavaScript Optimization**
   - [ ] Update vite.config.ts with code splitting
   - [ ] Lazy load heavy components
   - [ ] Remove unused dependencies
   - [ ] Optimize icon imports

4. **Day 4: SEO & Accessibility**
   - [ ] Update all link text to be descriptive
   - [ ] Add ARIA labels to buttons
   - [ ] Ensure minimum touch target sizes
   - [ ] Improve focus indicators

5. **Day 5: Security & Final Testing**
   - [ ] Add security headers
   - [ ] Run final Lighthouse audit
   - [ ] Test on mobile devices
   - [ ] Deploy and request re-indexing

---

## 📝 Quick Wins (Can Implement Immediately)

1. **Add preload for hero image** (5 min)
2. **Convert hero image to WebP** (10 min)
3. **Update link text to be descriptive** (15 min)
4. **Add ARIA labels to icon buttons** (10 min)
5. **Optimize font loading** (10 min)

**Total Time: ~50 minutes for +10-15 performance points**

---

## 🎯 Success Criteria

✅ Mobile Performance: **90+**  
✅ LCP: **< 2.5 seconds**  
✅ FCP: **< 1.8 seconds**  
✅ SEO Score: **95+**  
✅ Accessibility: **90+**  
✅ Core Web Vitals: **PASS**

---

**Document prepared for:** NVHO Tech Development Team  
**Last Updated:** December 30, 2024  
**Framework:** Vite + React (Not Next.js)

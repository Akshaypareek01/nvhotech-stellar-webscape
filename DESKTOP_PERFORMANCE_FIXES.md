# Desktop Performance Optimization Plan
**Current Score:** 87/100  
**Target Score:** 90+  
**Date:** December 30, 2024

---

## 🎯 Quick Summary

Based on your Lighthouse report, here are the **high-impact fixes** to improve desktop performance from 87 to 90+:

### Critical Issues (High Impact)
1. ✅ **Render Blocking Resources** - Est. savings: 160ms
2. ✅ **Forced Reflows** - 217ms total reflow time
3. ✅ **Image Optimization** - Est. savings: 273 KiB
4. ✅ **Unused JavaScript** - Est. savings: 107 KiB

### Expected Impact
- **Performance Score:** 87 → 92+ (+5 points)
- **LCP:** 1.2s → <1.0s (20% faster)
- **TBT:** 240ms → <150ms (38% reduction)

---

## 🔥 Priority 1: Fix Forced Reflows (217ms savings)

### Issue
Your animation scripts are causing **forced reflows** (layout thrashing):
- `/assets/index-CoP1UNzR.js` - 217ms reflow time
- `/assets/animation-BYtdx08Q.js` - 127ms reflow time

### Root Cause
JavaScript is querying geometric properties (like `offsetWidth`) after DOM changes, forcing the browser to recalculate layout synchronously.

### Solution

#### A. Optimize Animation Scripts
```typescript
// Bad ❌ - Causes forced reflow
element.style.width = '100px';
const height = element.offsetHeight; // Forces reflow!
element.style.height = height + 'px';

// Good ✅ - Batch reads and writes
const height = element.offsetHeight; // Read first
element.style.width = '100px';      // Then write
element.style.height = height + 'px';
```

#### B. Use CSS Transforms Instead of Layout Properties
```typescript
// Bad ❌ - Triggers layout
element.style.left = '100px';
element.style.top = '50px';

// Good ✅ - GPU accelerated, no layout
element.style.transform = 'translate(100px, 50px)';
```

#### C. Use requestAnimationFrame for Animations
```typescript
// Batch DOM reads and writes
function animate() {
  // Read phase
  const rect = element.getBoundingClientRect();
  
  // Write phase
  requestAnimationFrame(() => {
    element.style.transform = `translateY(${rect.top}px)`;
  });
}
```

#### D. Disable Smooth Scroll on Desktop (if using Locomotive Scroll)
```typescript
// src/hooks/useSmoothScroll.ts
const scroll = new LocomotiveScroll({
  el: scrollRef.current,
  smooth: true,
  multiplier: 1,
  smartphone: {
    smooth: false, // Already disabled
  },
  tablet: {
    smooth: false, // Already disabled
  },
  // Add performance optimizations
  lerp: 0.1, // Reduce smoothness for better performance
  reloadOnContextChange: true,
});
```

---

## 🖼️ Priority 2: Image Optimization (273 KiB savings)

### Issues Identified

#### 1. Logo Image (90.1 KiB savings)
**Current:**
- File: `/images/logoNT.png` (91.2 KiB)
- Displayed: 107x64px
- Actual: 372x222px (3.5x larger than needed!)

**Fix:**
```bash
# Resize and convert logo
# Target: 107x64px @ 2x = 214x128px for retina displays
```

**Implementation:**
```tsx
// Update logo in Header component
<img 
  alt="NVHO Tech Logo" 
  width="107" 
  height="64" 
  loading="eager" 
  decoding="async" 
  src="/images/logoNT.webp"
  srcSet="/images/logoNT.webp 1x, /images/logoNT@2x.webp 2x"
  className="h-16 w-auto drop-shadow-2xl" 
/>
```

#### 2. App Slider Images (182.4 KiB savings)
**Current Issues:**
- `slider12.webp`: 667x1348px displayed as 297x600px (66.5 KiB wasted)
- `slider2.webp`: 667x1348px displayed as 297x600px (66.5 KiB wasted)
- `slider1.webp`: 667x1348px displayed as 297x600px (49.4 KiB wasted)

**Fix:**
```bash
# Resize slider images to match display size
# Target: 297x600px @ 2x = 594x1200px for retina
```

**Implementation:**
```tsx
// Update AppSliderSection component
<img 
  alt="App UI Design 12" 
  className="w-full h-full object-contain bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
  loading="lazy"
  width="297"
  height="600"
  src="/appslider/slider12-optimized.webp"
  srcSet="/appslider/slider12-optimized.webp 1x, /appslider/slider12-optimized@2x.webp 2x"
/>
```

### Action Items
- [ ] Resize logo to 214x128px (2x) and convert to WebP
- [ ] Resize slider images to 594x1200px (2x) and re-compress
- [ ] Add explicit width/height to all images
- [ ] Implement responsive images with srcset

---

## 🚫 Priority 3: Remove Render Blocking Resources (160ms savings)

### Issue
Google Fonts CSS is blocking initial render:
- `/css2?family=...` (fonts.googleapis.com) - 200ms duration

### Solution A: Async Font Loading (Quick Fix)

**Update `index.html`:**
```html
<!-- Current (Blocking) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Replace with (Non-blocking) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link 
  rel="stylesheet" 
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  media="print" 
  onload="this.media='all'"
>
<noscript>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</noscript>
```

**Key Changes:**
1. Removed unused font weights (300, 800, 900)
2. Added `media="print"` trick for async loading
3. Added fallback for no-JS users

### Solution B: Self-Host Fonts (Best Performance)

**Benefits:**
- No external DNS lookup
- No CORS preflight
- Full control over caching
- ~200ms faster

**Implementation:**
```bash
# 1. Download fonts from Google Fonts
# Visit: https://google-webfonts-helper.herokuapp.com/fonts

# 2. Place in /public/fonts/
# - inter-400.woff2
# - inter-500.woff2
# - inter-600.woff2
# - inter-700.woff2
# - jetbrains-mono-400.woff2
# - jetbrains-mono-500.woff2
```

**Update `src/index.css`:**
```css
/* Self-hosted fonts */
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
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/inter-500.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/inter-600.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/inter-700.woff2') format('woff2');
}

@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/jetbrains-mono-400.woff2') format('woff2');
}

@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/jetbrains-mono-500.woff2') format('woff2');
}
```

**Remove from `index.html`:**
```html
<!-- Delete these lines -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

---

## 📦 Priority 4: Reduce Unused JavaScript (107 KiB savings)

### Issues
1. Google Tag Manager: 53.3 KiB unused
2. Main bundle: 32.0 KiB unused
3. UI components: 21.3 KiB unused

### Solution

#### A. Lazy Load Google Analytics
```html
<!-- index.html - Move GTM to end of body -->
<body>
  <div id="root"></div>
  
  <!-- Load GTM after page load -->
  <script>
    window.addEventListener('load', function() {
      // Google Tag Manager
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-NW0PTXVT4Y');
    });
  </script>
</body>
```

#### B. Optimize Vite Bundle Splitting
```typescript
// vite.config.ts - Enhanced code splitting
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React (always needed)
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // UI components (lazy load)
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
          ],
          
          // Animation (lazy load)
          'animation': ['framer-motion', 'locomotive-scroll'],
          
          // Form libraries (only on contact page)
          'form-libs': ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
    
    // Enable aggressive minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
    },
  },
});
```

#### C. Import Icons Individually
```typescript
// ❌ Bad - Imports entire library
import * as Icons from 'lucide-react';

// ✅ Good - Import only what you need
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  Code,
  Smartphone,
  Brain,
  Zap 
} from 'lucide-react';
```

#### D. Lazy Load Heavy Components
```typescript
// App.tsx or main routing file
import { lazy, Suspense } from 'react';

// Lazy load non-critical sections
const AppSliderSection = lazy(() => import('./components/AppSliderSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <AppSliderSection />
</Suspense>
```

---

## 🎯 Implementation Checklist

### Quick Wins (30 minutes)
- [ ] Make Google Fonts async (5 min)
- [ ] Reduce font weights to 400, 500, 600, 700 (2 min)
- [ ] Move GTM to load after page load (5 min)
- [ ] Add width/height to logo image (2 min)
- [ ] Import icons individually (10 min)
- [ ] Enable Terser minification (5 min)

### Medium Priority (2-3 hours)
- [ ] Resize and optimize logo image
- [ ] Resize and optimize app slider images
- [ ] Implement responsive images with srcset
- [ ] Fix forced reflows in animation scripts
- [ ] Lazy load heavy components

### Best Performance (4-6 hours)
- [ ] Self-host Google Fonts
- [ ] Optimize Locomotive Scroll settings
- [ ] Use CSS animations instead of JS where possible
- [ ] Implement code splitting in vite.config.ts

---

## 📊 Expected Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Performance | 87 | 92+ | +5 points |
| FCP | 0.9s | 0.7s | 22% faster |
| LCP | 1.2s | 0.9s | 25% faster |
| TBT | 240ms | 140ms | 42% reduction |
| Bundle Size | ~200KB | ~150KB | 25% smaller |

---

## 🚀 Deployment Steps

1. **Implement Quick Wins** (30 min)
2. **Build and Test Locally**
   ```bash
   npm run build
   npm run preview
   ```
3. **Run Lighthouse Audit**
   ```bash
   # Open Chrome DevTools > Lighthouse
   # Run Desktop audit
   # Target: 90+ score
   ```
4. **Deploy to Production**
5. **Verify on PageSpeed Insights**
   - Desktop: https://pagespeed.web.dev/analysis?url=https://www.nvhotech.in

---

## 🔍 Monitoring

After deployment, monitor these metrics:
- [ ] Google Search Console - Core Web Vitals
- [ ] PageSpeed Insights - Weekly checks
- [ ] Lighthouse CI - Automated testing
- [ ] Real User Monitoring (RUM) - Actual user experience

---

**Document Created:** December 30, 2024  
**Target Completion:** January 2, 2025  
**Expected Performance Gain:** 87 → 92+ (+5 points)

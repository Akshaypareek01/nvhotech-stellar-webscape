# Quick Configuration Guide

## WhatsApp Number Configuration

The service pages currently have placeholder WhatsApp links. You need to update them with your actual WhatsApp number.

### Files to Update:

1. **src/pages/WebDevelopment.tsx** - Line ~210
2. **src/pages/MobileAppDevelopment.tsx** - Line ~220
3. **src/pages/AIAutomation.tsx** - Line ~230
4. **src/pages/SoftwareDevelopment.tsx** - Line ~240

### Current Code:
```tsx
onClick={() => window.open('https://wa.me/your-number', '_blank')}
```

### Replace with:
```tsx
onClick={() => window.open('https://wa.me/919876543210', '_blank')}
```

**Format:** Use country code without + or spaces
**Example:** For +91 98765 43210, use: `919876543210`

---

## Social Media Links

Update the Organization schema in `src/pages/Index.tsx` (lines 20-30) with your actual social media profiles:

```tsx
"sameAs": [
  "https://www.linkedin.com/company/nvhotech",  // Update this
  "https://twitter.com/nvhotech",                // Update this
  "https://www.facebook.com/nvhotech"            // Update this
]
```

---

## Logo Image

Update the logo URL in `src/pages/Index.tsx` (line 17):

```tsx
"logo": "https://nvhotech.in/images/logo.png"
```

Make sure you have a logo image at `public/images/logo.png`

---

## Open Graph Image

For better social media sharing, add an Open Graph image:

1. Create an image: 1200x630 pixels
2. Save as: `public/images/og-image.jpg`
3. The SEO component will automatically use it

---

## Testing Checklist

After making these updates:

- [ ] Test all service page links
- [ ] Click WhatsApp buttons to verify they work
- [ ] Check meta tags in browser inspector (F12 → Elements → `<head>`)
- [ ] Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test on mobile devices
- [ ] Check page load speed with [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Local Development

**Start dev server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

---

## Deployment

After deployment, verify:

1. All pages are accessible
2. Sitemap is accessible at: `https://nvhotech.in/sitemap.xml`
3. Robots.txt is accessible at: `https://nvhotech.in/robots.txt`
4. Meta tags are rendering correctly (view page source)

Then submit to Google Search Console!

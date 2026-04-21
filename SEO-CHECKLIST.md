# NVHO Tech — SEO Action Checklist
**Domain:** https://nvhotech.com  
**Started:** 2026-04-19

---

## ✅ Completed

- [x] Pre-rendering — all 17 routes generate static HTML at build time
- [x] Meta tags — unique title, description, canonical, OG, Twitter on every page
- [x] sitemap.xml — auto-generated on every build, submitted to Google
- [x] robots.txt — configured correctly
- [x] Google Search Console — domain verified, sitemap submitted
- [x] Indexing requested — 10 key pages queued for crawl

---

## 🔄 In Progress

- [ ] **Wait for Google crawl** — check Search Console in 2-3 days
  - Go to: Search Console → Indexing → Pages
  - Looking for: pages moving from "Not indexed" → indexed count increasing

---

## 📋 This Week

- [ ] **Fix og:image**
  - Create a 1200×630px image (company name + tagline on branded background)
  - Upload to EC2 at `/home/ubuntu/nvhotech-stellar-webscape/dist/images/og-image.jpg`
  - Also put in `public/images/og-image.jpg` so it persists on next build
  - Test at: https://developers.facebook.com/tools/debug/

- [ ] **Google Business Profile**
  - Go to: https://business.google.com
  - Create profile for NVHO Tech
  - Set website: https://nvhotech.com
  - Add services, photos, description

---

## 📋 Next 2-4 Weeks

- [ ] **Directory listings** (each gives a backlink)
  - [ ] Clutch.co — https://clutch.co/get-listed
  - [ ] GoodFirms — https://www.goodfirms.co/get-listed
  - [ ] IndiaMART — https://www.indiamart.com
  - [ ] Justdial — https://www.justdial.com
  - [ ] DesignRush — https://www.designrush.com/agency/register

- [ ] **Blog post #3**
  - Suggested: "How Much Does Web Development Cost in India in 2025?"
  - After publishing: run `npm run build` on EC2 + request indexing in Search Console

- [ ] **Blog post #4**
  - Suggested: "AI Automation for Small Businesses — Where to Start"
  - After publishing: run `npm run build` on EC2 + request indexing in Search Console

---

## 📋 Ongoing (Every Week)

- [ ] Check Search Console → Performance for new queries
- [ ] Check Search Console → Pages for any new errors
- [ ] New blog post every 2 weeks → build → request indexing

---

## 🔁 Deploy Workflow (every change)

```bash
# On EC2 at /home/ubuntu/nvhotech-stellar-webscape/
git pull origin main
npm run build
# → Vite builds + 17 routes pre-rendered automatically
```

Then for new pages/posts only:
- Search Console → URL Inspection → paste new URL → Request Indexing

---

## 📊 Progress Tracker

| Date | Indexed Pages | Notes |
|------|--------------|-------|
| 2026-04-19 | 0 | Launch — indexing requested |
| | | |
| | | |

*Update the table every time you check Search Console.*

# SEO / AEO / GEO — External Actions (not fixable in code)

Everything code-level was implemented on 2026-07-15 (schema suite, FAQ blocks + FAQPage schema, llms.txt, meta rewrite for global targeting, prerendered 404 page). The items below need server access, accounts, or human decisions.

Priorities: **P1 = this week**, P2 = this month, P3 = ongoing. Effort: S / M / L.

---

## 1. nginx: www → non-www 301 redirect — P1, S

**Why:** `https://www.nvhotech.com/` currently serves the full site with HTTP 200. Google sees two hosts with identical content; link equity splits between them. Canonical tags mitigate but a 301 is the correct fix.

Add a dedicated server block (adjust cert paths to your setup):

```nginx
server {
    listen 443 ssl http2;
    listen 80;
    server_name www.nvhotech.com;

    # reuse the same certificate (must cover www.nvhotech.com)
    ssl_certificate     /etc/letsencrypt/live/nvhotech.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nvhotech.com/privkey.pem;

    return 301 https://nvhotech.com$request_uri;
}
```

Then `sudo nginx -t && sudo systemctl reload nginx`. Verify: `curl -sI https://www.nvhotech.com/ | head -3` → must show `301` and `Location: https://nvhotech.com/`.

## 2. nginx: real 404 responses — P1, S

**Why:** Any nonexistent URL (e.g. `/asdf`) currently returns HTTP 200 with the homepage. Google flags these as soft-404s and may index junk URLs. The build now produces `dist/404.html` (a branded, noindexed 404 page) — nginx just needs to use it.

In the main `nvhotech.com` server block, replace the SPA fallback (`try_files ... /index.html;`) with:

```nginx
root /path/to/dist;   # keep your existing root

location / {
    # every real route is prerendered to <route>/index.html,
    # so anything that doesn't resolve is a genuine 404
    try_files $uri $uri/index.html =404;
}

error_page 404 /404.html;
location = /404.html { internal; }
```

Verify after reload:
- `curl -sI https://nvhotech.com/no-such-page` → `404`
- `curl -sI https://nvhotech.com/web-development` → `200`
- `curl -sI https://nvhotech.com/llms.txt` → `200` with text content

Note: if you add a new route in `src/App.tsx` you must also add it to `scripts/prerender.mjs` ROUTES, or it will 404 in production.

## 3. Google Search Console — P1, S

Already verified. This week:
1. Sitemaps → resubmit `https://nvhotech.com/sitemap.xml` (lastmod dates were refreshed).
2. URL Inspection → "Request indexing" for: `/`, `/web-development`, `/mobile-app-development`, `/ai-automation`, `/software-development`, `/services`.
3. Pages report → after the nginx 404 fix, watch "Soft 404" and "Duplicate without user-selected canonical" counts drop over 2–4 weeks.
4. Enhancements → confirm FAQ rich results are detected (may take 1–2 weeks after re-crawl).

## 4. Social profiles (sameAs) — RESOLVED 2026-07-15, follow-up P2

No active social accounts existed, so the dead `sameAs` links were removed from `src/lib/seoSchemas.ts` on 2026-07-15 (dead links hurt GEO more than absence does).

**Follow-up:** when you do create a LinkedIn company page (highest value for a B2B agency — do this one first), X/Twitter, or Facebook page, tell the dev to re-add the real URLs to the `sameAs` array in `src/lib/seoSchemas.ts` and to the llms.txt. Fill each profile with the same one-line description used on the site ("NVHO Tech builds custom web applications, mobile apps, AI automation, and enterprise software for startups and businesses worldwide.").

## 5. Directory listings — the real battleground for your keywords — P1–P2, M

Competitor research (July 2026) shows Google's top results for "custom software development company", "web development company for startups", and "AI automation agency" are dominated by **directories**, not agency sites. Being listed and reviewed there is how mid-size agencies actually get found:

| Platform | Action | Priority |
|---|---|---|
| Clutch.co | Create/claim profile, complete every field, get 3–5 client reviews (Clutch phone-verifies them) | P1 |
| GoodFirms.co | Full profile + reviews | P1 |
| DesignRush.com | Profile under Web Development, AI, Software categories | P2 |
| G2 (if productized offerings) | Profile | P3 |
| Crunchbase | Company profile (AI systems cite it heavily) | P1 |
| Wellfound (ex-AngelList) | Company profile | P2 |
| Google Business Profile | Even for a global-serving company, claim it for brand searches | P2 |

Client reviews on Clutch/GoodFirms are the single highest-leverage external action: they feed both Google rankings ("best software development company" listicles source from Clutch) and AI recommendations (ChatGPT/Perplexity cite Clutch/GoodFirms rankings when asked "best web development company for startups").

## 6. Backlinks — P2, M

Realistic targets for an agency your size:
- **Directory profiles above** (each is a DA80+ link).
- **Case-study swaps:** ask 2–3 past clients to link "Built by NVHO Tech" in their site footer.
- **Guest posts / dev content:** publish technical articles on dev.to, Medium, and Hashnode republishing blog content with canonical back to nvhotech.com.
- **Tool/library pages:** if you open-source anything (even a small React component), the GitHub → site link plus npm listing builds developer-trust signals AI engines weigh.
- **HARO/Connectively + Qwoted:** respond to journalist queries on software/AI topics; quotes earn authority links that GEO research shows AI engines strongly favor.

## 7. Content calendar — 8 articles targeting gaps found in competitor research — P2, ongoing

Competitors (Itransition, Bitcot) win AI citations with cost guides, comparison pages, and "how to choose" content. NVHO Tech's blog has only 2 posts. Publish 2/month:

| # | Title (target query) | Intent |
|---|---|---|
| 1 | How Much Does Custom Software Development Cost in 2026? (query: "custom software development cost") | Commercial research — AI engines love pages that state real ranges |
| 2 | Custom Software vs Off-the-Shelf: A Decision Framework (query: "custom vs off the shelf software") | Comparison — owns the "vs" query |
| 3 | How to Choose a Software Development Company: 12 Questions to Ask (query: "how to choose software development company") | Decision-stage |
| 4 | React Native vs Flutter in 2026: Which Should Your Startup Pick? (query: "react native vs flutter") | Comparison, high volume |
| 5 | AI Automation ROI: How to Estimate Savings Before You Build (query: "ai automation roi") | AEO-friendly, quotable stats |
| 6 | What Is an AI Agent? A Plain-English Guide for Business Owners (query: "what is an ai agent for business") | Definitional — prime AI-citation format |
| 7 | Website Redesign Without Losing SEO: Migration Checklist (query: "website redesign seo checklist") | Service-adjacent, links to /web-development |
| 8 | MVP Development Timeline: What 8–12 Weeks Actually Looks Like (query: "mvp development timeline") | Startup audience |

Each article: question-form H2s, a 40–60 word direct answer under each, one stat or concrete number per section, author byline, and `datePublished`/`dateModified` (the BlogPosting schema is already wired — just add posts to `src/data/blogData.ts`).

## 8. Proof points on the site — needs your real numbers — P2, S

Competitors lead with "500+ projects", "95% retention", "10+ years". The site currently states no numbers. Send the dev your real figures (projects delivered, years active, client countries, retention) to add to the About section and homepage hero. **Do not invent numbers** — AI engines increasingly cross-check claims.

## 9. Proper OG image — P2, S

Social/link previews currently use the logo PNG. Create a 1200×630 branded card (logo + tagline + service icons), save as `public/images/og-card.png`, and have the dev switch the default `ogImage` in `src/components/SEO.tsx` and `index.html`.

## 10. AI-crawler policy — decided, no action

You chose to keep robots.txt open to GPTBot, PerplexityBot, ClaudeBot, Google-Extended. This is correct for GEO. No change needed; revisit only if content scraping ever becomes a business concern.

## 11. Monthly monitoring checklist — P3, ongoing

- **Search Console:** queries gaining impressions, average position on the 6 money pages, coverage errors, FAQ rich-result status.
- **Rankings spot-check:** "custom software development company", "AI automation services", "mobile app development company" + "NVHO Tech" branded search.
- **AI mention checks:** ask ChatGPT, Perplexity, and Gemini "best software development company for startups", "AI automation agency for small business", and "what is NVHO Tech" — log whether/how the brand appears, monthly.
- **Directories:** review count on Clutch/GoodFirms.
- **After deploys:** re-run `curl -s https://nvhotech.com/web-development | grep ld+json` to confirm prerendered schema is still served.

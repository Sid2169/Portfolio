# SEO growth plan for Siddhartha Suman's developer portfolio

Audit date: 17 September 2026  
Current production URL: `https://sidsingh.vercel.app/`

## Objective

Make the portfolio easy to crawl, fast on mobile, and useful enough to earn rankings for Siddhartha's name and focused hiring-intent searches around Next.js, TypeScript, full-stack development, and AI product engineering.

SEO cannot guarantee a position. The plan therefore measures indexation, impressions, qualified visits, resume views, project visits, and contact submissions before using rankings as a success signal.

## Current baseline

### What is already working

- The home page returns HTTPS `200` and is not blocked from indexing.
- It has a relevant title and meta description.
- The rendered page contains substantial project, experience, skills, testimonial, and contact copy.
- Navigation and most external links use real anchor elements.
- Images have `alt` attributes, although several need better values.
- A production build completes successfully.

### Highest-impact gaps found in the repository and live deployment

| Priority | Finding | Evidence | Why it matters |
| --- | --- | --- | --- |
| P0 | The HTTP response is an empty React app shell | The source response contains only `<div id="root"></div>`; content appears after JavaScript runs | Google can render JavaScript, but it adds a rendering stage and many other crawlers do not execute it. Static HTML also improves first paint and resilience. |
| P0 | The site has only one indexable content URL | Projects, experience, skills, and testimonials are fragments on `/` | One page has limited ability to match distinct searches. Detailed case studies can rank for specific problems and technologies. |
| P0 | Mobile performance is poor in the lab baseline | Lighthouse: Performance 36, FCP 3.5 s, LCP 6.5 s, 1,381 KiB transferred | Slow rendering harms users and makes the JavaScript rendering dependency more costly. The headless test produced abnormally high animation-related blocking time, so it should be repeated after the 3D/animation work and checked against field data. |
| P0 | The 3D hero is on the critical loading path | Initial build includes 720 KB Three.js core, 325 KB Three ecosystem, and an 825 KB GLB; the GLB is explicitly preloaded | The visual loads before it is needed and competes with the page's main text and LCP image. |
| P0 | `robots.txt` and `sitemap.xml` return `404` | Verified on the live deployment | They are basic discovery and crawl-management files and should exist before Search Console submission. |
| P1 | No canonical URL is declared | No `rel="canonical"` in the source | A canonical consolidates signals across URL variants and becomes essential if a custom domain is introduced. |
| P1 | Social metadata is incomplete | `og:url`, `og:image`, and `twitter:image` are absent | Shared links have no controlled preview image, which can reduce click-through and weaken presentation. |
| P1 | No structured data is present | No JSON-LD in source or rendered HTML | `ProfilePage` with a `Person` entity can clarify the site's owner, role, photo, and verified profiles. |
| P1 | The main heading does not identify the person or role | The H1 begins “I build…”; experience cards also use H1 elements | The page topic should be immediately explicit. The experience titles belong lower in the heading hierarchy. |
| P1 | The page has no `<main>` landmark | Lighthouse accessibility audit | Correct document structure helps crawlers and assistive technology understand the primary content. |
| P1 | “See my work” is not a crawlable link | It is an `<a>` without an `href`; Lighthouse SEO score is 91 because of this | Use `href="#work"` and keep smooth scrolling as enhancement. |
| P1 | Most below-the-fold images are eager and unsized | Only one component uses `loading="lazy"`; Lighthouse flags missing dimensions | Explicit dimensions prevent layout work, while lazy loading reduces the initial request load. |
| P2 | The copy describes skills but has little first-hand depth | Project cards are summaries and have no architecture, decisions, constraints, or outcome pages | Search visibility beyond the person's name will come from useful, original case studies and technical writing, not keyword repetition. |
| P2 | No search/conversion measurement is visible in the repo | No analytics or Search Console verification code found | Work cannot be prioritized by queries, indexed pages, or qualified actions without measurement. |

## Search positioning and keyword map

Do not optimize the home page for a broad term such as “software developer.” Use the strongest factual position already supported by the resume and projects:

**Recommended positioning:** Next.js and full-stack developer in India building production AI web applications with TypeScript, React, and Node.js.

Before finalizing titles, use Search Console data, Google suggestions, hiring pages, and a keyword tool to validate wording and geography. Map one intent to each page:

| Page | Primary search intent | Suggested title direction |
| --- | --- | --- |
| `/` | Name + professional specialty | `Siddhartha Suman — Next.js & Full-Stack Developer` |
| `/projects/turbo-ai-code-editor` | Browser AI IDE, WebContainers, Next.js | `Building a Browser-Based AI Code Editor with Next.js and WebContainers` |
| `/projects/deepread-ai` | Voice AI PDF assistant, Gemini, Vapi | `DeepRead AI: A Voice Assistant for PDF Books` |
| `/projects/pg-life` | React accommodation search case study | `Building a PG Accommodation Search App with React` |
| `/projects/odin-showcase` | React/TypeScript learning portfolio | `React and TypeScript Projects from The Odin Project` |
| `/about` | Name, biography, experience, location | `About Siddhartha Suman — Full-Stack Developer in India` |
| `/resume` | Name + resume/CV | `Siddhartha Suman Resume — Next.js & Full-Stack Developer` |

The wording must stay accurate. Add narrower topics only where the page demonstrates them with code, screenshots, technical decisions, or measurable results.

## Implementation roadmap

### Phase 1 — Foundation and indexability (week 1)

1. **Choose the permanent canonical domain.**
   - Preferred: a short personal custom domain that Siddhartha controls.
   - If a custom domain is not ready, use the current Vercel URL consistently for now.
   - When changing domains, add permanent redirects from every old URL to its matching new URL; do not maintain two indexable copies.

2. **Make primary content available as static HTML.**
   - Pre-render the home page at build time while hydrating interactive components in the browser.
   - Keep the 3D canvas as a client-only enhancement with a static poster/fallback.
   - As case-study routes are added, generate each route as static HTML.
   - Recheck the deployed response with `curl`; the HTML should contain the H1, introduction, project names, and normal links before JavaScript executes.
   - A full framework migration is not required for the first release. If the planned case studies and articles grow, evaluate Astro or Next.js static generation as a separate decision.

3. **Add crawl and URL signals.**
   - Create `public/robots.txt`, allow the public site, and reference the sitemap.
   - Generate `public/sitemap.xml` from the canonical URL list; include only indexable canonical pages.
   - Add a self-referencing canonical tag to every page.
   - Confirm HTTP, Vercel preview deployments, and alternate hostnames do not create indexable duplicates. Preview deployments should carry `noindex` or access protection.

4. **Complete metadata.**
   - Keep titles concise, page-specific, and descriptive.
   - Write a unique description for every page based on its real content.
   - Add `og:url`, `og:site_name`, a 1200×630 `og:image`, image dimensions/alt text, and matching Twitter image tags.
   - Correct the favicon MIME declaration or provide proper PNG/ICO variants.

5. **Fix document structure.**
   - Wrap page content in `<main>`.
   - Change the home H1 to include `Siddhartha Suman` and the primary role while preserving the animated supporting text.
   - Change experience job titles from H1 to H3 under the section H2.
   - Give “See my work” an actual `href="#work"`.
   - Use empty alt text for decorative backgrounds, arrows, and stars. Use contextual alt text for project screenshots and company marks.

6. **Add truthful structured data.**
   - Add `ProfilePage` JSON-LD whose `mainEntity` is a `Person` with name, URL, image, description/job title, location at the level publicly shown on the page, and `sameAs` links to GitHub, LinkedIn, and X.
   - Add `WebSite` data with the canonical site URL and name.
   - Validate with Schema Markup Validator and Google's Rich Results Test.
   - Do not add ratings or review markup to the testimonials; self-hosted portfolio testimonials are not a reason to manufacture review rich results.

### Phase 2 — Performance and rendering (weeks 1–2)

1. **Remove 3D from the initial critical path.**
   - Remove the GLB preload.
   - Show an optimized static hero poster first.
   - Dynamically import and mount the Three.js experience after user interaction, during idle time on capable devices, or when the canvas approaches the viewport.
   - Offer reduced-motion and low-power/mobile fallbacks; pause the render loop while the canvas is off-screen or the tab is hidden.

2. **Reduce animation main-thread cost.**
   - Audit continuously running GSAP/ScrollTrigger work and avoid creating animation updates inside scroll callbacks.
   - Respect `prefers-reduced-motion` and skip nonessential animation.
   - Test without the 3D canvas and then add it back progressively to isolate its cost.

3. **Improve the media path.**
   - Add intrinsic `width` and `height` (or stable `aspect-ratio`) to images.
   - Lazy-load below-the-fold screenshots, logos, portraits, and testimonial images.
   - Supply responsive `srcset`/`sizes`; the 140 KB portrait and project screenshots should not be sent at desktop dimensions to small screens.
   - Mark decorative images correctly and set high priority only on the actual LCP asset.

4. **Reduce render blocking.**
   - Self-host/subset the font or load only used styles and weights.
   - Review the generated module preloads: the current output preloads Three.js even though the configuration comments describe it as lazy.
   - Keep noncritical sections split, but make their meaningful HTML part of the static response.

5. **Performance acceptance criteria.**
   - Field Core Web Vitals at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.
   - Repeat mobile Lighthouse until runs are stable; target Performance ≥ 85 initially and ≥ 90 after tuning.
   - Target Lighthouse SEO 100 and preserve Accessibility ≥ 98.
   - Record the initial compressed JavaScript and total transfer budget, then enforce a lower budget in CI. The 3D bundles must not load for users who never activate the experience.

### Phase 3 — Build pages that can earn non-brand traffic (weeks 2–5)

1. **Turn each project into a case study.** Each page should include:
   - the user problem and intended audience;
   - Siddhartha's role and project scope;
   - architecture diagram or concise stack explanation;
   - two or three important technical decisions and tradeoffs;
   - a difficult constraint or failure and how it was resolved;
   - measurable result where evidence exists;
   - screenshots with captions and descriptive alt text;
   - links to the live product and source repository;
   - related case studies and relevant technical notes.

2. **Create useful HTML versions of identity pages.**
   - `/about`: short professional biography, focus, experience, education, location, and links to public profiles.
   - `/resume`: an accessible HTML resume with the PDF as a download option. Link both ways between the resume, experience, and project pages.

3. **Add a small technical writing section only if it can be maintained.**
   - Start with two strong articles derived from actual project work, for example WebContainers architecture in Turbo and low-latency voice/PDF retrieval in DeepRead.
   - Publish one or two substantial pieces per month. Each should answer a specific developer question with original code, measurements, diagrams, or lessons.
   - Avoid mass-produced keyword pages and generic AI summaries.

4. **Build internal links deliberately.**
   - Link the home-page project cards to their case studies as the primary action.
   - Link technologies and claims to the case study that demonstrates them.
   - Add breadcrumbs to project/article pages and include them in structured data where appropriate.
   - Ensure every indexable page is reachable through ordinary `<a href>` links.

### Phase 4 — Discovery, authority, and iteration (weeks 3–12)

1. **Configure measurement.**
   - Verify a Google Search Console domain property and Bing Webmaster Tools.
   - Submit the sitemap and inspect the home page plus every case study.
   - Add privacy-appropriate analytics and track: contact success, resume view/download, project demo click, GitHub click, and LinkedIn click.
   - Use Vercel Speed Insights or another real-user monitoring source for field performance.

2. **Strengthen consistent public identity.**
   - Use the same name, role wording, portrait, canonical portfolio link, and short bio on GitHub and LinkedIn.
   - Add the canonical case-study URL to each matching GitHub repository README and repository website field.
   - Ask past employers or collaborators to link to the relevant portfolio/case study when contextually appropriate.

3. **Earn relevant links.**
   - Contribute technical articles or documentation to communities used in the projects.
   - Publish reusable code, architecture notes, or open-source fixes that people can cite.
   - Prefer a small number of editorially relevant links over directory submissions or paid link packages.

4. **Use Search Console data every two weeks.**
   - Find pages with impressions but low click-through and improve their title/snippet promise.
   - Find queries ranking on pages 2–4 and strengthen the matching page with missing, useful detail.
   - Inspect excluded URLs and fix only genuine canonical, crawl, or content problems.
   - Refresh case studies when the product or measured outcomes change.

## 30/60/90-day delivery checklist

### By day 30

- [ ] Permanent domain decision made and canonical rules deployed.
- [ ] Home page content present in the initial HTML response.
- [ ] `robots.txt`, sitemap, canonical tags, full social metadata, and validated JSON-LD live.
- [ ] Heading hierarchy, `<main>`, crawlable CTA, image dimensions, and lazy loading fixed.
- [ ] 3D scene removed from the critical path and performance baseline rerun.
- [ ] Search Console, Bing Webmaster Tools, analytics, and conversion events configured.
- [ ] At least two detailed project case studies published.

### By day 60

- [ ] All four project case studies, About, and HTML Resume pages published and indexed.
- [ ] Every indexable page has a unique title, description, H1, canonical, structured data where appropriate, and internal links.
- [ ] First two original technical articles published.
- [ ] Core Web Vitals field data is collecting; lab performance meets the initial target.
- [ ] GitHub and LinkedIn profiles and repository links consistently reference the canonical site.

### By day 90

- [ ] Search Console query/page data reviewed in at least three two-week cycles.
- [ ] High-impression, low-CTR titles and descriptions revised once using data.
- [ ] Promising queries supported with stronger case-study sections or one focused article.
- [ ] At least five relevant external mentions/links pursued, with quality recorded rather than raw count.
- [ ] Technical crawl, schema validation, broken-link check, and mobile Lighthouse rerun completed.

## Scorecard

Record the pre-launch value and review monthly. Avoid judging SEO week to week.

| Area | Metric | 90-day target |
| --- | --- | --- |
| Indexation | Valid canonical pages indexed | All submitted core pages, with no accidental preview/duplicate pages |
| Crawlability | Initial HTML contains primary copy and links | 100% of indexable pages |
| Technical | Lighthouse SEO | 100 on representative pages |
| User experience | Core Web Vitals | “Good” for LCP, INP, and CLS at the 75th percentile when field data is available |
| Visibility | Branded impressions/clicks | Upward trend; exact target set after the first 28 days of Search Console data |
| Discovery | Non-brand impressions to case studies/articles | Upward trend across two consecutive monthly comparisons |
| Engagement | Resume, contact, project, GitHub, LinkedIn actions | Baseline in month 1; improve qualified action rate rather than raw page views |
| Authority | Relevant referring domains | Quality-reviewed growth; no purchased or automated links |

## Verification before each release

- Build and lint succeed.
- Crawl the production build with JavaScript disabled and enabled.
- Confirm each route returns the intended status, title, canonical, and static primary content.
- Validate sitemap URLs, `robots.txt`, structured data, Open Graph previews, and broken internal/external links.
- Run mobile Lighthouse on the home page and one case study; compare against the stored baseline.
- Inspect the deployed URL in Search Console after material changes.

## Primary references

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Google Search Console getting started](https://developers.google.com/search/docs/monitor-debug/search-console-start)
- [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)


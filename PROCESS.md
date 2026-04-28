# Process Documentation

## 1. One feature, the prompts I used

Feature: Scrollytelling homepage with all iPhone models and images

Prompt 1 — Spec:
"You are a spec writer. Write a feature spec for converting this scrollytelling template into "The iPhone Evolution Museum" — a scrollytelling exhibit about the iPhone's evolution from 2007 to 2025. FORMAT: Problem: What are we building and why? Intended Outcome: What should the finished scrollytelling page look and feel like? Scope: What sections will the page include? Out of Scope: What are we NOT doing in this sprint? Constraints: Design Style: Minimalism (Apple-inspired, clean white space, sans-serif), Brand Archetype: The Creator (visionary, innovative tone), Cialdini Principle: Social Proof (adoption stats, cultural moments). Acceptance Criteria: How do we know it's done? Verification: What commands confirm it works? CONTEXT: 3+ billion iPhones sold since 2007, every generation from original iPhone to iPhone 17/Air (2025), each era should scroll into view like walking through a museum, the site uses framer-motion for scroll animations, deploy to GitHub Pages. Write the full spec only. Do NOT write any code."

Prompt 2 — QA the spec:
"You are a QA auditor. Review the spec in docs/specs/iphone-museum.md. Check for: Contradictions, Vague or untestable acceptance criteria, Missing scope boundaries, Unsupported assumptions. List every issue found and suggest fixes. Do NOT write any code."

Prompt 3 — Sprint plan:
"You are a sprint planner. Based on the spec in docs/specs/iphone-museum.md and the QA feedback in docs/specs/iphone-museum-qa.md, write Sprint 0. Sprint format: Sprint Goal: one sentence, Files in scope: exact files to create or edit, Tasks: numbered list of specific things to implement, Exit Checks: exact commands and manual checks to verify completion, Completion checklist: checkboxes for each deliverable. This sprint covers ONLY the homepage scrollytelling page with iPhone museum content. Each iPhone era should be a separate entry (not grouped). Include every major model from 2007 to 2025. Confirm framer-motion is installed before implementing animations. Social proof must appear in at least 3 places with specific numbers. Do NOT write any code."

Prompt 4 — Implement:
"You are a senior Next.js developer implementing Sprint 0 from docs/phases/sprint-0.md. First confirm framer-motion is installed by checking package.json. Then rewrite the homepage content in content/home.md AND src/app/page.tsx to create The iPhone Evolution Museum scrollytelling page. Each iPhone model gets its own section that animates into view on scroll using framer-motion whileInView. Use these exact models with real data: 2007 iPhone, 2008 iPhone 3G, 2009 iPhone 3GS, 2010 iPhone 4, 2011 iPhone 4s, 2012 iPhone 5, 2013 iPhone 5s, 2014 iPhone 6, 2015 iPhone 6s, 2016 iPhone 7, 2017 iPhone X, 2018 iPhone XS/XR, 2019 iPhone 11, 2020 iPhone 12, 2021 iPhone 13 Pro, 2022 iPhone 14 Pro, 2023 iPhone 15, 2024 iPhone 16, 2025 iPhone 17/Air."

Prompt 5 — Add images:
"Update src/components/HomeMuseum.tsx to display an image next to each iPhone entry. Images are in public/images/iphones/ with these exact filenames: iphone-2007.webp, iphone-3g.jpg, iphone-3gs.jpg, iphone-4.jpg, iphone-4s.jpg, iphone-5.jpg, iphone-5s.webp, iphone-6.jpg, iphone-6s.webp, iphone-7.jpg, iphone-x.jpg, iphone-xs.jpg, iphone-11.jpg, iphone-12.jpg, iphone-13-pro.jpg, iphone-14-pro.jpg, iphone-15.jpg, iphone-16.jpg, iphone-17.jpg. Make each section side-by-side: image on left, text on right. Tailwind responsive grid — stacked on mobile, side by side on desktop. Images should be rounded-2xl, max height 280px, object-contain. Keep all existing scroll animations and content intact."

Prompt 6 — Enhance animations (reverted):
"Upgrade the scroll animations in src/components/HomeMuseum.tsx to make it feel like a real scrollytelling experience. Add: hero text fades in and scales up, counter animates from 0 to 3 billion, alternate layout odd/even entries, image slides in from left or right with rotation, text fades up with staggered delay, parallax effect on images, progress bar at top, subtle dividers between sections, Steve Jobs quote scales up on enter. Keep all existing content and images."

Prompt 7 — QA the implementation:
"You are a Smithsonian museum curator and QA auditor. Review the current homepage at src/components/HomeMuseum.tsx. Evaluate it as a museum exhibit: narrative flow, visual coherence, educational value, emotional engagement, scroll experience, social proof. Also check for broken images, TypeScript errors, responsive layout issues, accessibility concerns. List specific improvements."

## 2. Exit checks — pass and fail

- [x] PASS: framer-motion confirmed installed via package.json
- [x] PASS: npm run build completes without errors
- [x] PASS: localhost:3000 loads with all 19 iPhone models visible
- [x] PASS: Scroll animations work — sections animate on scroll
- [x] PASS: At least 3 social proof stats visible (3 billion sold, 6.1M year one, 500 apps day one)
- [x] PASS: All 19 images display correctly next to each model
- [x] PASS: Progress bar tracks scroll position
- [x] PASS: Parallax effect works on images
- [x] PASS: Site deploys to GitHub Pages
- [x] PASS: README has live URL, author name, topic
- [ ] FAIL then PASS: Prompt 6 enhanced animations but changed the entire design. Reverted with Cmd+Z and kept the previous working version.

## 3. Failure-mode reflection

The failure mode I hit was "does more than you asked." When I sent Prompt 6 asking to upgrade the scroll animations, the AI rewrote the entire HomeMuseum component — not just the animations but the layout, spacing, and visual hierarchy. The result looked completely different from the version I had already approved. I wanted better motion effects, not a full redesign. I had to revert everything using Cmd+Z because none of the changes matched what I asked for. What I learned is that prompts need tight scope. Instead of "upgrade the scroll animations and add parallax and alternating layouts and varied entry animations," I should have asked for one change at a time — "add parallax to images only" as one prompt, then "alternate the image position per entry" as a separate prompt. Keeping each prompt to one specific change prevents the AI from drifting into a full rewrite. This matches the "does more than you asked" failure mode from the course guide.

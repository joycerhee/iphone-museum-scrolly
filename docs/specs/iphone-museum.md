## Problem

We are building a scrollytelling exhibit page called **"The iPhone Evolution Museum"** to transform the existing template into a narrative museum experience. The goal is to showcase the iPhone’s journey from 2007 to 2025 in a way that feels immersive, clear, and inspiring—using clean, minimalist design anchored by motion-driven storytelling and social proof.

---

## Intended Outcome

- A single-page scrollytelling experience that feels like walking through a museum gallery.
- Each iPhone generation appears as a distinct era, entering view with elegant motion as the user scrolls.
- The page is visually minimal, white-space driven, with crisp typography and subtle product-focused imagery.
- Messaging is visionary and innovative, highlighting how each device shaped culture, adoption, and technology.
- Social proof is embedded through sales milestones, adoption statistics, and memorable cultural moments.
- The tone is polished and forward-looking, matching the Creator brand archetype.

---

## Scope

The page will include:

1. **Hero Intro**
   - Title: “The iPhone Evolution Museum”
   - Subtitle framing the story from 2007 to 2025
   - Anchor statement about 3+ billion iPhones sold and the cultural impact

2. **Timeline Gallery**
   - Sequential sections for major eras:
     - Original iPhone (2007)
     - iPhone 3G / 3GS era
     - iPhone 4 / 4S era
     - iPhone 5 / 5s / SE era
     - iPhone 6 / 6s era
     - iPhone X / iPhone 11 era
     - iPhone 12 / 13 / 14 era
     - iPhone 15 / 16 / 17 / Air era (2025)
   - Each section includes:
     - bold headline
     - short era narrative
     - key innovations
     - social proof metric or cultural moment
     - subtle motion reveal via framer-motion

3. **Museum Walk Experience**
   - Scroll-triggered reveal animations
   - Each era presented like a gallery display card
   - Smooth transitions between sections
   - Minimal visual anchors and progressive layering

4. **Social Proof Highlights**
   - Adoption stats and milestone callouts
   - “3 billion sold” emphasis
   - Culturally resonant moments like App Store launch, FaceTime, portrait photography, AR, and ecosystem expansion
   - Quotes or data points that reinforce adoption and influence

5. **Closing Reflection**
   - Summary of the iPhone’s creative legacy
   - A forward-facing note about ongoing innovation and the museum as a living story
   - Callout to deploy on GitHub Pages

---

## Out of Scope

- No rebuild of the entire site architecture or content repository
- No new backend or CMS integration
- No detailed multi-device layout beyond standard responsive support
- No interactive product configurator or e-commerce functionality
- No extensive branding redesign outside the minimalist Apple-inspired aesthetic
- No full redesign of unrelated pages or components

---

## Constraints

- Design Style: Minimalism with Apple-inspired clarity, clean white space, and sans-serif typography
- Brand Archetype: The Creator — visionary, innovative, future-oriented tone
- Cialdini Principle: Social Proof — emphasize adoption statistics and cultural moments
- Animation: Use framer-motion for scroll-based reveals
- Deployment: GitHub Pages

---

## Acceptance Criteria

- The page tells the iPhone story from 2007 through 2025 as a scroll-driven museum exhibit.
- Each era is represented with a separate section and enters view via motion animation.
- The design is minimal, white-space focused, and uses a sans-serif typographic system.
- Social proof appears clearly in at least 3 places via stats or cultural milestones.
- The tone is visionary and creative, aligned with the Creator archetype.
- The final page is deployable to GitHub Pages with no blocking issues.
- The page is responsive and readable on desktop and mobile.

---

## Verification

- Run the local dev build and preview the page in a browser
- Confirm scroll animations work and each era section appears sequentially
- Verify the social proof metrics are present and correct
- Confirm build passes with `npm run build` or equivalent
- Confirm GitHub Pages deployment command completes successfully and the page loads on the published URL
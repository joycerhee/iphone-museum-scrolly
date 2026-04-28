Reviewing existing sprint file and QA feedback to build a focused Sprint 0 plan.

Read [](file:///Users/joycerhee/iphone-museum-scrolly/docs/phases/sprint-0.md)

Searched for files matching `**/iphone-museum-qa.md`, 1 match

Read [](file:///Users/joycerhee/iphone-museum-scrolly/docs/specs/iphone-museum-qa.md)

Checking project dependencies and homepage implementation files before finalizing Sprint 0.

Read [](file:///Users/joycerhee/iphone-museum-scrolly/package.json)

Read [](file:///Users/joycerhee/iphone-museum-scrolly/src/app/page.tsx)

Read [](file:///Users/joycerhee/iphone-museum-scrolly/content/home.md)

## Sprint Goal

Create the homepage scrollytelling experience for **The iPhone Evolution Museum** with one separate section per major model from 2007 through 2025, using motion-driven reveal copy and verified social proof.

## Files in scope

- sprint-0.md
- iphone-museum.md
- home.md

## Tasks

1. Confirm `framer-motion` is installed and available in the repo before any animation work.
2. Update iphone-museum.md so the homepage requirement is explicit:
   - one section per major iPhone model/release
   - a minimal Apple-inspired layout
   - three or more social proof callouts with actual numeric values
   - explicit responsive breakpoints and deployment verification
3. Replace the existing homepage content in home.md with the iPhone museum narrative.
4. Author separate homepage sections for each major model from:
   - Original iPhone
   - iPhone 3G
   - iPhone 3GS
   - iPhone 4
   - iPhone 4S
   - iPhone 5
   - iPhone 5s
   - iPhone SE
   - iPhone 6
   - iPhone 6s
   - iPhone 7
   - iPhone 7 Plus
   - iPhone 8
   - iPhone X
   - iPhone XS
   - iPhone XR
   - iPhone 11
   - iPhone 12
   - iPhone 13
   - iPhone 14
   - iPhone 15
   - iPhone 16
   - iPhone 17 / Air (2025)
5. Ensure each model section includes:
   - a concise era headline
   - a creative innovation narrative
   - one key innovation
   - one social proof metric or cultural moment
6. Confirm homepage copy is scoped to the museum exhibit only and does not add unrelated pages or features.
7. Document the completion criteria and verification steps in sprint-0.md.

## Exit Checks

- `npm ls framer-motion`
- `npm run build`
- `npm run dev`
- Manual check: open `http://localhost:3000` and verify the homepage scrolls through each model section sequentially
- Manual check: verify at least 3 distinct numeric social proof callouts are visible on the homepage
- Manual check: verify the homepage renders cleanly at 320px, 768px, and 1440px widths

## Completion checklist

- [ ] sprint-0.md updated with Sprint 0 plan
- [ ] iphone-museum.md clarified for separate model entries and measurable acceptance
- [ ] home.md replaced with The iPhone Evolution Museum homepage content
- [ ] homepage includes every major model from 2007 to 2025 as separate sections
- [ ] framer-motion dependency confirmed before animation implementation
- [ ] homepage social proof includes at least 3 numeric callouts
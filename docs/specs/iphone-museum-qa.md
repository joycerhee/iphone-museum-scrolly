Reviewing the spec file for clarity, coverage, and testability.

Read [](file:///Users/joycerhee/iphone-museum-scrolly/docs/specs/iphone-museum.md)

## QA Audit: iphone-museum.md

### Issues Found

1. **Contradiction: “every generation” vs grouped eras**
   - The spec says “Each iPhone generation appears as a distinct era” but the scope groups multiple generations into era blocks like “iPhone 12 / 13 / 14 era” and “iPhone 15 / 16 / 17 / Air era”.
   - Suggestion: Clarify whether the page should cover every numbered release individually, or whether it should present grouped eras with representative milestones.

2. **Vague acceptance criteria: design style**
   - “The design is minimal, white-space focused, and uses a sans-serif typographic system” is subjective and hard to verify.
   - Suggestion: Replace with measurable design criteria such as “use one sans-serif font family”, “page background is predominantly white”, and “spacing follows a minimum 24px gap between major sections”.

3. **Vague acceptance criteria: tone**
   - “The tone is visionary and creative, aligned with the Creator archetype” is not objectively testable.
   - Suggestion: Define review criteria, e.g. “page copy includes at least one visionary statement per section” or “avoid product specs-heavy language in favor of narrative innovation language”.

4. **Vague acceptance criteria: deployable to GitHub Pages**
   - “Deployable to GitHub Pages with no blocking issues” is broad and not a concrete pass/fail item.
   - Suggestion: Make this specific, e.g. “site builds successfully and publishes to GitHub Pages using `npm run build && npm run deploy`”, or “GitHub Pages preview exists and loads without 404 errors”.

5. **Vague acceptance criteria: responsive/readable**
   - “The page is responsive and readable on desktop and mobile” lacks explicit breakpoints or readability thresholds.
   - Suggestion: Add specific viewport checks such as “works at 320px, 768px, and 1440px widths” and “text remains legible without horizontal scrolling”.

6. **Missing scope boundary: exact model coverage**
   - The project context says “every generation from original iPhone to iPhone 17/Air”, but the spec does not define whether SE and mid-cycle refresh models are included or excluded.
   - Suggestion: Define exact coverage, e.g. “include the original iPhone plus the following era groups; exclude every minor refresh unless it introduced a major innovation”.

7. **Unsupported assumption: framer-motion already available**
   - The spec requires “Use framer-motion for scroll-based reveals” without confirming the template or repo currently supports it.
   - Suggestion: Add an implementation note or check item: “confirm framer-motion is installed and compatible with the current template before design execution”.

8. **Scope mismatch: deployment note in content scope**
   - “Callout to deploy on GitHub Pages” is listed as part of page content scope, but deployment is a release action, not page content.
   - Suggestion: Move deployment requirements to a separate project/delivery checklist rather than content scope.

9. **Missing boundary: interactivity level**
   - The spec mentions “museum walk experience” and “scroll-triggered reveal animations” but does not define whether there are any interactive controls beyond scroll.
   - Suggestion: Explicitly state “no additional interactive widgets beyond scroll-triggered reveals” if that is intended.

10. **Missing acceptance criteria for social proof**
    - The spec says social proof should appear in at least 3 places, but the location, format, or minimum content is unspecified.
    - Suggestion: Make it specific, e.g. “include at least three distinct social proof callouts with numeric metrics or cultural milestone references”.

### Recommended Fixes

- Update the scope to explicitly state whether “eras” are grouped summaries or discrete generation entries.
- Replace subjective acceptance items with measurable criteria and review checkpoints.
- Define exact model coverage and confirm assumptions about tooling and deployment.
- Separate content requirements from deployment/delivery requirements.
- Add explicit responsive verification targets and social proof count/format rules.
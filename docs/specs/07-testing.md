# 07 — Testing

Two test surfaces. Both run in CI; both must pass before a PR merges.

## Unit — Vitest

- Runner: `vitest` with `environment: "jsdom"`.
- Setup: `tests/unit/setup.ts` imports `@testing-library/jest-dom/vitest`.
- Location: `tests/unit/**/*.test.ts(x)`.
- Command: `npm run test` (alias `vitest run`) and `npm run test:watch`.

### What we test (unit)

| Area | What | Why |
|---|---|---|
| `lib/content/schema.ts` | Valid + invalid frontmatter fixtures | Fail closed on bad content |
| `lib/content/parser.ts` | `splitMarkdownIntoSlides`, image-directive parsing | Parser is hard to debug in the browser |
| `lib/content/repository.ts` | File loading, missing slugs, malformed YAML | Build-time failure clarity |
| `lib/site-config.ts` | basePath URL helpers | Pages sub-path correctness |
| `components/markdown/*` (node-renderable bits) | Code-block → component dispatch | Visualization wiring |
| `components/ui/ContextualLink` | Internal vs external branching | Routing correctness |

### What we do NOT unit-test

- Motion components (`Reveal`, `PresentationSlide`) — jsdom has no layout or scroll; covered by E2E.
- Visual styling.
- Recharts/Mermaid output — library code.

## E2E — Playwright

- Runner: `@playwright/test`, Chromium only.
- Location: `tests/browser/**/*.spec.ts`.
- Base URL: built static site served locally via `npx serve out -l 4321` (Playwright `webServer` config).
- Command: `npm run test:e2e`.

### What we test (E2E)

| Spec | Assertion |
|---|---|
| `homepage.spec.ts` | `/` responds 200, title matches frontmatter, hero image visible, first section enters viewport after scroll |
| `standard-reveal.spec.ts` | A `<Reveal>` element starts with `opacity: 0` and reaches `opacity: 1` after scrolling past it |
| `presentation.spec.ts` | A presentation page has the expected number of slides; scroll to end hits the footer gate |
| `presentation-keyboard.spec.ts` | `ArrowDown` advances to next slide; `Home` returns to first |
| `reduced-motion.spec.ts` | With `prefers-reduced-motion: reduce` emulated, animated elements have no non-identity transform at rest |
| `links.spec.ts` | Internal links include basePath; external links have `target="_blank"` and `rel` |

### Patterns

- Use Playwright's `page.emulateMedia({ reducedMotion: "reduce" })` for accessibility tests.
- Use `page.evaluate(() => window.scrollTo(0, y))` rather than mouse wheel for deterministic scroll tests.
- Assert computed style via `page.$eval(selector, el => getComputedStyle(el).opacity)`.

## Fixtures

- `tests/__mocks__/content/` mirrors `content/` with tiny fixtures used by unit tests.
- `tests/fixtures/frontmatter.*.yml` for positive and negative schema cases.

## Coverage targets

- Unit: ≥ 90% statements on `src/lib/**`.
- E2E: one spec per user-facing flow listed above.

## CI integration

The deploy workflow ([08-deployment.md](./08-deployment.md)) runs `npm ci`, then:

```yaml
- run: npm run lint
- run: npm run test
- run: npm run build
- run: npm run test:e2e   # after build, against out/
```

All four must pass. Playwright uploads its HTML report as a workflow artifact on failure.

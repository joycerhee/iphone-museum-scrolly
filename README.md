# Scrolly

A statically-exported Next.js site that teaches **how to build a scrollytelling web experience** by being one.

Every concept it describes — sticky slides, scroll-linked animation, content schemas, static deploys — is demonstrated live by the page you're reading.

- **Live site:** https://kaw393939.github.io/scrollytelling_spec_driven/
- **Image library:** https://kaw393939.github.io/scrollytelling_spec_driven/images/
- **Repo:** https://github.com/kaw393939/scrollytelling_spec_driven
- **Stack:** Next.js 16 App Router (static export) · React 19 · TypeScript · framer-motion · Markdown + Zod · CSS Modules
- **Docs:** [`docs/specs/`](docs/specs/) (what to build) · [`docs/phases/`](docs/phases/) (how to build it)

---

## For students — use this repo for your assignment

You're welcome to **copy this project and use it as the starting point for your own scrollytelling assignment**.

### How to set it up

1. **Fork** this repo on GitHub (or click **Use this template** if the owner has enabled it), or clone it and push to a new repo of your own.
2. In your fork, go to **Settings → Pages → Build and deployment → Source** and pick **GitHub Actions**.
3. Push a commit to `main`. The included workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) will build and deploy to `https://<your-username>.github.io/<your-repo>/`.
4. Work through the phases in [docs/phases/](docs/phases/) — or write your own content on top of the scaffold.
5. Add your own images to `public/images/`; they will appear automatically on the `/images/` page of your site.

### How to submit

Edit the README in **your** fork and add your deployed site's URL at the top, for example:

```markdown
## My submission

- Live site: https://<your-username>.github.io/<your-repo>/
- Author: <your name>
```

Then share the link to your repo (and the live site) with your instructor. That's the submission.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000

npm run build      # static export → out/
npm run test       # unit tests (vitest)  — available from Phase 02
npm run test:e2e   # e2e tests (playwright) — available from Phase 04
```

Deploying to Pages is handled by [.github/workflows/deploy.yml](.github/workflows/deploy.yml); see [docs/specs/08-deployment.md](docs/specs/08-deployment.md).

---

## How this project is being built

This repo uses a deliberately structured, three-layer process designed to keep a human and an AI coding assistant aligned across long sessions. It is the reason a project this size can be built with an AI pair without the usual symptoms — hallucinated APIs, forgotten decisions, scope creep, over-eager "helpful" rewrites.

```
┌──────────────────────────────────────────────────────────────┐
│  docs/_references/     Reference implementation              │
│  (ground truth)        Real working code we port from        │
├──────────────────────────────────────────────────────────────┤
│  docs/specs/           Specification                         │
│  (what & why)          10 short files — one concern each     │
├──────────────────────────────────────────────────────────────┤
│  docs/phases/          Phased plan                           │
│  (how & when)          9 actionable checklists + STATUS      │
└──────────────────────────────────────────────────────────────┘
```

### Layer 1 — A reference implementation we can port from

Inside [docs/_references/bseai_degree/](docs/_references/bseai_degree/) lives a full-working sibling project that already ships the scrollytelling patterns we want. Every spec and phase file names **exact file paths** inside that reference when it says "port this." The AI never has to invent the shape of a `Reveal` component — it reads the working one first.

### Layer 2 — Small, orthogonal specs

[`docs/specs/`](docs/specs/) contains 10 short markdown files, one concern each: architecture, content model, motion system, design tokens, visualizations, testing, deploy, roadmap. Each is small enough to load into context in full; together they define the system. No spec depends on details in another; if it does, the link is explicit.

### Layer 3 — Phased implementation plan

[`docs/phases/`](docs/phases/) slices the work into 9 phases (00 scaffold → 08 content authoring). Each phase file has a **fixed template**:

- Frontmatter: `status`, `depends-on`, `qa-verified`
- **Objective** — 1–3 sentences
- **Spec references** — links to the spec sections it implements
- **Reference code to port** — a table mapping reference paths → target paths
- **Steps** — ordered checklist
- **Files created / modified** — explicit list
- **Exit checks** — commands or states that must hold before the phase is "done"
- **Completion notes** — filled in *after* execution; the plan learns

A live tracker at [docs/phases/STATUS.md](docs/phases/STATUS.md) shows which phases are pending, in progress, or done.

### Workflow

1. Before starting a phase, I **QA it** against the current codebase (re-read actual files, note drift, add a `qa-verified` date). See [00-scaffold.md](docs/phases/00-scaffold.md) for the canonical example.
2. Instruct: *"implement phase N."*
3. The agent reads the phase file, then the specs it references, then the reference-project files it lists — in that order.
4. Code is written, exit checks are run.
5. **Completion notes** are filled in on the phase file and `STATUS.md` is updated. Deviations from the plan live there so the next phase sees them.

---

## Why this matters: AI failure modes, and how this process addresses them

Large-language-model coding agents fail in predictable ways on sustained work. This repo is structured to make each failure mode hard to trigger.

### 1. Hallucination (inventing APIs that don't exist)

> *"Let me call `framer-motion`'s `useScrollAnimation` hook…"* — which doesn't exist.

**Mitigation:** every phase points at real, working reference code in `docs/_references/`. The AI is told *"port this file"* with an exact path, not *"write a scroll animation component."* When the reference says `useScroll` and `useTransform`, those are the APIs that get used — because it read them five seconds ago.

### 2. Context drift (forgetting early decisions)

> By step 7 of a long task, the palette the agent picked in step 2 has quietly mutated.

**Mitigation:** decisions are externalized into spec files before work starts. [specs/05-design-system.md](docs/specs/05-design-system.md) lists the exact CSS variable names; every later phase references it instead of re-deciding. The agent's working memory is the filesystem, not the chat history.

### 3. Over-eager completion (scope creep, "helpful" rewrites)

> Asked to add a button; the agent refactors three unrelated files, adds a state machine, and writes docstrings.

**Mitigation:** each phase has an explicit **Files created / modified** list and **Exit checks**. If a change isn't listed, it's out of scope for that phase. Cross-cutting concerns get their own phase (design tokens in 01, not sprinkled through 02–08).

### 4. Context-window exhaustion

> A 40k-line repo + a 4-page task brief blows the context window; the agent starts pattern-matching from its training data instead of the codebase.

**Mitigation:** small, orthogonal files. Every spec and phase file is under ~300 lines and self-contained. The phase template tells the agent exactly which few files to read, in what order.

### 5. Silent deviation (plan and reality diverge)

> The agent "completed" phase 3 but quietly skipped a step; phase 4 is now built on sand.

**Mitigation:** two structural checks.
- **Exit checks** are concrete commands (`npm run build`, `grep returns nothing`, `out/index.html exists`) — not vibes.
- **QA-before-implementation** (demonstrated in [00-scaffold.md](docs/phases/00-scaffold.md)) re-reads the actual files and compares them to what the plan claims. Drift is spotted before the next phase compounds it.

### 6. Lost institutional knowledge

> A decision made in session 1 ("we removed Tailwind because…") is invisible to session 5's agent.

**Mitigation:** **Completion notes** at the bottom of every phase file are mandatory. Deviations, palette picks, and follow-ups get written there. Session 5's agent reads them before starting its phase.

### 7. Premature optimization / bikeshedding

> Three hours spent perfecting a CSS reset nobody needs yet.

**Mitigation:** the phase roadmap is sequential and each phase has one purpose. Design tokens don't land until Phase 01; motion until Phase 04; content until Phase 08. The system keeps the agent on the current rung.

---

## My ideal process for AI-assisted software work

Distilled from what this repo is doing, generalized:

### 1. Write specs before code

Two short documents per concern: *what it is* and *why it exists*. Constraint, not suggestion. Read every session; updated when reality forces it.

### 2. Phase the work

Cut the project into phases small enough that one phase fits in a single focused session. Each phase has a **single purpose**, an **explicit file list**, and **runnable exit checks**. Phases depend on earlier phases, never on later ones.

### 3. Find or build a reference

Before asking an AI to invent, give it something to port. It could be an open-source project, an earlier version of your system, or a throwaway spike. Grounding in real code is the single most effective hallucination antidote available.

### 4. Externalize memory

Treat the filesystem as the agent's long-term memory. `STATUS.md`, `Completion notes`, `qa-verified` dates in frontmatter. If it's important, it must survive the chat buffer.

### 5. QA the plan, not just the code

Before implementing a phase, re-read the actual repository and update the phase file to match reality. Five minutes of QA prevents an hour of compounding drift.

### 6. Run exit checks literally

Every phase ends with commands whose output is unambiguous. *"Build succeeds"* is not a check; `npm run build && test -f out/index.html` is. The agent runs them; you verify them.

### 7. Record deviations, don't hide them

Completion notes are non-negotiable. If a phase ran differently than planned (better technique found, library unavailable, scope cut), the file gets updated. The next phase inherits the truth.

### 8. Keep files small and orthogonal

One concern per file, under ~300 lines, self-contained. This makes retrieval, diffing, and reasoning all cheaper — for humans and for the AI.

### 9. Give each phase a commit boundary

One phase, one PR (or coherent commit set). Rollback becomes trivial; history becomes readable.

### 10. Trust but verify

The AI is fast and occasionally confident about things that are wrong. The process above makes its output inspectable: every claim ties to a spec, every file change ties to a phase, every phase ties to an exit check.

---

## Project layout

```
scrolly/
├── .github/workflows/deploy.yml   # GitHub Pages CI
├── docs/
│   ├── _references/bseai_degree/  # reference implementation (ground truth)
│   ├── specs/                     # 00–09 specs + README
│   └── phases/                    # 00–08 phases + README + STATUS
├── public/images/                 # assets (seeded from reference)
├── src/app/                       # App Router entry points
│   ├── layout.tsx, page.tsx, globals.css
│   └── [...slug]/page.tsx         # dynamic content routes (Phase 02)
├── src/components/                # motion/, layouts/, markdown/, ui/, visualization/ (Phases 01–06)
├── src/lib/                       # content/, site-config.ts (Phases 01–02)
├── content/                       # markdown sources (Phase 02)
├── tests/                         # unit (Phase 02) + browser (Phase 04)
├── next.config.ts                 # static export + basePath for Pages
├── package.json
└── tsconfig.json
```

## Current status

See [docs/phases/STATUS.md](docs/phases/STATUS.md). At the time of writing, Phase 00 (scaffold) is done; Phase 01 (design system) is next.

## How to contribute / continue the build

1. Read [docs/phases/README.md](docs/phases/README.md).
2. Look at `STATUS.md` to see the next pending phase.
3. Say **"implement phase N"** to your AI pair, or do it by hand.
4. Run the phase's exit checks.
5. Fill in the Completion notes. Update `STATUS.md`.
6. Commit. Repeat.

## License

TBD.


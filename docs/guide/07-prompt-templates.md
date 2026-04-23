---
title: Prompt Templates — The Control Loop
audience: students
last-reviewed: 2026-04-23
---

# Prompt Templates

Copy-pasteable versions of the seven prompts that make up [the control loop](03-working-with-ai.md#the-control-loop). Fill in the bracketed parts. Run them in order.

> These are starting points, not magic words. Edit freely. The point is the *shape* of the prompt, not the exact wording.

---

## Planning loop (wide → narrow)

### 1. Harvest

> Go look at this codebase and tell me all the good ideas that you can find in the code. Focus on [area: e.g. the layout system / the build pipeline / how content is loaded]. Do not propose changes yet — just list what is already there and what is working.

**Mode:** wide spray. You are making a menu.

### 2. Converge

> Let's discuss these ideas. Rank them by [criterion: e.g. student impact / effort to ship / how much they reinforce the course concepts]. Which two or three should we actually do in this part of the project, and which should we defer? Write the agreed scope as a single paragraph.

**Mode:** narrowing. End with one paragraph you can defend.

### 3. Specify

> Go into `docs/specs/` and create as many specs as you feel we need to cover the scope we just agreed on. Each spec should have: a one-line purpose, a short "what done looks like" section, and any constraints or non-goals. Keep them small — one concern per file.

**Mode:** narrow. Meaning goes into files, not chat.

### 4. Phase

> Review the specs in `docs/specs/` and plan phases in `docs/phases/` so that at the end of this process we will have addressed 100% of the specs we defined. Each phase should: name the specs it covers, list concrete objectives, and define a runnable exit check for each objective. Flag any spec that no phase covers.

**Mode:** narrow. Coverage is an explicit target — gaps here become bugs later.

---

## Execution loop (per phase: before → during → after)

### 5. Pre-flight QA

> QA `docs/phases/NN-name.md` and update it with any relevant information from the current codebase to prepare it for implementation. Check that: file paths still exist, referenced specs still say what the phase claims, dependencies are installed, and the exit checks are actually runnable as written. Report what you changed and why.

**Mode:** narrow, read-only first. Reconcile the plan with reality before executing.

### 6. Implement

> Execute phase `NN-name.md`. Work one objective at a time. Do not touch files outside the phase's stated scope. Do not skip the exit check for an objective before moving to the next. If you hit something the phase did not anticipate, stop and ask.

**Mode:** narrow jet. Thumb pressed down.

### 7. Exit QA

> QA phase `NN-name.md` to ensure that 100% of the phase objectives are met. For each objective, run its exit check and report pass or fail. Do not mark the phase complete if any check fails. If a check fails, suggest whether we loop back to step 5 (re-plan), step 6 (keep implementing), or an earlier planning step.

**Mode:** narrow. Pass/fail only. No vibes.

---

## If step 7 fails

You do not move on. You loop back:

- **Objective failed but plan was right** → back to step 6.
- **Plan no longer matches reality** → back to step 5.
- **Spec itself is wrong** → back to step 3, then 4, then 5.

Write down which loopback you did, and why, in the phase file. That note is how future-you (and future AI sessions) avoid re-learning it.

## Keep reading

- The theory behind these prompts: [03-working-with-ai.md](03-working-with-ai.md)
- Glossary: [05-glossary.md](05-glossary.md)

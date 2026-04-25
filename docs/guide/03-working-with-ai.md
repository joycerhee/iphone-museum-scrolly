# AI-Augmented Software Engineering: Process + Rationale

> This document defines the process you are using in this course and explains why it works.
> You should be able to both **execute this process** and **defend it using research-backed reasoning**.

---

# 1. The Core Claim

The central idea of this course is:

> **AI coding success is determined more by process than by prompting.**

Recent empirical research on coding agents shows:

* performance is driven by **behavioral patterns (trajectories)**, not just outputs
* failure modes are **systematic**, not random
* correctness depends on **validation and context**, not fluency
* architectural reasoning is a major limiting factor

This leads to the working principle:

```text
AI generates code.
Humans define intent, constraints, and verification.
```

---

# 2. The Process (Operational Form)

You are using the following loop:

```text
Collect → Decide → Spec → QA → Ground → Phase → QA → Implement → QA → Update → Repeat
```

Expanded:

---

## Step 0 — Collect (Context Acquisition)

Gather:

* existing codebases
* working examples
* documentation
* patterns

This forms a **context pack**.

### Why this matters

Research shows agents fail when forced to **invent missing information**.
Providing real references reduces hallucination and improves consistency.

---

## Step 1 — Decide (Intent Formation)

Use a reasoning-capable model to:

* explore approaches
* compare options
* define scope
* clarify intent

Output:

```text
clear problem definition
clear constraints
clear success criteria
```

### Why this matters

Agents fail when tasks are underspecified or ambiguous.
Intent formation reduces **goal drift** and misalignment.

---

## Step 2 — Spec (Formal Requirements)

Convert intent into structured specifications.

Each spec must include:

```text
positive cases
negative cases
edge cases
```

### Why this matters

Research shows:

* agents cannot reliably infer correctness
* lack of validation criteria leads to incorrect outputs that appear plausible

Specs create an **explicit correctness oracle**.

---

## Step 3 — QA the Specs (Pre-Execution Validation)

Before writing code:

* review the specs
* identify missing cases
* validate assumptions

### Why this matters

Agents frequently solve the **wrong problem correctly**.
Spec QA reduces **semantic error before implementation**.

---

## Step 4 — Ground in Code (Context Alignment)

Map specs to:

* actual project files
* real implementations
* known patterns

Create phases that are:

```text
code-aware
scope-limited
implementation-ready
```

### Why this matters

Research shows:

* agents often locate correct files but fix the **wrong abstraction layer**
* success requires alignment between **intent and architecture**

This step enforces that alignment.

---

## Step 5 — Phase QA (Pre-Execution Check)

Before implementing a phase:

* verify relevance to current codebase
* confirm scope is correct
* validate assumptions

### Why this matters

Prevents:

```text
plan drift
invalid assumptions
context mismatch
```

---

## Step 6 — Implement (Constrained Execution)

Use a coding agent with:

* narrow scope
* explicit constraints
* grounded references

### Key constraint:

```text
No edit before diagnosis
```

### Why this matters

Research shows:

* early editing strongly correlates with failure
* successful agents perform **context gathering before modification**

---

## Step 7 — QA the Code (Verification)

After implementation:

Validate using:

```text
build success
tests passing
functional correctness
```

### Why this matters

Research shows:

* validation effort is a strong predictor of success
* agents frequently produce plausible but incorrect outputs

This step converts “looks right” into **provable correctness**.

---

## Step 8 — Update the Next Phase (Learning Step)

After QA:

* analyze outcomes
* capture deviations
* update upcoming phases

This includes:

```text
correcting assumptions
refining constraints
adjusting scope
```

### Why this matters

Research shows:

* agent failures occur in patterns (trajectory-based)
* systems do not improve without feedback

This step introduces **stateful learning into a stateless system**.

---

## Step 9 — Repeat

Continue the loop:

```text
next phase → same process
```

---

# 3. The Underlying System

This process can be modeled as:

```text
INPUT:
  references + research + intent

CONTROL:
  specs + phases + constraints

EXECUTION:
  coding agent

VERIFICATION:
  QA + tests

LEARNING:
  phase updates

LOOP:
  iterative refinement
```

This is a **supervised AI system**, not ad hoc usage.

---

# 4. Mapping to Research Findings

This process directly aligns with empirical findings:

---

## A. Trajectory Shape (Majgaonkar et al.)

Finding:

> Successful runs prioritize context gathering and validation over early editing.

Mapping:

```text
Spec → QA → Phase QA → THEN Implement
```

Prevents premature editing.

---

## B. Architectural Reasoning Gap (Mehtiyev & Assunção)

Finding:

> Agents often fix the wrong abstraction layer despite locating the correct file.

Mapping:

```text
Ground in Code + Layer Classification
```

Forces architectural alignment.

---

## C. Review Burden (Ehsani et al.)

Finding:

> Many agent-generated changes fail due to size, complexity, or lack of reviewability.

Mapping:

```text
phases → small scope → QA → controlled changes
```

Reduces unreviewable work.

---

## D. Framework vs Model (Zhang & Tan)

Finding:

> Model capability dominates framework and prompt design.

Mapping:

```text
process focuses on control, not prompt optimization
```

Ensures robustness across models.

---

# 5. Key Principles

From both practice and research:

---

## 1. No Edit Before Diagnosis

Editing without understanding leads to failure.

---

## 2. Context Before Action

Provide:

```text
code
references
constraints
```

before execution.

---

## 3. Validation is Mandatory

Correctness must be:

```text
measured, not assumed
```

---

## 4. Small Phases Win

Large, unbounded tasks produce:

```text
drift
complexity
review failure
```

---

## 5. Learning Must Be Externalized

AI does not learn between runs.

Your system must:

```text
capture → update → carry forward
```

---

# 6. What You Should Be Able to Say

You should be able to explain your process like this:

> “We use a spec-driven, phase-based workflow for AI coding.
> We begin with external context and intent formation, formalize requirements with explicit validation cases, and ground them in the actual codebase.
> Each phase is QA’d before and after implementation, and the results are used to update subsequent phases.
>
> This aligns with recent research showing that AI coding success depends on context gathering, delayed editing, validation effort, and correct architectural reasoning, rather than prompt quality alone.”

---

# 7. Final Statement

> This is not prompt engineering.

> This is a **controlled, iterative system for supervising AI to produce reliable software**.

---

# One-line summary

```text
Collect → Decide → Spec → QA → Ground → Phase → QA → Implement → QA → Update → Repeat
```

---

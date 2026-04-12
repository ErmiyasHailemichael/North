# UX/UI Design Progress Update — Spring 2026

---

## Table of Contents
- [Project Overview](#project-overview)
- [My Role](#my-role)
- [Research Findings & Persona](#research-findings--persona)
- [Information Architecture & User Flows](#information-architecture--user-flows)
- [Wireframes](#wireframes)
- [Visual Design System](#visual-design-system)
- [Prototype & Video Walkthrough](#prototype--video-walkthrough)
- [Challenges & Iterations](#challenges--iterations)
- [Key Learnings](#key-learnings)
- [What's Next](#whats-next)

---

## Project Overview

**Course Planner** is a mobile app designed to help students overcome planning paralysis — the frustrating gap between knowing what's due and actually starting. It's not a calendar app or a to-do list. It's built specifically for students who are already aware of their deadlines but struggle to translate that awareness into action.

The problem came into focus through research: students don't lack planning tools. They lack motivation structures and deal with fragmented, inconsistent communication from professors. That insight reframed the entire design — from "how do we help students organize tasks" to "how do we reduce the friction between knowing and doing."

---

## My Role

Sole UX/UI designer across all phases — user research, synthesis, information architecture, wireframing, visual design system, component library, and high-fidelity mockups.

---

## Research Findings & Persona

### What the Research Revealed

My initial assumption was that students needed a better way to organize their coursework. Interviews and surveys challenged that immediately. Key findings:

- Students already use multiple tools (Canvas, Google Calendar, Notes apps) — the problem isn't access to planning tools
- The real barrier is **motivation and activation energy** — starting a task feels harder than the task itself
- Professor communication is inconsistent and scattered across email, Canvas announcements, and in-class verbal updates — students spend real cognitive load just tracking *what* is actually due
- Anxiety around large assignments causes avoidance, not action

### Primary Persona: David Chen — "The Aware Procrastinator"

| | |
|---|---|
| **Age** | 20 |
| **Major** | Computer Science |
| **Situation** | Knows exactly what's due. Rarely starts on time. |
| **Frustration** | Has the tools, knows the deadlines, still feels stuck |
| **Goal** | Not just to be organized — to feel like starting is possible |

David shaped every design decision. The app isn't built for students who forget deadlines — it's built for students who remember them and still don't act. That distinction drove the UX toward motivation scaffolding over pure task management.

---

## Information Architecture & User Flows

Built in FigJam. The sitemap and user flows were designed around two core jobs:
1. **Reducing decision fatigue at the moment of opening the app** — the dashboard surfaces what matters now, not everything at once
2. **Making "starting" the primary action** — task detail screens are designed to make the first step obvious and small

User flows mapped both the happy path and the failure states — moments where students typically disengage (e.g., seeing an overwhelming list, unclear next step, missing professor context).

> 📎 *FigJam file link*

---

## Wireframes

Lo-fi wireframes focused on layout and hierarchy before any visual decisions were made. Key screens:

- **Dashboard** — prioritized view showing today's tasks, upcoming deadlines, and a single prominent CTA to start the most urgent item
- **Task Detail** — broke large assignments into smaller steps; included professor communication context directly in the task view
- **Course Overview** — aggregated all assignments by course, with status indicators
- **Onboarding** — minimal, focused on connecting Canvas and setting a weekly check-in cadence

Wireframes went through iteration based on the core insight: every screen should answer "what do I do next" without requiring the user to think hard about it.

> 📎 *Figma wireframes link*

---

## Visual Design System

### Design Decisions & Rationale

The visual system was built to feel calm and focused — the opposite of the anxiety the app is trying to address. Every decision was intentional:

**Color**

| Token | Value | Rationale |
|---|---|---|
| Primary | `#2563EB` | Trustworthy, action-oriented blue — signals clarity without urgency |
| Background | `#F8FAFC` | Soft off-white — reduces eye strain for extended use |
| Surface | `#FFFFFF` | Clean card backgrounds, maintains hierarchy |
| Heading | `#0F172A` | Near-black for strong contrast and readability |
| Body | `#475569` | Muted slate — readable without competing with primary actions |

Light mode only. Dark mode was intentionally excluded — the app targets a use case (task initiation) where high contrast and clarity matter more than low-light comfort.

**Typography**

- **Typeface:** Inter — chosen for its legibility at small sizes on mobile and its neutral, professional tone
- **Scale:** Defined a clear heading/subheading/body/caption hierarchy to guide the eye without decoration
- **Weight:** Used weight contrast (semibold vs. regular) over color contrast to establish hierarchy — more accessible, more scalable

**Components**

All components built with Figma variables (not hard-coded values) — a requirement instructors specifically evaluate. This means the system is:
- Themeable by changing token values, not hunting through individual components
- Consistent by default — no one-off color or spacing decisions
- Handoff-ready — variable names map directly to what a developer would implement

Key components built: primary/secondary buttons, input fields, task cards, course tags, progress indicators, navigation bar, empty states, and error states.

> 📎 *Figma design system file link*

---

## Prototype & Video Walkthrough

Prototype linking in Figma was deprioritized due to time constraints — a deliberate tradeoff, not an oversight. The video walkthrough was prioritized as the primary submission deliverable, narrating the design decisions and user flow in context.

> 📎 *Video walkthrough link*

---

## Challenges & Iterations

**Research invalidated the original premise**
The first version of the problem statement assumed students needed better task organization. Research killed that framing early. Reorienting around motivation rather than organization added time but produced a much more focused design — and made every subsequent decision easier because the "why" was clearer.

**Designing for failure states, not just the happy path**
The biggest UX challenge wasn't designing what happens when everything works — it was designing what happens when a student opens the app and feels overwhelmed. Empty states, overdue task views, and "nothing due today" screens all needed as much care as the primary flows. Failure states are where the app either earns trust or loses it.

**Figma variables vs. hard-coded values**
Early component work used hard-coded hex values. Rebuilding with a proper variable structure took time mid-process but was the right call — the system is now consistent and maintainable in a way it wasn't before.

**Prototype timing tradeoff**
With a hard deadline, interactive prototype linking was cut in favor of completing and polishing the hi-fi screens. The video walkthrough communicated the intended flow effectively. Given more time, click-through prototyping would be the next step.

---

## Key Learnings

- **Research should challenge your assumptions, not confirm them.** The pivot from organization tool to motivation scaffold only happened because the research was taken seriously.
- **Variables over hard-coded values** separates a design system from a collection of screens. It's not extra work — it's the work.
- **Designing failure states is designing the product.** The moments where users are most likely to disengage are the moments that matter most.
- **Mobile-first is a philosophy; responsive design is a technical implementation.** Understanding the difference matters in interviews and in practice.
- **Speed under deadline is a real skill.** Knowing what to cut, what to finish, and what to defer is something you only develop by working under real constraints.

---

## What's Next

Usability testing, advanced prototyping, and developer handoff. The transition from designing screens to handing them off in a way developers can actually build from — with proper specs, component documentation, and interaction notes — is the next frontier.
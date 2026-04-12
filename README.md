# North

# Progress Update — NSC Dev Expo Site (Weeks 6–10)

**Program:** Application Development BAS — North Seattle College  
**Course:** AD311 — Intermediate Development 1  
**Date:** March 2026

---

## Project Overview

The **NSC Dev Expo Site** is a mobile app built with **React Native**, **Expo Router**, 
and **TypeScript** that showcases North Seattle College's Application Development 
program. The app surfaces faculty profiles, student projects, and event information 
for prospective students, current students, and the broader community.

It's a real collaborative open-source project maintained entirely by students in the 
AD311 practicum — meaning real PRs, real code reviews, real merge conflicts, and real 
deadlines. The team follows a sprint-based workflow with GitHub Issues, pull requests, 
and Figma design specs driving development.

**Repo:** [NSC-Dev-Expo-Site](https://github.com/SeattleColleges/NSC-Dev-Expo-Site)

---

## My Role

I was assigned to **Issue #10 — Facility Info Section**, responsible for designing 
and building the faculty and staff display page from scratch, using the Figma design 
spec as the target. This included creating a reusable component, building the page 
layout, handling data, and iterating through the PR review process.

---

## Work Progress

**Pull Request:** [PR #59 — feature/facility-info-section](https://github.com/SeattleColleges/NSC-Dev-Expo-Site/pull/59)

### FacultyCard Component (`components/FacultyCard.tsx`)

Built a reusable `FacultyCard` component that displays an individual faculty or staff 
member. Key decisions made during implementation:

- Used a TypeScript **`interface`** (not `type`) for props — the team convention in 
  this codebase:
```ts
  interface FacultyCardProps {
    name: string;
    department: string;
    description: string;
    phone?: string;
    email?: string;
    imageUrl?: string;
    profileLink: string;
    profileLinkLabel: string;
  }
```
- Made `phone`, `email`, and `imageUrl` **optional props** so the card renders 
  gracefully with incomplete data — uses conditional rendering (`{phone && <Text>...`)
- Used **`Pressable`** instead of `Link` for the profile button — this is the correct 
  React Native pattern for interactive elements vs. `Link` which is for navigation routes
- Fallback image via `placecats.com` when `imageUrl` is undefined:
```ts
  source={{ uri: imageUrl || 'https://placecats.com/200/200' }}
```
- Card layout uses `flexDirection: 'column'` and `alignItems: 'center'` so image 
  stacks on top of text correctly on both mobile and desktop (web) views

### Faculty Page (`app/(pages)/faculty.tsx`)

Built the full faculty page with two sections — Faculty and Staff — each rendering 
a grid of `FacultyCard` components from a data array:

- Implemented a **2-column grid layout** using:
```ts
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  }
```
  Each card uses `width: '48%'` to fit two per row with a gap between them.
- Organized `facultyData` and `staffData` arrays at the bottom of the file for 
  readability, keeping the component logic clean at the top
- Added "See All Faculty" and "See All Staff" links beneath each section
- Wrapped content in `ScrollView` for mobile scrolling

### Scope & Cleanup

- **Removed `Footer` component** after reviewer feedback — it wasn't part of Issue #10 
  and added unnecessary complexity to the PR. Learned to keep PRs tightly scoped.
- Replied to and resolved all inline reviewer comments on the PR before requesting 
  re-review

### PR Reviews I Completed

**PR #78 — Font Files** ([link](https://github.com/SeattleColleges/NSC-Dev-Expo-Site/pull/78))  
Reviewed `NSC-Dev-Expo-Site_40_Font-Files` by `Eveybushell`. Tested the branch 
locally — app ran without errors. Left feedback noting that no component using Inter 
or Roboto fonts was included on the index page, making visual verification difficult. 
Also flagged version mismatches for `expo-font` and `expo-splash-screen` in terminal 
output. Learned that font loading in Expo is handled globally via `_layout.tsx` using 
the `useFonts` hook.

**PR #75 — Storybook Docs** ([link](https://github.com/SeattleColleges/NSC-Dev-Expo-Site/pull/75))  
Reviewed `NSC-Dev-Expo-Site_46_add-storybook-docs` by `olympusmons1256`. 
Documentation-only PR adding a `STORYBOOK_GUIDE.md` and linking it in the README. 
The guide was clear and well-structured. Left feedback suggesting a note about 
Storybook configuration differences between React Native/Expo and standard React web 
setups. Learned that Storybook is a tool for building and testing UI components in 
isolation — useful for design systems and component libraries.

---

## Challenges & Solutions

### 1. Merge Conflict in `_layout.tsx`

When I ran `git pull origin main --rebase`, two branches had modified `_layout.tsx` 
at the same time, triggering a conflict:
```
CONFLICT (content): Merge conflict in src/app/(pages)/_layout.tsx
error: could not apply 14f878e... feat: add FacultyCard component and faculty page
```

I resolved it by opening the file, identifying the conflict markers (`<<<<<<<`, 
`=======`, `>>>>>>>`), and manually merging both sets of changes — preserving the 
Navbar import and adding the faculty route without losing what came in from `main`. 
Then ran `git add` and `git rebase --continue` to finish. It was my first time 
resolving a rebase conflict and it was a good lesson in reading what each side of 
the conflict actually contains before deciding what to keep.

### 2. Single-Column Layout Not Rendering as Grid

After adding `flexDirection: 'row'` and `flexWrap: 'wrap'` to the `gridWrapper`, 
the mobile view was showing a 2-column grid correctly but the desktop (web) view had 
the card image floating to the right of the text. The fix was adding 
`flexDirection: 'column'` explicitly to the card's own style — without it, React 
Native was inheriting flex direction from the parent wrapper and the inner card layout 
broke on wider screens.

### 3. Scope Creep — Footer Component

I included a `Footer` component in my initial PR because it felt like a natural part 
of the page. A reviewer flagged it as out of scope since Issue #10 only asked for the 
facility info section. Removed it and updated the PR. The takeaway: even if something 
seems helpful, it shouldn't go into a PR if it isn't part of the assigned issue — it 
makes reviews harder and muddies the commit history.

### 4. Component Ownership Question

Reviewer **SUPER444E** flagged that the `FacultyCard` design closely matched Figma 
screens that might belong to a different issue (possibly the About page). Rather than 
making an assumption, I left a comment on the PR tagging **@IsaacJrTypes** and **@BC** 
to clarify whether my work fits Issue #10 or should be re-linked. Still awaiting 
confirmation — a good reminder that ambiguity should be surfaced, not silently resolved.

---

## Key Learnings

**TypeScript `interface` vs `type`**  
Before this project I used them interchangeably, but learned that `interface` is 
preferred for object shapes (like component props) in TypeScript — it's more 
extensible and aligns with the team's conventions in this codebase.

**`Pressable` vs `Link` in React Native**  
`Link` from `expo-router` is for route-based navigation. `Pressable` is the correct 
component for generic interactive elements — buttons, tappable cards, etc. Using `Link` 
incorrectly caused styling and behavior issues that `Pressable` fixed cleanly.

**Git Rebase vs Merge**  
This project uses rebase to keep a clean commit history. Working through my first 
rebase conflict manually — rather than just accepting one side — gave me a much better 
understanding of what rebase is actually doing and why conflicts happen.

**Scope Discipline in PRs**  
A pull request should only contain what the assigned issue asks for. Extras — even 
useful ones — should go in separate issues. This keeps reviews focused and the project 
history readable.

**Communication on PRs is Part of the Work**  
Leaving clear comments, responding to reviewer feedback, and tagging the right people 
for unresolved questions is just as important as the code itself. Open communication 
keeps the team unblocked.

---

## Tech Stack

- React Native + Expo Router
- TypeScript
- Git / GitHub (branch-based workflow, PRs, code review)
- Figma (design specs)
- Node.js / NVM (Node 20 required for Vite 7+ compatibility)

---


A collection of solutions for each week

- [Week 2](Week_2/)
- [Week 3](Week_3/)
- [Week 4](week_4/)
- [Week 5](Week_5/)
- [week 6](week_6)
- [week 7](week_7)




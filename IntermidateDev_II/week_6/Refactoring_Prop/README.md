# Context Refactor App

**Course:** Intermediate Development II
**Assignment:** Refactoring Prop Drilling to Context

## Overview

This project demonstrates refactoring "prop drilling" to use the React Context API and the `useContext` hook.

**Before (prop drilling):**
```
App → passes user → Dashboard → passes user → Sidebar → passes user → UserProfile
```
Dashboard and Sidebar received `user` as a prop even though neither component used it.

**After (Context API):**
```
App (UserProvider wraps everything)
  └── Dashboard        ← no user prop
        └── Sidebar    ← no user prop
              └── UserProfile ← reads user directly from context
```

## Features

- `UserContext.jsx` — creates the context and exports a `UserProvider` with shared `user` state
- `Navbar` — consumes context to display the logged-in user's name
- `Dashboard` → `Sidebar` → `UserProfile` — middle components pass **zero** user props; UserProfile reads directly from context
- `UserEditor` — live form to update name, email, and theme; all subscribed components re-render instantly

## Component Tree

```
App (wrapped in UserProvider)
├── Navbar         → useContext → displays user.name
├── Dashboard      → no user props
│   └── Sidebar    → no user props
│       └── UserProfile → useContext → displays user.name, email, themePreference
└── UserEditor     → useContext → updates user via updateUser()
```

## Setup & Running

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Test Cases

### Normal Cases
1. **Profile displays correctly** — On load, UserProfile shows the default name, email, and theme preference pulled from context (no props passed).
2. **Navbar syncs with context** — Updating the name in UserEditor immediately updates the Navbar too.
3. **Theme toggle works** — Clicking "Toggle Theme" switches themePreference and UserProfile reflects the change.

### Edge Cases
1. **Empty name rejected** — Submitting an empty name shows an error; context is not updated.
2. **Empty email rejected** — Submitting an empty email shows an error; context is not updated.
3. **Invalid email format** — An email without "@" is rejected with a descriptive error.
4. **Reset restores defaults** — After making changes, clicking Reset restores the original default user.
5. **Multiple rapid updates** — Rapidly toggling the theme always reflects the correct final state across all components.
6. **Whitespace-only name** — A name that is only spaces is trimmed and rejected as empty.

## Key Concepts Demonstrated

- `createContext()` — creates the context object
- `Context.Provider` — makes the value available to the entire subtree
- `useContext()` — reads the nearest Provider's value without prop drilling
- Pairing context with `useState` — allows both reading and updating shared state from any component

## Demo 
- [Demo ](https://youtu.be/LcDWSh73YM0)
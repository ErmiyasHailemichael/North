# Recipe Gallery — React Router App

A multi-page recipe browsing application built with React Router v7 (Remix framework mode). Users can browse a gallery of recipes and view individual recipe detail pages using client-side navigation.

---

## Features

- Home dashboard with a call-to-action to browse recipes
- Full recipe gallery displaying all recipes in a responsive grid
- Individual recipe detail pages with ingredients and cooking instructions
- Global navigation bar with active link highlighting
- Client-side routing with no full page reloads

---

## Route Structure

| Route | File | Description |
|-------|------|-------------|
| `/` | `routes/home.tsx` | Welcome/home page |
| `/gallery` | `routes/gallery.tsx` | Full recipe grid |
| `/recipe/:id` | `routes/recipe.$id.tsx` | Individual recipe detail |

---

## Tech Stack

- React Router v7 (Framework Mode)
- Vite
- TypeScript / JSX

---

## Setup & Running

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## Project Structure

```
recipe-router-app/
├── app/
│   ├── data/
│   │   └── recipes.js          # Shared recipe data
│   ├── routes/
│   │   ├── home.tsx            # Home page
│   │   ├── gallery.tsx         # Recipe gallery
│   │   └── recipe.$id.tsx      # Recipe detail page
│   ├── root.tsx                # Global layout and navbar
│   └── routes.ts               # Route configuration
├── package.json
└── README.md
```

---

## Test Cases

### Normal Cases

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Navigate to gallery | Click "Gallery" in navbar | All 6 recipe cards render |
| View recipe detail | Click any recipe card | Detail page shows image, title, ingredients |
| Navigate back | Click "← Back to Gallery" | Returns to gallery page |

### Edge Cases

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Invalid recipe ID | Visit `/recipe/999` | "Recipe not found" message displays |
| Direct URL access | Visit `/gallery` directly in browser | Gallery loads without error |
| Home active state | Visit `/` | Home link highlights orange in navbar |

---

## Concepts Demonstrated

- **File-based routing** — routes defined in `routes.ts` and mapped to files in `app/routes/`
- **Dynamic routes** — `recipe.$id.tsx` uses `:id` param extracted with `useParams`
- **`<Link>` and `<NavLink>`** — client-side navigation without page reloads
- **`<Outlet />`** — child routes render inside the root layout
- **Active link styling** — `NavLink` highlights the current page in the navbar

## Video
- [Demo](https://youtu.be/9dML87PirVk)
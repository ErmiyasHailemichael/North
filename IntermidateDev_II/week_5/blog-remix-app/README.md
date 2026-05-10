# Blog App — React Router Multi-Page Layout

A multi-page blog application built with React Router v7 (Remix framework mode). Users can browse a home feed of blog posts, read individual post detail pages, and visit an About page — all with client-side navigation and a persistent navbar.

---

## Features

- Home feed displaying all blog post titles and previews
- Individual post detail pages with full content
- About page describing the blog
- Persistent navigation bar with active link highlighting
- Programmatic navigation using `useNavigate` for the "Return to Feed" button
- "Post not found" handling for invalid post IDs

---

## Route Structure

| Route | File | Description |
|-------|------|-------------|
| `/` | `routes/home.tsx` | Blog feed — list of all posts |
| `/about` | `routes/about.tsx` | About page |
| `/post/:postId` | `routes/post.$postId.tsx` | Individual post detail |

---

## Tech Stack

- React Router v7 (Framework Mode)
- Vite
- TypeScript

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
blog-remix-app/
├── app/
│   ├── data/
│   │   └── posts.ts              # Shared blog post data
│   ├── routes/
│   │   ├── home.tsx              # Home feed
│   │   ├── about.tsx             # About page
│   │   └── post.$postId.tsx      # Post detail page
│   ├── root.tsx                  # Global layout and navbar
│   └── routes.ts                 # Route configuration
├── tests/
│   └── blog.spec.js              # Playwright test suite
├── package.json
└── README.md
```

---

## Test Cases

### Normal Cases

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Home page loads | Visit `/` | Blog Feed heading and 3 posts visible |
| All posts visible | Visit `/` | React Router Tips, State Management, The Future of Web all render |
| Click post | Click any post title | Navigates to `/post/:id` with full content |
| Post detail content | Visit `/post/2` | State Management heading and full content visible |
| Return to feed | Click "← Return to Feed" | Navigates back to `/` |
| About page loads | Visit `/about` | About This Blog heading visible |

### Edge Cases

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Invalid post ID | Visit `/post/99` | "Post not found" message displays |
| Return to feed from not found | Click "Return to Feed" on 404 page | Navigates back to `/` |
| Navbar on all pages | Visit `/`, `/about`, `/post/1` | Home and About links always visible |
| Direct URL access | Visit `/about` directly | Page loads without error |

---

## Concepts Demonstrated

- **File-based routing** — routes defined in `routes.ts` and mapped to files in `app/routes/`
- **Dynamic routes** — `post.$postId.tsx` uses `:postId` param extracted with `useParams`
- **`useNavigate`** — programmatic navigation for the "Return to Feed" button
- **`<Outlet />`** — child routes render inside the root layout
- **`<NavLink>`** — active link highlighting in the navbar
- **`<Link>`** — client-side navigation from post cards on the home feed

---

## Video Demo

[YouTube Link](#)
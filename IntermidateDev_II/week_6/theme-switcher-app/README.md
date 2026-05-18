# 🌙 Global Theme / Dark Mode Switcher

A React application demonstrating global state management with the **Context API** to implement a light/dark theme switcher. Built with Vite + React.

## Features

- 🌗 Toggle between **Light** and **Dark** themes globally
- 💾 **Persists** user preference via `localStorage`
- ⚡ Built with **Vite** (HMR-enabled dev server)
- ✅ **Tested** with Vitest + Testing Library (6 test cases)
- 🎨 Clean, polished UI using CSS variables + inline theme tokens

## Tech Stack

- React 18 (Context API, `useState`, `useEffect`, `useContext`)
- Vite 5
- Vitest + @testing-library/react

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

## Project Structure

```
src/
├── ThemeContext.jsx         # createContext, ThemeProvider, theme objects
├── main.jsx                 # Entry point — wraps <App> in <ThemeProvider>
├── App.jsx                  # Root component, consumes ThemeContext
├── index.css                # .light-mode / .dark-mode CSS classes + styles
├── setupTests.js            # Vitest + jest-dom setup
├── components/
│   ├── ThemeSwitcher.jsx    # Toggle button (useContext)
│   ├── Header.jsx           # Sticky header with brand + toggle
│   └── Card.jsx             # Theme-aware card component
└── __tests__/
    └── ThemeContext.test.jsx # 3 normal + 3 edge test cases
```

## Test Cases

### Normal Cases
| # | Description |
|---|-------------|
| NC-1 | App renders with light mode by default |
| NC-2 | Clicking toggle switches from light → dark |
| NC-3 | Clicking toggle twice returns to light mode |

### Edge Cases
| # | Description |
|---|-------------|
| EC-1 | Theme is saved to `localStorage` on toggle |
| EC-2 | App loads saved dark theme from `localStorage` on mount |
| EC-3 | Invalid `localStorage` value falls back to light theme |
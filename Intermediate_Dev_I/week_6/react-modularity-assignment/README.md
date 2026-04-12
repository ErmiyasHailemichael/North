

# React Modularity Assignment

A React application that demonstrates component modularity using default and named imports/exports.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Default export
│   ├── Footer.js          # Default export
│   ├── ContentA.js        # Named export
│   ├── ContentB.js        # Named export
│   └── SharedComponents.js # Named export (Button)
└── App.js
```

## Components

| File | Export Type | Description |
|------|-------------|-------------|
| `Header.js` | Default | Top navigation bar |
| `Footer.js` | Default | Bottom footer |
| `ContentA.js` | Named | First content section |
| `ContentB.js` | Named | Second content section |
| `SharedComponents.js` | Named | Reusable Button component |

## Key Concepts

- **Default export/import** — used for Header and Footer, one primary component per file
- **Named export/import** — used for ContentA, ContentB, and Button, requires curly braces on import
- **Shared components** — Button is imported into both ContentA and ContentB from SharedComponents.js

## How to Run

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser.

## Video Tutorial

[React Modularity - Component Imports/Exports](https://youtu.be/qbSQMASkwHU)

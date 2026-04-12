# User Profile Card – JSX Conversion Assignment

## Description

This project demonstrates converting a standard HTML snippet into valid JSX inside a React component. It covers key JSX rules including:

- Replacing `class` with `className`
- Properly self-closing tags like `<img />`
- Using props to make the component reusable
- Embedding JavaScript expressions with `{}` for dynamic content

## Project Structure

```
src/
├── App.js            # Root component — renders UserProfile with sample data
├── UserProfile.jsx   # The main component converted from HTML to JSX
└── index.js          # React entry point
```

## HTML → JSX Conversion Summary

| HTML | JSX |
|------|-----|
| `class="profile-card"` | `className="profile-card"` |
| `<img src="...">` | `<img src={photoUrl} />` (self-closed, dynamic) |
| `href="mailto:jane.doe@example.com"` | `` href={`mailto:${email}`} `` |
| Static name/email text | `{name}` / `{email}` via props |

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Component Usage

The `UserProfile` component accepts three props:

```jsx
<UserProfile
  name="Jane Doe"
  email="jane.doe@example.com"
  photoUrl="https://example.com/user-photo.jpg"
/>
```

[video link](https://youtu.be/Gq2ZxV-zx1A)
# User Registration Form

A client-side validated user registration form built with React, TypeScript, and React Hook Form.

## Features

- Uncontrolled, ref-based form architecture for minimal re-renders
- Real-time field validation with clear error messages
- Password strength enforcement (uppercase, lowercase, number)
- Confirm password cross-field validation using `watch`
- Role dropdown with required selection enforcement
- Terms & Conditions checkbox validation
- Auto-focus on Full Name field on mount
- Draft caching to localStorage on every change
- Draft restored automatically on page reload
- "Registering..." loading state during simulated API submission
- Form and localStorage reset after successful submission

## Tech Stack

- React 18
- TypeScript
- React Hook Form
- React Testing Library + Jest

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

### Run tests

```bash
npm test -- --watchAll=false
```

6 tests total — 3 normal cases, 3 edge cases.

## Test Cases

### Normal Cases
1. All 6 fields and the submit button render correctly
2. Button shows "Registering..." and is disabled during submission
3. All fields reset to empty after successful submission

### Edge Cases
1. All required error messages appear when submitting an empty form
2. Password missing an uppercase letter is rejected
3. Confirm password that doesn't match password shows an error
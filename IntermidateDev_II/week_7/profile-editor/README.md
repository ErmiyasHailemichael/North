# Profile Editor

A profile editing form that integrates React Hook Form with TanStack Query and a mock REST API built with JSON Server. This architecture separates client-side form state from server state, representing the industry standard pattern for enterprise React applications.

## Features

- Fetches profile data from a mock REST API using TanStack Query `useQuery`
- Displays a loading state while data is being fetched
- Seeds form fields automatically using React Hook Form's `reset` once data resolves
- Save Changes button disabled until a field is modified (`isDirty`)
- Save Changes button disabled during submission (`isPending`)
- Submits updates via `useMutation` using a PUT request
- Invalidates query cache on success to keep server and UI in sync
- Resets dirty flag after successful save using `reset(updatedData)`
- Maps 409 conflict server errors directly onto the email field using `setError`

## Tech Stack

- React 18
- TypeScript
- React Hook Form
- TanStack Query (React Query v5)
- JSON Server (mock REST API)
- React Testing Library + Jest

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the mock API server

```bash
npm run server
```

Starts JSON Server at [http://localhost:3001/profile](http://localhost:3001/profile)

### Run the development server

Open a second terminal tab and run:

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

> Both servers must be running at the same time for the app to work.

### Run tests

```bash
npm test -- --watchAll=false
```

6 tests total — 3 normal cases, 3 edge cases.

## Test Cases

### Normal Cases
1. Shows loading state then populates form with server data
2. Save Changes button is disabled when form is not dirty
3. Save Changes button enables when a field is changed

### Edge Cases
1. Shows required error when username is cleared and form is submitted
2. Shows error for invalid email format
3. Shows conflict error when email is conflict@example.com


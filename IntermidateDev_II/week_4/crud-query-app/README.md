# CRUD Query App

A React Native (Expo) application built with TanStack Query that performs full CRUD operations using the JSONPlaceholder API.

## Features

- **Fetch Posts** – Retrieves all posts using `useQuery`
- **Create a Post** – Submits a new post using a `POST` request via `useMutation`
- **Update a Post** – Fully replaces a post using a `PUT` request via `useMutation`
- **Patch a Post** – Partially updates only the title using a `PATCH` request via `useMutation`
- **Delete a Post** – Removes a post using a `DELETE` request via `useMutation`
- **Filter by User ID** – Filters posts by User ID using a dynamic query key

## Technologies Used

- React Native (Expo)
- TanStack Query v5
- JSONPlaceholder API (https://jsonplaceholder.typicode.com)
- TypeScript

## How to Run

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npx expo start
   ```
4. Press **w** to open in the browser, or scan the QR code with Expo Go

## Test Cases

### Normal Cases
1. **Fetch all posts** – All 100 posts load on startup with title and body displayed
2. **Create a post** – Filling in the form and clicking Submit Post sends a POST request and shows "Post created!"
3. **Filter by User ID** – Entering a number (1–10) filters the list to only show that user's posts

### Edge Cases
1. **Delete a post** – Clicking Delete removes the post from the list immediately
2. **Patch title only** – Clicking Patch Title and submitting only updates the title, not the body
3. **Clear filter** – Clicking Clear after filtering restores the full list of all posts
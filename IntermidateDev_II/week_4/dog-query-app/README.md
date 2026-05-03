# Dog Query App

A React application built with TanStack Query (React Query) that fetches and displays data from the [Dog API](https://dogapi.dog/).

## Features

- **Breeds List** – Fetches and displays all dog breeds from the Dog API
- **Breed Detail** – Click any breed to expand and view detailed information (description, weight, life expectancy, hypoallergenic status)
- **Dog Facts** – Displays random dog facts with a button to load new ones
- **Dog Groups** – Displays all dog breed groups

All data fetching is handled using TanStack Query with proper `isPending`, `isError`, and `isSuccess` state handling.

## Technologies Used

- React (Vite)
- TanStack Query v5
- Dog API (https://dogapi.dog/)

## How to Run

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

## Test Cases

### Normal Cases
1. **Breeds list loads** – On page load, a full list of dog breeds is displayed
2. **Breed detail expands** – Clicking a breed shows its name, description, weight range, life expectancy, and hypoallergenic status
3. **Facts and groups load** – Dog facts and group names are fetched and rendered correctly

### Edge Cases
1. **Network error on breeds** – If the breeds endpoint fails, an error message is shown instead of crashing the app
2. **Unknown breed ID** – If a breed detail fetch fails (bad ID), the error state is caught and displayed gracefully
3. **Refetch facts** – Clicking "Load New Facts" triggers a fresh fetch; loading state is shown while the new data arrives
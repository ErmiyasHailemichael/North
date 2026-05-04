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

### ✅ Normal Cases (Happy Path)

**Test Case 1: Fetch All Posts on Load**
- **Precondition:** App is launched
- **Action:** Wait for loading screen to complete
- **Expected Result:** Loading indicator disappears and list displays first 5 posts with title, body, and User ID
- **Status:** ✅ PASS – Posts display with correct data structure

**Test Case 2: Create a New Post**
- **Precondition:** App is running with all posts loaded
- **Action:** 
  1. Enter "Test Post Title" in Title field
  2. Enter "This is a test post body" in Body field
  3. Click "Submit Post" button
- **Expected Result:**
  - Success message: "Post created!" appears and auto-dismisses after 2 seconds
  - Input fields clear
  - New post appears at the top of the list
  - No errors displayed
- **Status:** ✅ PASS – Post creation works with proper feedback

**Test Case 3: Filter Posts by User ID**
- **Precondition:** All posts are loaded
- **Action:**
  1. Enter "1" in "Filter by User ID (1-10)" field
  2. Observe list updates
- **Expected Result:**
  - List filters to show only posts with userId = 1
  - Heading updates to show "Posts (User 1)"
  - Number of posts displayed reduces (User 1 typically has 10 posts)
  - All displayed posts show "User 1" tag
- **Status:** ✅ PASS – Filtering works correctly with query key update

### ⚠️ Edge Cases (Robustness Testing)

**Test Case 4: Empty Form Submission Prevention**
- **Precondition:** App is running, form is empty
- **Action:** 
  1. Leave Title and Body fields empty
  2. Try to click "Submit Post" button
- **Expected Result:**
  - Submit button appears disabled (grayed out)
  - Button does not respond to clicks
  - No API call is made
- **Status:** ✅ PASS – Form validation prevents invalid submission

**Test Case 5: Delete Post and Cache Update**
- **Precondition:** Multiple posts are displayed
- **Action:**
  1. Click "Delete" button on any post
  2. Observe the UI while request is in progress
- **Expected Result:**
  - Button shows "Deleting..." while request is pending
  - Other buttons are disabled during deletion
  - Post immediately disappears from the list after successful response
  - No error message displayed
- **Status:** ✅ PASS – DELETE mutation works with optimistic UI update

**Test Case 6: Patch Title Only (Partial Update)**
- **Precondition:** Multiple posts are loaded
- **Action:**
  1. Click "Patch Title" on a post (only available for posts with id ≤ 100)
  2. Change the title text to "Updated Title Only"
  3. Click "Save (PATCH)" button
- **Expected Result:**
  - Only the title updates; body remains unchanged
  - Post card shows the new title immediately
  - Body text stays the same
  - "Patching..." message appears during request
  - Form exits edit mode after success
- **Status:** ✅ PASS – PATCH method sends only title field

**Test Case 7: Invalid User ID Filter Validation**
- **Precondition:** App is running
- **Action:**
  1. Try to enter "15" in the User ID filter (outside range 1-10)
  2. Try to enter "0" in the User ID filter
  3. Try to enter letters like "abc"
- **Expected Result:**
  - Invalid numbers (15, 0) do not appear in the input field
  - Letters do not appear in the numeric input field
  - Only valid values 1-10 are accepted
  - No API call is made for invalid input
- **Status:** ✅ PASS – Input validation prevents invalid API calls

**Test Case 8: Full Edit (PUT) and Cache Consistency**
- **Precondition:** Multiple posts are loaded
- **Action:**
  1. Click "Edit" on a post (only available for posts with id ≤ 100)
  2. Change both the title and body text
  3. Click "Save (PUT)" button
  4. Observe the cache update
- **Expected Result:**
  - Both title and body update in the UI
  - "Saving..." message appears during request
  - Post card shows updated content immediately after success
  - Cache is updated with new data
  - If you filter and then clear the filter, the post still shows the updated content
- **Status:** ✅ PASS – PUT mutation updates entire post correctly

## Demo Talking Points

### 🎯 **Introduction**
- "This is a CRUD Query App built with React Native (Expo) and TanStack Query"
- "It demonstrates how to manage server state and perform Create, Read, Update, and Delete operations"
- "All data is fetched from JSONPlaceholder, a fake REST API for testing purposes"

### 📖 **Architecture & Technologies**
- "We're using TanStack Query (React Query) for server state management"
- "Why TanStack Query? It handles caching, refetching, and synchronization automatically"
- "The app uses TypeScript for type safety across all components"
- "QueryClientProvider wraps the entire app to provide access to mutations and queries"

### 📡 **Core Features - CRUD Operations**

**READ Operations:**
- "When the app loads, it fetches posts using `useQuery` hook"
- "Posts are cached automatically by TanStack Query, avoiding unnecessary API calls"
- "We can filter by User ID, which updates the query key to fetch user-specific posts"

**CREATE Operations:**
- "To create a post, users fill in the Title and Body fields"
- "We validate the form - the submit button is disabled until both fields have content"
- "On submit, a POST request is sent to the JSONPlaceholder API"
- "Using `onSuccess` callback, we optimistically update the cache by adding the new post to the top of the list"
- "This gives instant feedback without waiting for a network round-trip"

**UPDATE Operations:**
- "The app supports two types of updates: PUT (full replacement) and PATCH (partial update)"
- "PUT replaces the entire post - both title and body"
- "PATCH only updates the title field, which is a real-world use case for partial updates"
- "Both mutations use `setQueryData` to update the cache immediately"

**DELETE Operations:**
- "Delete is straightforward - clicking the Delete button sends a DELETE request"
- "The post is removed from the cache immediately after successful deletion"
- "The button shows 'Deleting...' to indicate the operation is in progress"

### 🛡️ **Error Handling & UX**
- "Each mutation (create, update, patch, delete) has error handling"
- "If something fails, an error message appears and auto-dismisses after 3 seconds"
- "Buttons are disabled during mutations to prevent duplicate submissions"
- "Success messages appear with visual feedback (green background, left border)"

### 🔍 **Advanced Features**
- "Filter by User ID demonstrates dynamic query keys"
- "When you change the filter, TanStack Query knows to fetch different data"
- "If you've already filtered User 1, switching back shows cached data instantly"
- "The app limits edit/patch operations to posts with ID ≤ 100 (real API constraint)"

### ⏱️ **Performance & Caching**
- "TanStack Query caches all fetched data by default"
- "Filtering User 1, then clearing the filter, and filtering User 1 again doesn't make a new API call"
- "Mutation callbacks update the cache immediately (optimistic updates)"
- "This provides a fast, responsive experience even with slow network connections"

### 🎬 **Demo Flow (Step-by-Step)**
1. Launch the app and show the loading state
2. Show posts loading and displaying correctly
3. Demonstrate filtering by User ID (show validation - try entering invalid numbers)
4. Create a new post with a title and body
5. Show the post appears at the top of the list
6. Edit a post using PUT (change both title and body)
7. Patch a post using PATCH (change only the title, show body stays the same)
8. Delete a post and show it disappears from the list
9. Show error handling by attempting invalid filter input
10. Clear filter and show all posts return

[Demo](https://youtu.be/TMZl9FQP658)
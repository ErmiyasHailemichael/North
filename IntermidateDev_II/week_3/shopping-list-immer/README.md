# Shopping List with Immer

A React application demonstrating complex state management using the **Immer** library. This project focuses on maintaining immutability while updating deeply nested objects within an array.

## Project Objective
The goal of this assignment was to move beyond basic `useState` patterns and implement `useImmer`. This allows for:
- **Simplified Updates:** Mutating a "draft" state instead of manually spreading nested objects.
- **Improved Readability:** Writing imperative-style code that remains functionally immutable.
- **Complex Structures:** Managing objects that contain nested details (e.g., `item.details.notes`).

## Tech Stack
- **React** (Vite)
- **Immer** & **use-immer** (State Management)
- **JavaScript (ES6+)**
- **CSS3** (Custom styling)

## 🚀 Features & Logic
- **Add Items:** Uses `draft.push()` to append new objects to the state.
- **Update Notes:** Directly modifies `item.details.notes` by finding the specific ID within the draft.
- **Remove Items:** Utilizes `draft.splice()` to remove elements without the overhead of complex filtering logic.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone 
   ```

2. **Navigate to the directory:**
   ```bash
   cd shopping-list-immer
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

##  Test Cases Demonstrated
In the accompanying video, I demonstrate the following:

### Normal Cases
1. **Add Item:** Successfully adding "Eggs" and "Bread" to the list.
2. **Update Notes:** Changing the nested notes property of an existing item.
3. **Remove Item:** Deleting an item and confirming the UI updates immediately.

### Edge Cases
1. **Empty String Validation:** Attempting to add an item with no name.
2. **Empty List State:** Removing all items to display the "Your list is empty" fallback UI.
3. **Deep Update Integrity:** Showing that updating a note doesn't affect other properties or items in the array.

------

## Video
 - [Video](https://youtu.be/69CQsg0ZD-g)

# User Profile Management (useImmer)

This project demonstrates how to manage deeply nested object states in React using the **useImmer** hook. It allows for direct-style mutations on a draft state while ensuring React's immutability principles are strictly followed.

##  Project Objective
The goal was to simplify the management of complex user data, specifically:
- **Nested Objects:** Updating `contactDetails` (phone and address) without multiple spread operators.
- **Booleans:** Toggling user `preferences` (newsletter subscription) easily.
- **State Feedback:** Providing a real-time JSON preview of the underlying state.

## Tech Stack
- **React** (Vite)
- **Immer** & **use-immer**
- **JavaScript (ES6+)**
- **CSS3**

## Key Implementation
Using `useImmer` allows us to write logic like:
```javascript
updateUserProfile(draft => {
  draft.contactDetails.phone = "555-0199"; // Direct mutation on draft
});
```
This replaces the verbose standard React syntax:
```javascript
setUserProfile({
  ...userProfile,
  contactDetails: { ...userProfile.contactDetails, phone: "555-0199" }
});
```

##  Installation & Setup

1. **Navigate to project:**
   ```bash
   cd user-profile-immer
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run Dev Server:**
   ```bash
   npm run dev
   ```

## 🧪 Demonstrated Test Cases
### Normal Cases
1. **Name Update:** Successfully updating the top-level string.
2. **Nested Contact Update:** Changing phone/address and seeing the change reflected in the Live State Preview.
3. **Toggle Preference:** Switching the newsletter checkbox on and off.

### Edge Cases
1. **Empty Field Handling:** Deleting all text in an input and ensuring the object structure remains intact.
2. **Special Characters:** Verifying the state handles symbols and long strings in the address field.
3. **State Isolation:** Demonstrating that updating one nested property (like phone) does not overwrite or reset other properties (like email or notifications).

## video 
[Video](https://youtu.be/yugN1MD8a9Q)
# Feature Toggle Demo

AD311 - Week 8 Assignment

## What it does
A React component that uses conditional rendering based on props.
- If `isEnabled` is `true` → shows the feature name
- If `isEnabled` is `false` → shows "Feature [name] is disabled"

## How to run
```bash
npm install
npm run dev
```

## Test Cases
### Normal Cases
1. `isEnabled={true}` with "Dark Mode" → shows "Dark Mode"
2. `isEnabled={false}` with "Push Notifications" → shows "Feature Push Notifications is disabled"
3. `isEnabled={true}` with "User Authentication" → shows "User Authentication"

### Edge Cases
1. Empty string as featureName → shows "Feature  is disabled"
2. Very long feature name → renders without breaking
3. Special characters in featureName → handles without errors


## Video Demo

[Video Link](https://youtu.be/bcgM4al336s)
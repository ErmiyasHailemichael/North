# String Reversal Recursive Function

## Explanation

This code implements a recursive function `reverseString` that reverses a given string. The function works by checking if the string length is 1 or less; if so, it returns the string as is. Otherwise, it recursively calls itself on the substring starting from the second character and appends the first character to the result.

## YouTube Video

For a visual explanation of recursive string reversal, check out this YouTube video: [Recursive String Reversal in JavaScript](https://youtu.be/kv7oyEHp)

## Flow Chart

```
┌─────────────────┐
│  Start          │
└────────┬────────┘
         │
         ▼
┌─────────────────────┐
│ Input: str          │
└────────┬────────────┘
         │
         ▼
    ┌────────────────────────┐
    │ Is str.length <= 1?    │
    └────────┬───────────────┘
             │
        Yes  │  No
      ┌──────┴──────┐
      ▼             ▼
┌──────────┐  ┌──────────────────────────┐
│ Return   │  │ return reverseString     │
│ str      │  │ (str.slice(1)) + str[0]  │
└────┬─────┘  └──────────┬───────────────┘
     │                   │
     │                   ▼
     │         ┌──────────────────┐
     │         │  Recursive Call  │
     │         └──────────┬───────┘
     │                   │
     └───────────┬───────┘
                 │
                 ▼
         ┌──────────────┐
         │   Return     │
         │   Result     │
         └──────────────┘
```
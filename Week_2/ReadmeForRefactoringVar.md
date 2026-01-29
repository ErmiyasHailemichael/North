# Refactoring var to const and let - Analysis

## Issues and Bugs with the Original `var` Usage

### 1. **Variable Hoisting Confusion**

**Issue:** All `var` declarations are hoisted to the top of their function scope, but their assignments remain in place.

**In the original code:**
```javascript
function checkAccess(loggedIn) {
    var accessLevel;
    var userRole;
    if (loggedIn) {
        var message = "User is logged in.";
        // ...
    } else {
        var message = "User not logged in.";
        // ...
    }
}
```

**What actually happens (after hoisting):**
```javascript
function checkAccess(loggedIn) {
    var accessLevel;
    var userRole;
    if (loggedIn) {
        var message = "User is logged in.";
        console.log(message);
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        var message = "User not logged in.";
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}

for (var i = 0; i < 3; i++) {
    console.log("Attempt", i);
    var loggedIn = Math.random() >= 0.5;
    checkAccess(loggedIn);
    console.log("Access Level:", checkAccess(loggedIn));
}
```

**Problem:** The `message` variable appears to be declared twice, but it's actually the same variable being redeclared and reassigned. This is confusing and can lead to unexpected behavior.

---

### 2. **Lack of Block Scoping**

**Issue:** `var` has function scope (or global scope), not block scope. Variables leak outside of blocks like `if` statements and loops.

**Example from the code:**
```javascript
if (loggedIn) {
    var message = "User is logged in.";
    console.log(message);
}
// message is still accessible here! (undefined if block didn't execute)
console.log(message); // This would work with var
```

**Problem:** You can accidentally access or modify variables outside their intended scope, leading to bugs.

---

### 3. **Loop Variable Leakage**

**Issue:** Loop counters declared with `var` persist after the loop completes.

**In the original code:**
```javascript
for (var i = 0; i < 3; i++) {
    console.log("Attempt", i);
    // ...
}
// i is still accessible here and equals 3
console.log(i); // Works with var, outputs: 3
```

**Problem:** This can cause conflicts if you reuse variable names or if you have closures that capture the loop variable. The classic example:

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Outputs: 3, 3, 3 (not 0, 1, 2 as expected!)
```

---

### 4. **Unintentional Redeclaration**

**Issue:** `var` allows you to redeclare the same variable multiple times without error.

**In the original code:**
```javascript
if (loggedIn) {
    var message = "User is logged in.";
} else {
    var message = "User not logged in.";  // Redeclaration - no error!
}
```

**Problem:** This can hide bugs where you accidentally reuse a variable name. With `const`/`let`, this would throw a `SyntaxError`.

---

### 5. **Undefined Variable Bug**

**Issue:** The `userRole` variable is declared but never initialized.

**In the original code:**
```javascript
var userRole;  // undefined
if (userRole === "admin") {  // Always false!
    accessLevel = "full";
} else {
    accessLevel = "limited";  // Always executes
}
```

**Problem:** The admin check will **never** be true because `userRole` is always `undefined`. This is a logic bug. While this isn't specifically a `var` problem, using `let` makes it clearer that the variable is uninitialized.

---

### 6. **Global Scope Pollution**

**Issue:** `var` declarations at the top level become properties of the global object (window in browsers).

**In the original code:**
```javascript
for (var i = 0; i < 3; i++) {
    var loggedIn = Math.random() >= 0.5;
    // ...
}
// Both i and loggedIn are now global variables!
```

**Problem:** This can cause naming conflicts with other scripts and makes debugging harder.

---

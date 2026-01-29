// Ermiyas H.
// Intermediate Dev 1
// Refactoring var to const and let Assignment
// Original code refactored to use modern variable declarations

function checkAccess(loggedIn) {
    let accessLevel;
    // Changed from var to let
    // Reason: accessLevel is reassigned in different conditional branches,
    // so it cannot be const. Using let provides proper block scoping.
    
    let userRole;
    // Changed from var to let
    // Reason: userRole is declared but not assigned initially (it's undefined).
    
    if (loggedIn) {
        const message = "User is logged in.";
        // Changed from var to const
        // Reason: message is only assigned once within this block and never
        // reassigned. const provides block scoping and prevents modification.
        
        console.log(message);
        
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        const message = "User not logged in.";
        // Changed from var to const
        // Reason: Same as above - message is only assigned once in this block.
        
        console.log(message);
        accessLevel = "none";
    }
    
    return accessLevel;
}

for (let i = 0; i < 3; i++) {
    // Changed from var to let
    // Reason: i is a loop counter that's reassigned on each iteration (i++).
    // let provides block scoping, keeping i confined to the loop.
    
    console.log("Attempt", i);
    
    const loggedIn = Math.random() >= 0.5;
    // Changed from var to let, then optimized to const
    // Reason: loggedIn is assigned once per loop iteration and never reassigned
    // within that iteration. 
    
    checkAccess(loggedIn);
    console.log("Access Level:", checkAccess(loggedIn));
}

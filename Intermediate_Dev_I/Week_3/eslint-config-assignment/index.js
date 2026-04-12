const name = "Kebede";
const age = 25;

function greet(person) {
    console.log("Hello, " + person);
    return true;
}

const user = {
    name: name,
    age: age,
    city: "Redmond"
};

// Use the user object
console.log("User:", user);
console.log("Age:", user.age);

greet(name);

// Export the function
module.exports = greet;
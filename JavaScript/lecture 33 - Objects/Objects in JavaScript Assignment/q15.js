const user = {
    name: "Nishant",
    email: "nishant@example.com",
    isLoggedIn: true
}

// const newUser = user // galat tareeka

const newUser = { ...user } // using spread operator

user.name = "random"

console.log(user);
console.log(newUser);
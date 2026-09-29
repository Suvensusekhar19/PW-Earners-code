const user = {
    name: "Nishant",
    email: "nishant@example.com",
    isLoggedIn: true
}

// const name = user.name
// const email = user.email
// const isLoggedIn = user.isLoggedIn

const {name , email , isLoggedIn}  = user  // object destructuring

console.log(name, email , isLoggedIn);
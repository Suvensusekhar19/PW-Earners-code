const user = {
    name: "Nishant",
    email: "nishant@example.com",
    role : "instructor",
    isLoggedIn: true
}

// const newUser = user // galat tareeka

const newUser = { ...user , role : "developer" } // using spread operator


console.log("user" ,user);
console.log("newUser" ,newUser);
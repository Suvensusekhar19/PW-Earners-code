const user = {
    name: "Nishant",
    email: "nishant@example.com",
    isLoggedIn: true
}

function displayUser({ name, email, isLoggedIn }) {
    console.log(name);
    console.log(email)
    console.log(isLoggedIn);
}

displayUser(user)
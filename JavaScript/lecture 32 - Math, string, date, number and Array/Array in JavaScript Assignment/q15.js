let users = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]

let output = users.findIndex(function(user){
    // if(user.name === "Rahul"){
    //     return user
    // }

    // short syntax
    return user.name === "Priya"
})

console.log(output);

let users = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]

let output = users.find(function(user){
    // if(user.name === "Rahul"){
    //     return user
    // }

    // short syntax
    return user.name === "Rahul"
})

console.log(output);
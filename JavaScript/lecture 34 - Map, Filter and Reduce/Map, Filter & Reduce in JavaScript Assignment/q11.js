const users  =[
 { name: "Rahul", role: "developer" },
 { name: "Priya", role: "student" }
]

const developers = users.filter(u => {
    // if(u.role === "developer") {
    //     return users
    // }

    return u.role === "developer" 
})

console.log(developers);
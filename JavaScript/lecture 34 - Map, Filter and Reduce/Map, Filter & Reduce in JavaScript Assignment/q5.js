const users = [
 { name: "Rahul", role: "student" },
 { name: "Priya", role: "student" }
]

const usersWithUpdatedRole = users.map(u => {
    return {...u , role: "developer"}
})

console.log(users);
console.log(usersWithUpdatedRole);
const users = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
]

const activeUsers = users.filter(({ isActive }) => {
    return isActive
})

console.log(activeUsers);
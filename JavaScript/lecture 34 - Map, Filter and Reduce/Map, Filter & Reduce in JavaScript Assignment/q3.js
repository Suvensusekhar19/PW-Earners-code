const users = [
 { name: "Rahul", email: "rahul@example.com" },
 { name: "Priya", email: "priya@example.com" }
]

const userNames = users.map(user => {
    return user.name
}) 


const userEmails = users.map(user => {
    return user.email
}) 

console.log(users);
console.log(userNames);
console.log(userEmails);
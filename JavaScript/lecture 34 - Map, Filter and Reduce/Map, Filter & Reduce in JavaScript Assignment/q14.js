let emails = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]

let gmailAccounts = emails.filter(e => {
    return e.endsWith("@gmail.com")
    // return e.includes("@gmail.com")
})

console.log(gmailAccounts);
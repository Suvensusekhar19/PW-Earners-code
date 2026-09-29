const cart = [
 { amount: 500 },
 { amount: 1000 },
 { amount: 750 }
]

const totalAmount = cart.reduce((acc , {amount} ) => {
    return acc + amount
} , 0)

console.log(totalAmount);
const cart = [
 { name: "Mouse", price: 500, quantity: 2 },
 { name: "Keyboard", price: 1000, quantity: 1 }
]

const total = cart.reduce((acc , {price , quantity}) => {
    return acc + price * quantity
} , 0)

console.log(total);
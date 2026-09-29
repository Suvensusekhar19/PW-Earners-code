const products = [
    { name: "Laptop", quantity: 7 },
    { name: "Mouse", quantity: 2 }
]

const totalQuantity = products.reduce((acc, { name, quantity }) => {
    return acc + quantity
}, 0)

console.log(totalQuantity);
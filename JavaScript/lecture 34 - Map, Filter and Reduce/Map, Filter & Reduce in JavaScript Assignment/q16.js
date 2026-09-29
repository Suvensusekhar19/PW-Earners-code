const products = ["Laptop", "Mouse", "Keyboard"]

const totalProducts = products.reduce((acc , cur) => {
    // return ++acc
    return acc + 1
} , 0)

console.log(totalProducts);
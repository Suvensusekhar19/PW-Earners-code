// let colors = ["red", "green", "blue", "orange"]

// const newColors = colors.map((color) => {
//     if (color === "green") {
//         return color + 1
//     }

//     return color
// })

// console.log(newColors);


const products = ["laptop", "mobile", "headphones"]

let newProducts = products.map(product => {
    return product.toUpperCase()
})

console.log(products);
console.log(newProducts);
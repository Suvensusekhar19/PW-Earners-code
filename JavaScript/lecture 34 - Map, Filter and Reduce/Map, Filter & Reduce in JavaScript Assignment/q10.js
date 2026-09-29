// let cart = [{ name: "apple", category: "fruit" }, { name: "mango", category: "fruit" }]

// const result = cart.filter(item => {
//     if (item.category === "fruit"){
//         return item
//     }
// })

// console.log(result);


const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
]

const inStockProducts = products.filter(p => {
    if(p.inStock){
        return p
    }
})

console.log(inStockProducts);
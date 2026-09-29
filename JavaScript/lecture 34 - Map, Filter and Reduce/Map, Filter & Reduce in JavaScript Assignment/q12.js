const products = [
 { name: "Mouse", price: 500 },
 { name: "Keyboard", price: 1500 }
]

const expensiveProducts = products.filter(({price}) => {
    return price > 1000
})

console.log(expensiveProducts);
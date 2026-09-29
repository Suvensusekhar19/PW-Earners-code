let price =[100, 250, 500]

let priceWithCurrency = price.map(p => {
    return `₹${p}`
})

console.log(price);
console.log(priceWithCurrency);
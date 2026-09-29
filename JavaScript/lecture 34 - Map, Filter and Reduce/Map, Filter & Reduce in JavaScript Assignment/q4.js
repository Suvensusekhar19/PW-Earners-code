const prices = [100, 200, 300]

const newPrices = prices.map(p => {
    return p + (p * 10) / 100;
})

console.log("original: " , prices);
console.log("new prices: " , newPrices);
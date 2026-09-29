let prices = [500, 1200, 300]

const totalPrice = prices.reduce((acc  , cur) => {
    return acc + cur
} , 0)

console.log(totalPrice);
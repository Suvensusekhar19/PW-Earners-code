const tech = ["HTML", "CSS", "JavaScript"]

// console.log(tech.join(", "));

const techString = tech.reduce((acc , cur) => {
    return acc + ", " + cur 
})

console.log(techString);
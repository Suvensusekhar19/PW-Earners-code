// q1
const h2 = document.getElementById("title")
h2.textContent = "Welcome JavaScript"

// q2
const p = document.querySelector(".description")
p.textContent = "New Description"

// q3
const list = document.querySelectorAll(".item")
list.forEach((l) => {
    l.style.color = "red"
})

//q4
const msg = document.querySelector("#message")
msg.textContent = "Welcome to JavaScript!"

//q5
const container = document.querySelector("#container")
container.innerHTML = `<h2>My Website</h2>
<p>Welcome to my website!</p>`

//q6
const profileImage = document.querySelector("#profileImage")
profileImage.setAttribute("src", "https://avatars.githubusercontent.com/u/121441158")
profileImage.setAttribute("alt", "nishant github profile image")

// q7
const btn = document.querySelector("#btn")
btn.classList.add("red")
btn.classList.remove("red")
btn.classList.toggle("red")

// q8
const heading = document.querySelector("#heading")
heading.style.color = "purple"
heading.style.fontSize = "50px"
heading.style.backgroundColor = "skyblue"

// q9
const productBtn = document.querySelector("#productBtn")
const value = productBtn.dataset.id // reading from dataset
console.log(value);
productBtn.dataset.email = "hello@example.com" // writing

// q10
const pTag = document.createElement("p")
pTag.textContent = "This paragraph was created using JavaScript"
const body = document.querySelector("body")
body.append(pTag)


// q11
const skills = document.querySelector("#skills")
// const li1 = document.createElement("li")
// const li2 = document.createElement("li")
// const li3 = document.createElement("li")
// li1.textContent = "HTML"
// li2.textContent = "CSS"
// li3.textContent = "JavaScript"
// // skills.appendChild(li1)
// // skills.appendChild(li2)
// // skills.appendChild(li3)
// skills.append(li1, li2, li3)

// advance 
let skillsArr = ["HTML", "CSS", "JavaScript" , "React"]
skillsArr.forEach((skill) => {
    const li = document.createElement("li")
    li.textContent = skill
    li.style.color = "red"
    skills.append(li)
})

// q12
let skillsArr2 = ["HTML", "CSS", "JavaScript" , "React"]
skillsArr.forEach((skill) => {
    const li = document.createElement("li")
    li.textContent = skill
    skills.prepend(li)
})

// q13
const skills2 = document.querySelector("#skills2")
const css = document.createElement("li")
css.textContent = "CSS"
skills2.insertBefore(css, skills2.children[1])

// q14
skills2.children[1].remove()

// q15
const btn2 = btn.cloneNode(true)
body.append(btn2)

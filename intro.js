console.log("Hello :)")

const firstName = "Jenny"
let age = 40
let isCool = true
let capstoneName = null // null is intentionally absent of value
let newTattoo = undefined // undef is unintentionally absent of value
// two slashes and a space makes a comment
// or you can hit command/? on line
// comments are personal notes, allows us to ignore unwanted code atm 
/* is a multi-line comment
can comment out whole sections
super cool
*/

console.log(firstName)
console.log(`Hello ${firstName}, who is ${age} yrs old`)
// when using backticks, you can use ${} to reference variable values, and they get placed into the string

// ---------- MATH --------

let x = 40
let y = 10
let z = 7 + 8

let sum = x - (y * z)
console.log(sum)

// ------- conditional logic -----------

if (x > y) {
    console.log("X is greater than Y")
} else {
    console.log("nope.")
}

if (isCool) {
    console.log("I'm cool")
} else {
    console.log("be better")
}

if (firstName === "JLo") {
    console.log("then you a millionaire")
} else {
    console.log("you wish")
}

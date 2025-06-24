/*console.log("My name is Delight. \n We are having a RN Bootcamp")

console.warn("Standby! This is the last warning")
console.error("You cannot divide a number by zero")
document.writeln("I am learning JavaScript.")
document.write("I want to be a frontend developer")
document.writeln("Just testing it out")

alert("Welcome to my website")

let name = prompt("Enter your name")
console.log("The name entered is", name)

let num1 = prompt("Enter the first number")
num1 = parseInt(num1)

let num2 = prompt("Enter the second number")
num2 = parseInt(num2)

console.log("number 1 + number 2 = ",num1+num2)
console.log("number 1 - number 2 = ", num1-num2)
console.log(`${num1} * ${num2}`)
console.log(""+num1+" / "+num2+"")

console.log("The random generated number is", Math.random())
console.log("The square root of 12 is ", Math.sqrt(12))
console.log("The naximum number in the set is ",Math.max(23,45,11,67))
console.log("The sin of 30 is ",Math.sin(30))

//let, var, const
//var(entire region), let(specific scope)--> both for values that will change
let firstname;
var age = 4;
const pi = 3.14

firstname = prompt("Enter your first name")
console.log(`My first name is ${firstname}`)

var age = prompt("How old are you?")
age = parseInt(age)
console.log(`I am ${age} years old`)

console.log("The value of pi is" + pi)

let wild_animal = 'Lion'
var domestic_animal = 'Cow'

var stmt = "Let's go to school"
console.log(wild_animal, domestic_animal, stmt)*/

console.log('My name is Delight Aheebwa\n We are having an RN \'bootcamp')

let number = 24;
let d = 4.56;
let e = 5e10

let isMale = true
var hasPaid = true
//ES5, ES6, ECMA

let sym1 = Symbol("I am good at JS")
let sym2 = Symbol("I am goof at JS")
console.log("The two statements are the same: ",sym1 === sym2)


var weight = null;
console.log(weight)

var height;
console.log(height)

let x = 56
let y = "Delight"
let z = true
console.log("The data type of x is"+ typeof x)
console.log("The data type of y is"+ typeof y)
console.log("The data type of z is"+ typeof z)

let m = undefined
let n = null
console.log("The data type of m is"+ typeof m)
console.log("The data type of n is"+ typeof n)

let num = 6
console.log("The datatype of num before changing it: "+ typeof num)
num = String(num)
console.log("The datatype of num after changing it: "+ typeof num)


let num_str = "18"
console.log("The datatype of num_str before changing it: "+ typeof num_str)
num_str = Number(num_str)
console.log("The datatype of num_str before changing it: "+ typeof num_str)

let k = "true"
console.log("The datatype of k before changing it "+ typeof k)
k = Boolean(k)
console.log("The datatype of num after changing it "+ typeof k)

if(k === 'true'){
    console.log('k is a string')
}else{
    console.log('k is a boolean')
}

//operators
//Arithmetic(+,-,*,/)
//logical(&&, ||, !)
//Unary(++, --)
//Comparison(==, ===, !=, !==, <, >)

let a = 8
let b = 4
console.log(`${a} % ${b} = ${a%b}`)
console.log(`${a} ** ${b} = ${a ** b}`)//power

console.log('a++',a++)
console.log('++a', ++a)

console.log('++a',++a)
console.log('a++',a++)

let h = 8
var t = 5
let u = 1
console.log("h>t && t<u", (h>t && t>u))
console.log("!u", !u)

var r=56
var q="56"

console.log("r==q",r==q) //same value
console.log("r===q", r===q)//strictly true-> value+datatype

console.log("h>t", h>t)


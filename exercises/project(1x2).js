alert('WELCOME TO THE MOST BASIC CALCULATOR')

//user information
let firstName = prompt('Enter your first name: ')
console.log('Your first name is: ',firstName)

let age = prompt('Enter your age: ')
console.log('Your age is ',age)

document.writeln('Hello '+ firstName + ', you are ' + age + ' years old')

//basic calculator
let firstNumber = prompt('Enter first number: ')
let secondNumber = prompt('Enter your second number: ')

console.log(`${firstNumber} + ${secondNumber} = `, parseInt(firstNumber) + parseInt(secondNumber))
document.writeln(`${firstNumber} + ${secondNumber} = `+ parseInt(firstNumber) + parseInt(secondNumber))
console.log(`${firstNumber} - ${secondNumber} = `,parseInt(firstNumber) - parseInt(secondNumber))
document.writeln(`${firstNumber} - ${secondNumber} = `,parseInt(firstNumber) - parseInt(secondNumber))
console.log(`${firstNumber} * ${secondNumber} = `,parseInt(firstNumber) * parseInt(secondNumber))
document.writeln(`${firstNumber} * ${secondNumber} = `,parseInt(firstNumber) * parseInt(secondNumber))

if (secondNumber === '0') {
    console.error('Error: Division by zero!')
} else {
    console.log(`${firstNumber} / ${secondNumber} = `,parseInt(firstNumber) / parseInt(secondNumber))
    document.writeln(`${firstNumber} / ${secondNumber} = `,parseInt(firstNumber) / parseInt(secondNumber))
}


console.log(`${firstNumber} % ${secondNumber} = `,parseInt(firstNumber) % parseInt(secondNumber))
document.writeln(`${firstNumber} % ${secondNumber} = `,parseInt(firstNumber) % parseInt(secondNumber))
console.log(`${firstNumber} ** ${secondNumber} = `,parseInt(firstNumber) ** parseInt(secondNumber))
document.writeln(`${firstNumber} ** ${secondNumber} = `,parseInt(firstNumber) ** parseInt(secondNumber))

result = parseInt(firstNumber) + parseInt(secondNumber)
console.log(result)

const pi = Math.PI
console.log(pi)
console.log(Math.sqrt(firstNumber))
console.log(Math.max(23,11,44,2,4,5))

var mynum = 45
let myString = 'rash'
var myNull = null
let myUndefined = undefined

console.log('Before conversion')
console.log(typeof(mynum))
console.log('After Conversion:')
String(mynum)
console.log(typeof(mynum))

console.log('Before conversion')
console.log(typeof(myString))
console.log('After Conversion:')
num=Number(myString)
console.log(typeof(num))


console.log(typeof(myNull))
console.log(typeof(myUndefined))

console.log("++firstNumber: ",++firstNumber)
console.log("firstNumber: ", firstNumber++)

var h = 1
var i = 3
let j = 0
var k = 4

console.log("h<i && k>j", (h<i && k>j))
console.log("!(h<i && k>j)", !(h<i && k>j))

var r = 56
var q = "56"
console.log('r==q',r==q)
console.log("r===q",r===q)


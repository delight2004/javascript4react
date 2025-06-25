//fuction nameofhefunction(){
//  block of code
//}
function printMyName() {
    console.log("My name is Delight")
}
printMyName()
//parameter->variables passed into function when defining it
//argument -> values you pass in a function when calling it

function addNumbers(a, b) {
    console.log("a plus b",a+b)
}
addNumbers(12, 7)

//functions with default parameters
function calculatePerimeter(length = 7, width = 5){
    console.log("Perimeter of rectangle is: ",2*(length+width))
}

calculatePerimeter()//by default it has values but you can pass your own if you want

//functions in variables
let multiply = function () {
    console.log("4*6",4*6)
}
multiply()

//annonymous functions e.g our multiply function above
let calculateSquare = function (n) {
    console.log(`The square of ${n} is ${n*n}`)
}
calculateSquare()

//returning function values
function calculateArea(l, w) {
    return l*w
}
console.log("The area of the rectangle is "+calculateArea(5,9))

//arrow functions
let subtract = () => {
    console.log("80 - 4", 80-4)
}
subtract()

let numbers = [1,2,3,4,5]
numbers = numbers.map((num)=>{
    return num*num
})
console.log(numbers)

//spread operator 
let boys = ["James", "Simon", "Levi"]
let students = [
    ...boys, //adding boys to the array
    "Brenda", "Priscilla", "Eva"
]
console.log(students)

//spread operator->rest operator(parameters)
function dispplayValues(value1, ...value2) {//convert Sam and Sundar into an array
    console.log(value1, value2)
}
dispplayValues("Jack", "Sam", "Sundar", 12)

//local variable
function displayStudentDetails(name, course) {
    let country = "Uganda"
    console.log("My name is "+name+", I am pursuing "+course+" and i am from "+country)
}
displayStudentDetails("Delight", "AI/ML")

//var vs let
/*
var-> function scoped
let->Block scoped
*/
function doMagic() {
    if(true){
        let soccer = "Messi"
        var football = "Ronaldo"
    }//soccer stops here
    console.log(football + "is the goat")
    
}//football ends here

//global variable
let address = "Kampala"

function any() {
    console.log(address)
}
//immediately invoked function
(function(){
    console.log("Immediately invoked function")
})()

//nested function
function add(u,v) {
    console.log(u+v)
    let diff = subtract(k,b)
    console.log("difference: ", diff)
    //not complete
}
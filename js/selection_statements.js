/* 
selection statements - decision making statements*/

//if-statement
let num = 7
if(num>=0){
    console.log(num+" is a positive number")
}

//if else statement
let age = 15
if(age>=18){
    console.log("A person of "+age+"years is old")
}else{
    console.log("A person of"+age+"years is young")
}

//if else if statement
let discount
let _age = 18

if (_age<=8) {
    discount = 18
} else if(_age<=15){
    discount = 12
} else if (_age<=25) {
    discount = 10
} else if(_age<= 35){
    discount = 5
} else{
    discount = 0
}

//ternary operator
//syntax->  condition?statement if condition is true:statement if condition is false

let stmt = _age=18? "You are elligible to vote":"You are not elligible to vote"
console.log(stmt)

let _discount=age>=18?5:15
console.log("The offered discount is",_discount)

//switch statements
let m = 9
let n = 4;
let op = '+'

switch (op) {
    case '+':
        console.log('m+n',m+n)
        break;
    case '-':
        console.log('m-n', m-n)
        break;
    case '/':
        console.log('m/n', m/n)
        break
    case '*':
        console.log('m*n', m*n)
    default:
        console.log("Unknown operation")
        break;
}
//loops/iteration statements-used to execute statemnets repeatedly

//while loop
let number = 1;
while (number<=20) {
    console.log(number)
    number++
}

let animals = ["Cow", "Cat", "Dog", "Sheep"]
let index = 0
while (index<animals.length) {
    console.log(animals[index])
    index++
}

//do while
let numbers = [1,2,3,4,5]
let squar_nums = []

let k = 0
do {
    squar_nums.push(numbers[k]**2)
    k++
} while (k<numbers.length);

console.log(squar_nums)

//for loop
//for(initialisation; condition; increment/decrement){
// statement(s)}

let students = [
    {
        name: "Conrad",
        course: "Artificial Intelligence",
        address: "Masaka"
    },
    {
        name: "Levi",
        course: "Information Technology",
        address: "Koboko"
    }

]

for (let n = 0; n < students.length; n++ ){
    console.log(students[n].name + " studies " + students[n].course + "and comes from "+students[n].address)
}
for(let student of students){
    console.log(student.name + " studies " + student.course + "and comes from "+student.address)
}

//for in loop - object
//for of loop - array
//for(variable in array){
//statements}

let days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday"]
for (let day of days_of_the_week) {
    console.log(day)
}

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 2015,
    color: "Silver"
}

for(key in car){
    console.log(key + ":"+ car[key])
} //key


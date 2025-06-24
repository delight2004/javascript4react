//Arrays

let animals = ['cow', 'goat']
console.log(animals)

var fruits = new Array("Mango", "Orange")
console.log(fruits)

var students = new Array(10)

//assigning values
students[0] = "Levi"
students[1] = "Samuel"
students[3] = "Francis"

console.log(students)

let data = ["Amon", 100, 500, "Peter", true]
console.log(data)
console.log(typeof data[1])
console.log("Element at index 2",data[2])

/*students.forEach(item => {
    console.log(item)
})

students.forEach(number =>
{
    sum+=number
}
)
console.log(sum)*/

data[0] = "Simon"
console.log(data)

console.log("Data length", data.length)//property not method->()

//push->insert element at end of array
data.push("William")
console.log("New updated array", data)
data.splice(2, 0, "John", "Isaac")//2-at index 2, 0-don't delete anything, Add John and Isaac from index 2 and then shift the rest
console.log("After splicing",data)

data.splice(2, 3, "Jackie") //deletes after insertion like it counts from the index you are inserting in onwards
console.log("updated(1)", data)

const arr = [10,25,35,40]
const slicedArr = arr.slice(1, 3)//taking this portion
console.log(slicedArr)

data.pop()
console.log("after popping: ",data)

data.shift()
console.log("after shifting: ",data)//shift deletes the first one

let conArr = slicedArr.concat([123, 53, 33])
console.log("after concatenating: ",conArr)

console.log()

conArr.sort()
console.log(`Sorted connArr array is ${conArr}`)

let names = ['ochwo', 'Jane', 'Kevin', 'Dallington']
names.sort()
console.log(names)
console.log(names.reverse())

arr.sort((x,y)=>x - y)

//sorting numbers
let numbers = [1,2,3,4,5]
let squareNumbers = numbers.map((number)=>(
    {
       // return number*number  ****problem****
    }
))

let sum = numbers.reduce((x, y)=> x*y, 1)
console.log(sum)
//java mysqyl database dallington
//dev community
/* 
objects->instances of a class
student-class
Class->group of related objects

*attributes(properties) e.g name, age, address, dob
*behaviours
*/

let student_obj = {
    name: "William Peter",
    address: "Kampala",
    age: 55,
    isStudent: true,
    height: 5.46
}

//object.key

console.log(student_obj.name)
console.log(student_obj['height'])

student_obj.name = "Samuel Mugoya"
student_obj.age = 20
student_obj['isStudent'] = false
console.log(student_obj.name)
console.log(student_obj)

//objects in objects
let student_obj1 = {
    name: "William Peter",
    address: {
        district: "Kampala",
        region: "Central"
    },
    age: 55,
    isStudent: true,
    height: 5.46
}
console.log(student_obj1.address.district)
console.log(student_obj1['address']['region'])

//arrays in objects
let student_obj2 = {
    name: "William Peter",
    address: "Kampala",
    age: 55,
    isStudent: true,
    height: 5.46,
    interests: ["Football", "Cricket"]
}

console.log(student_obj2.interests)
console.log(`First interest is: ${student_obj2.interests[0]}`)

//objects in arrays
let my_students = [
    {
        name: "Herbert",
        age: 18,
        country: "Uganda"
    }, 
    {
        name: "Conrad",
        age: 23,
        country: "Kenya"
    }
]
console.log(my_students[0])
console.log(my_students[0].name)


//objects in (arrays in objects)
let obj = {//object
    interests: [
        {
            sports: "Football"
        },
        {
            social: "Mentorship"
        }
    ]
}

console.log(obj.interests[0])
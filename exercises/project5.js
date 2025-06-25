let studentDirectory=[
    {
        name: "Delight",
        age: 21,
        country: "Uganda",
        interests: ["coding", "gaming"],
        address: {
            district: "Wakiso",
            region: "Central"
        }
    },
    {
        name: "Grace",
        age: 28,
        country: "Uganda",
        interests: ["talking", "content creation"],
         address: {
            district: "Wakiso",
            region: "Central"
        }
    }
]

console.log(studentDirectory)

function addStudentProfile(name, age, country, interestsString, district, region) {
    let registrationDate = "2025-06-26"
    let interestsArray = interestsString.split(',').map(item => item.trim())
    let newStudent={
        name: name,
        age: age,
        country: country,
        interests: interestsArray,
        address: {
            district: district,
            region: region
        }
    }
    
   return newStudent
}

    let newName = prompt("Enter your name: ")
    let newAge = parseInt(prompt("Enter your age: "))
    let newCountry = prompt("Enter your country: ")
    let newInterests =  prompt("Enter your interests: ")
    let newDistrict = prompt("Enter your district name: ")
    let newRegion = prompt("Enter your region name: ")

let addedStudent = addStudentProfile(newName, newAge, newCountry, newInterests, newDistrict, newRegion)


studentDirectory.push(addedStudent)
console.log(addedStudent.name + " has been added to the student directory!")
document.writeln(addedStudent.name + " has been added to the student directory")

function displayAllStudents(directory) {
    for (let student of directory) {
        console.log(`${student.name} is ${student.age} years old and lives in ${student.country}`)
        document.writeln(`${student.name} is ${student.age} years old and lives in ${student.country}`)
    }
    
}
displayAllStudents(studentDirectory)

function showStudentDetails(studentNameToFind, studentDirectory) {
    let foundStudent = null
    for (let student of studentDirectory){
        if(student.name == studentNameToFind){
            foundStudent=student
            
           
        
        
        for(let key in foundStudent){
            console.log(key + ":" + foundStudent[key])
        }
        break
    }
    
    }
    //console.error("Student not found!")
    
    }
           

let viewStudent = prompt("Enter student name to view: ")
showStudentDetails(viewStudent, studentDirectory)


console.log("Interests: " ,...studentDirectory[0].interests)

immediate = (function () {
    console.log("Directory system initialized!")
})()

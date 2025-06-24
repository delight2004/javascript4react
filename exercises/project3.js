let studentRoster = []
let input1 = prompt("Enter first student name: ")
studentRoster.push(input1)
let input2 = prompt("Enter second student name: ")
studentRoster.push(input2)
document.writeln("Current roster: ",studentRoster)
console.log(studentRoster)

let inputBeg = prompt("Enter at beginning student name: ")
studentRoster.splice(0, 0, inputBeg)
let inputRand = prompt("Enter student name at random index: ")
studentRoster.splice(1,0,inputRand)

document.writeln("Updated roster: ",studentRoster)
console.log(studentRoster)

document.writeln("Current total number of students: ",studentRoster.length)
console.log("Current total number of students: ",studentRoster.length)
document.writeln("Current student at index 2: ",studentRoster[2])
console.log("Current student at index 2: ",studentRoster[2])


let inputReplace = prompt("Enter replacing student name: ")
studentRoster.splice(2, 1, inputReplace)
studentRoster.pop()
studentRoster.shift()
document.writeln("Modified roster: ",studentRoster)
console.log("Modified roster: ",studentRoster)


studentRoster.sort()
console.log("Student roster in alphabetical order: ",studentRoster)
console.log("Student roster in reverse order: ",studentRoster.reverse())
let studentDatabase = []

let mystudents_obj={
    name: "Delight",
    age: 21,
    country: "Uganda"
}

studentDatabase.push(mystudents_obj)

document.writeln(JSON.stringify(studentDatabase, null, 2));
console.log(JSON.stringify(studentDatabase, null, 2))

name2 = prompt("Enter your name: ")
age2 = parseInt(prompt("Enter your age: "))
country2 = prompt("Enter your country: ")
mystudenttwo_obj={
    name: name2,
    age: age2,
    country: country2
}

studentDatabase.push(mystudenttwo_obj)

document.writeln(JSON.stringify(studentDatabase, null, 2));
console.log(JSON.stringify(studentDatabase, null, 2))


document.writeln(studentDatabase.name[0])
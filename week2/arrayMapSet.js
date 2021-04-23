console.log('clo1')
//CLO1: JavaScript:

let studentArray = Array(10)

//Question: What is the value shown up in the console for the following statements

console.log(studentArray.length)

console.log(studentArray)

 
console.log('clo2')
//CLO2: JavaScript:

let studentArray = Array.of(10)

//Question: What is the value shown up in the console for the following statements

console.log(studentArray.length)

console.log(studentArray)

 
console.log('clo3')
//CLO3: JavaScript:

let grades = [90,98,78,99]

let studentGrades = Array.from(grades, g=> g * 110);

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades.length)

console.log(studentGrades)

 
console.log('clo4')
//CLO4: JavaScript:

let grades = [90,98,78,99]
let studentGrades = Array.from(grades, function(g){
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 
console.log('clo5')
//CLO5: JavaScript:

let grades = [90,98,78,99]
let studentGrades = Array.from(grades, g=>{
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 
console.log('clo6')
//CLO6: JavaScript:

let grades = [90,98,78,99]
let studentGrades = grades.find(v=> v== 90)

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 
console.log('clo7')
//CLO7: JavaScript:

let grades = [90,98,78,99]
let studentGrades = grades.find(v => v >= 90)

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 
console.log('clo8')
//CLO8: JavaScript:

let grades = [90,98,78,99]
let studentGrades = grades.map(v => v * .0 90)

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 
console.log('clo9')
//CLO9: JavaScript:

let grades = [90,98,78,99]
let studentGrades = ...grades

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 
console.log('clo10')
//CLO10: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")


//Question: What is the value shown up in the console for the following statements

console.log(people)

 
console.log('clo11')
//CLO11: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.delete(student)

//Question: What is the value shown up in the console for the following statements

console.log(people)

 
console.log('clo12')
//CLO12: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.clear()

//Question: What is the value shown up in the console for the following statements

console.log(people)

 
console.log('clo13')
//CLO13: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.has(student);

//Question: What is the value shown up in the console for the following statements

console.log(result)

 
console.log('clo14')
//CLO14: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.keys(student);

//Question: What is the value shown up in the console for the following statements

console.log(result)

 
console.log('clo15')
//CLO15: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.values(student);

//Question: What is the value shown up in the console for the following statements

console.log(result)

 
console.log('clo16')
//CLO16: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new WeakMap()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

ladjunct = null

//Question: What is the value shown up in the console for the following statements

console.log(people.size)

//Wait 5 min and re-execute (a)

//Question: What is the value shown up in the console for the following statements

console.log(people.size)

 
console.log('clo17')
//CLO17: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Set()

people.add(student)
people.add(adjunct)

people.add(adjunct)

//Question: What is the value shown up in the console for the following statements

console.log(people.size)

 
console.log('clo17')
//CLO17: JavaScript:

let students =[ {name:'John Masson'}, {name:'Don Vasco'}, {name:'Mary Landley'}
let people = new Set(students)
//Question: What is the value shown up in the console for the following statements

console.log(people.has({name:'Dave Vasco'})


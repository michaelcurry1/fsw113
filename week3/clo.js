//CLO1: JavaScript:

const studentGrades1 = [ 90, 80 , 88, 98]
const curveGrages1 = function( grades, percentage){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages1(studentGrades1)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)


//CLO2: JavaScript:

let studentGrades2 = [ 90, 80 , 88, 98]
let curveGrages2 = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages2(studentGrades2)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO3: JavaScript:

let studentGrades3 = [ 90, 80 , 88, 98]
let curveGrages3 = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages3(studentGrades3, 1.33)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO3: JavaScript:

let studentGrades4 = [ 90, 80 , 88, 98]
let curveGrages4 = function(  percentage = 1.10,...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages4(...studentGrades4, 1.33)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO4: JavaScript:

let studentGrades5 = [ 90, 80 , 88, 98]
let curveGrages5 = function(  percentage = 1.10,...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages5(...studentGrades5)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO5: JavaScript:

let studentGrades6 = [ 90, 80 , 88, 98]
let curveGrages6 = function(  percentage = 1.10,...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages6(1.24, ...studentGrades6)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO6: JavaScript:

let studentGrades7 = [ 90, 80 , 88, 98]
let curveGrages7 = function(  percentage = 1.10,...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages7(undefined, ...studentGrades7)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO7: JavaScript:

let studentGrades8 = [ 90, 80 , 88, 98]

let percentageCurve = 0.98
let curveGrages8 = function(  percentage = percentageCurve,...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages8(undefined, ...studentGrades8)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO7: JavaScript:

let studentGrades9 = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages9 = function(  percentage = avg(studentGrades9),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages9(undefined, ...studentGrades9)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)


//CLO8: JavaScript:

let studentGrades10 = [ 90, 80 , 88, 98]
const avg1 = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages10 = function(  percentage = avg1(studentGrades10),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages10(1.3, ...studentGrades10)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO9: JavaScript:

let studentGrades11 = [ 90, 80 , 88, 98]
const avg2 = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages11 = function(  percentage = avg2(studentGrades11),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages11(1.3, 68,56, ...studentGrades11)

//Question: What is the value shown up in the console for the following statements?

 console.log(result)

 

//CLO9: JavaScript: Dynamic function

let count = new Function('grades', 'grades.length')

var result = count([ 90, 80 , 88, 98])

//Question: What is the value shown up in the console for the following statements?

 console.log(result)


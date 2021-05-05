//CLO1: JavaScript:

let studentGrades = [ 90, 80 , 88, 98]
var result = [...studentGrades]

//Question: What is the value shown up in the console for the following statements?

 console.log(result)
//[ 90, 80, 88, 98 ]
 console.log(result  instanceof Array)
//true
 

//CLO2: JavaScript:

// let myGrade = 99
// var result = [...myGrade]

//Question: What is the value shown up in the console for the following statements?

//  console.log(result)
//TypeError: number 99 is not iterable (cannot read property Symbol(Symbol.iterator))
 

// //CLO3: JavaScript:

let studentGrades1 = [ 90, 80 , 88, 98]
var maxGrade = Math.max(...studentGrades1)

//Question: What is the value shown up in the console for the following statements?

 console.log(maxGrade)
//98
 

// //CLO4: JavaScript:

let studentGrades2 = [ 90, 80 , 88, 98]
var gradeArray = [...studentGrades2]

// //Question: What is the value shown up in the console for the following statements?

 console.log(gradeArray)
//[ 90, 80, 88, 98 ]
 

// //CLO4: JavaScript:

let studentGrades3 = [ ...[ , , ]]

// //Question: What is the value shown up in the console for the following statements?

 console.log(studentGrades3)
//[ undefined, undefined ]
 

// //CLO4: JavaScript:

let myhouseNumber = [..."8976"]

// //Question: What is the value shown up in the console for the following statements?

 console.log(Math.max(myhouseNumber))
//NaN
 

// //CLO5: JavaScript:

let myhouseNumber1 = [..."8976", "AB", "CDEF"]

// //Question: What is the value shown up in the console for the following statements?

 console.log(Math.max(myhouseNumber1))
//NaN
 

// //CLO7: JavaScript: Object Literals

var studentName = "James Moore"

var dob = "02/02/2002"

var studentInfo = {
          [studentName]:studentName ,
          [dob]:dob
}

// //Question: What is the value shown up in the console for the following statements?

 console.log(studentInfo)
//{ 'James Moore': 'James Moore', '02/02/2002': '02/02/2002' }
 

// //CLO7 JavaScript: Object Literals

var studentName = "James Moore"

var dob = "02/02/2002"

var studentInfo = {
          studentName,
         dob
}

// //Question: What is the value shown up in the console for the following statements?

 console.log(studentInfo)
//{ studentName: 'James Moore', dob: '02/02/2002' }
 

// //CLO8: JavaScript: Object Literals

var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
    studentName,
    dob,
    currentAge( ) {
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}

var result = studentInfo.currentAge()

// //Question: What is the value shown up in the console for the following statements?

 console.log(studentInfo)
// {
//   studentName: 'James Moore',
//   dob: '02/02/2002',
//   currentAge: [Function: currentAge]
// }
 

// //CLO9: JavaScript: Object Literals

var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
    studentName,
    dob,
    age : function( ) {
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}

var result = studentInfo.age()

// //Question: What is the value shown up in the console for the following statements?

 console.log(studentInfo)
 //{ studentName: 'James Moore', dob: '02/02/2002', age: [Function: age] }
 

// //CLO10: JavaScript: Object Literals

var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
    studentName,
    dob,
    [ "ageOf Student"] : function( ) {
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}

var result = studentInfo[ "ageOf Student"] ( )

// //Question: What is the value shown up in the console for the following statements?

 console.log(studentInfo)
//  {
//   studentName: 'James Moore',
//   dob: '02/02/2002',
//   'ageOf Student': [Function: ageOf Student]
// }

// //CLO11: JavaScript: Object Literals

var columnName = "Name";
var name = {};
var student = {
  get [columnName]() {
    return name;
  },
  set [columnName](value) {
    name = value;
  },
};

student.Name = "Harry Potter";

// //Question: What is the value shown up in the console for the following statements?

 console.log(student.Name); 
 //Harry Potter
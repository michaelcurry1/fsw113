//CLO1: JavaScript:

let studentGrades = [ 90, 80 , 88, 98]
var result = ...studentGrades

//Question: What is the value shown up in the console for the following statements?

a) console.log(result)

b) console.log(result is instanceof array)

 

//CLO2: JavaScript:

let myGrade = 99
var result = ...myGrade

//Question: What is the value shown up in the console for the following statements?

a) console.log(result)

 

//CLO3: JavaScript:

let studentGrades = [ 90, 80 , 88, 98]
var maxGrade = Math.Max(...studentGrades)

//Question: What is the value shown up in the console for the following statements?

a) console.log(maxGrade)

 

//CLO4: JavaScript:

let studentGrades = [ 90, 80 , 88, 98]
var gradeArray = [...studentGrades]

//Question: What is the value shown up in the console for the following statements?

a) console.log(gradeArray)

 

//CLO4: JavaScript:

let studentGrades = [ ...[ , , ]]

//Question: What is the value shown up in the console for the following statements?

a) console.log(studentGrades)

 

//CLO4: JavaScript:

let myhouseNumber = [..."8976"]

//Question: What is the value shown up in the console for the following statements?

a) console.log(Math.max(myhouseNumber))

 

//CLO5: JavaScript:

let myhouseNumber = [..."8976", "AB", "CDEF"]

//Question: What is the value shown up in the console for the following statements?

a) console.log(Math.max(myhouseNumber))

 

//CLO7: JavaScript: Object Literals

var studentName = "James Moore"

var dob = "02/02/2002"

var studentInfo = {
          [studentName]:studentName ,
          [dob]:dob
}

//Question: What is the value shown up in the console for the following statements?

a) console.log(studentInfo)

 

//CLO7 JavaScript: Object Literals

var studentName = "James Moore"

var dob = "02/02/2002"

var studentInfo = {
          studentName,
         dob
}

//Question: What is the value shown up in the console for the following statements?

a) console.log(studentInfo)

 

//CLO8: JavaScript: Object Literals

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

//Question: What is the value shown up in the console for the following statements?

a) console.log(studentInfo)

 

//CLO9: JavaScript: Object Literals

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

//Question: What is the value shown up in the console for the following statements?

a) console.log(studentInfo)

 

//CLO10: JavaScript: Object Literals

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

var result = studentInfo.[ "ageOf Student"] ( )

//Question: What is the value shown up in the console for the following statements?

a) console.log(studentInfo)


//CLO11: JavaScript: Object Literals

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

//Question: What is the value shown up in the console for the following statements?

a) console.log(student.Name); 
//b) In the "scr" folder create a file named Student7.js to add the following javascript.

import { default as Person } from "./Person7"

class Student extends Person {
    constructor( name){
        super(name)
        console.log( "Student Class constructor")
     }
     hello(){
        console.log("Hi I am a student a specialized person") // override
    }
}

export default Student

 

//in index.js file delete all the contents and add the following javascript.

import { default as Student } from "./Student7"

let student = new Student("John Woods" )

//Question: What are the values in the Console tab in the Developer tools window?

console.log( student.hello( ))
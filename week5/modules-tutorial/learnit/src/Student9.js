//b) In the "scr" folder create a file named Student9.js to add the following javascript.

import { default as Person } from "./Person9"

class Student extends Person {
    constructor( name){
        super(name)
        console.log( "Student Class constructor")
     }
     hello(){
        console.log("Hi I am a student a specialized person") // override
        super.hello( )
    }
}

export default Student

 

//in index.js file delete all the contents and add the following javascript.

import { default as Student } from "./Student9"

let student = new Student("John Woods" )

//Question: What are the values in the Console tab in the Developer tools window?

console.log( student.hello( ))
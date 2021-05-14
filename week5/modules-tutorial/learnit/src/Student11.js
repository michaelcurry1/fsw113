//b) In the "scr" folder create a file named Student11.js to add the following javascript.

import { default as Person } from "./Person11"

class Student extends Person {
    constructor( first, last ){
        super(first, last)
       let first = first
       let last = last
     }
      allCaps(){
       console.log( `The full name of the person = ${last.toUpperCase( )}, ${first.toUpperCase( )}`)
    }
}

export default Student

 

//in index.js file delete all the contents and add the following javascript.

import { default as Student } from "./Student11"

let student = new Student("John", "Smith" )

//Question: What are the values in the Console tab in the Developer tools window?

console.log( student.allCaps( ))

console.log( student.fullName( ))
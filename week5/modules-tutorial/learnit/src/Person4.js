//CLO4: JavaScript: In the "scr" folder create a file named Person4.js to add the following javascript.

class Person( ){

   let firstName = "John"

   constructor( ){
         console.log( "Constructing Person ")
    }

    hello ( ) {
             console.log( "Hi I am a person")

    }

}

export default Person

//in index.js file delete all the contents and add the following javascript.

import { default as Person } from "./Person3"

let person = new Person( )

//Question: What are the values in the Console tab in the Developer tools window?

console.log( person.hello( ))
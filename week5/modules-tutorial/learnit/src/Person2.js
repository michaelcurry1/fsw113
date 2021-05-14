//CLO2: JavaScript: In the "scr" folder create a file named Person2.js to add the following javascript.

class Person( ){

    hello ( ) {
             console.log( "Hi I am a person")

    }

}

export default Person

//in index.js file delete all the contents and add the following javascript.

import { default as Person } from "./Person2"

let person = new Person( )

//Question: What are the values in the Console tab in the Developer tools window?

console.log(typeof person)

console.log( person.hello( ))

console.log( `is person instance of  Person  is ${ person instanceof Person}`)
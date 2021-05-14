//CLO12: Advance JavaScript inheritance:

//a) In the "scr" folder create a file named Person12.js to add the following javascript.

class Person( ){

    static fullname (first, last ) {
             console.log( `The full name of the person = ${last}, ${first}`)

    }

}

export default Person

//in index.js file delete all the contents and add the following javascript.

import { default as Person } from "./Person12"

//Question: What are the values in the Console tab in the Developer tools window?

console.log( Person.fullName('Jammy', 'Harding' ))
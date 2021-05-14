//CLO1: JavaScript: In the "scr" folder create a file named Person1.js to add the following javascript.

class Person( ){

}

export default Person

//in index.js file delete all the contents and add the following javascript.

import { default as Person } from "./Person1"

//Question: What is the value shown up in the Console tab in the Developer tools window?
console.log( "From Person1.js ", typeof Person)
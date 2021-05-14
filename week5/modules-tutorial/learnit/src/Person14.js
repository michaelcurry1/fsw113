//CLO14: Advance JavaScript inheritance:

//a) In the "scr" folder create a file named Person14.js to add the following javascript.

class Person( ){

}

export default Person

//in index.js file delete all the contents and add the following javascript.

import { default as Person } from "./Person13"

Person.firstName = 'Mary'

Person.lastName = 'Lutten'

 

//Question: What are the values in the Console tab in the Developer tools window?

console.log( Person.firstName, Person.lastName)
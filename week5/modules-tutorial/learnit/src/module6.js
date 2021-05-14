//CLO6: JavaScript: In the "scr" folder create a file named module6.js and add the following javascript.

let courseName ="FSW113"
export default courseName

//in index.js file delete all the contents and add the following javascript.

import { default as Course}  from "./module6" // .js ext is not required
console.log( "From Module 6", Course)

//Question: What is the Order of the loading the modules shown up in the Console tab in the Developer tools window?
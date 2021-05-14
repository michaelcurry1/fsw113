//CLO9: JavaScript: In the "scr" folder create a file named module9.js and add the following javascript.

let courseName ="FSW113"
let liveSession = "02/02/2020"

export {courseName ,  liveSession}

//in index.js file delete all the contents and add the following javascript.

import *  as mod from "./module9" // .js ext is not required
console.log( "From Module 9", mod.courseName)
console.log( "From Module 9", mod.liveSession)

//Question: What is the value in the Console tab in the Developer tools window?
//CLO8: JavaScript: In the "scr" folder create a file named module8.js and add the following javascript.

let courseName ="FSW113"
let liveSession = "02/02/2020"

export {courseName as default,  liveSession}

 

//in index.js file delete all the contents and add the following javascript.

import { default as Course, liveSession as Session}  from "./module8" // .js ext is not required
console.log( "From Module 8", Course)
console.log( "From Module 8", Session)

//Question: What is the value in the Console tab in the Developer tools window?
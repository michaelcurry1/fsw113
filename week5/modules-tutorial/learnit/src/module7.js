//CLO7: JavaScript: In the "scr" folder create a file named module7.js and add the following javascript.

let courseName ="FSW113"
let liveSession = "02/02/2020"

export { courseName,  liveSession}

 

//in index.js file delete all the contents and add the following javascript.

import { default as Course}  from "./module7" // .js ext is not required
console.log( "From Module 7", Course)

//Question: What is the value in the Console tab in the Developer tools window?
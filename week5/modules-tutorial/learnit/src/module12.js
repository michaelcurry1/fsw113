//CLO12: JavaScript: In the "scr" folder create a file named module12.js and add the following javascript.

let courseName ="FSW113"
let liveSession = "02/02/2020"

let combine = function( ){

  return ` CourseName = ${courseName}  in ${liveSession} `

}
export {courseName ,  liveSession, combine}

 

//in index.js file delete all the contents and add the following javascript.

import *  as mod from "./module11" // .js ext is not required

 

mod.courseName = "FSW113"
mod.liveSession = "Spring2020"

console.log( "From Module 12", mod.courseName)
console.log( "From Module 12", mod.liveSession)

console.log( "From Module 12", mod.combine( ))

//Question: What is the value in the Console tab in the Developer tools window?
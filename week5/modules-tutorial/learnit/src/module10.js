//CLO10: JavaScript: In the "scr" folder create a file named module10.js and add the following javascript.

let courseName ="FSW113"
let liveSession = "02/02/2020"

export {courseName ,  liveSession}

//in index.js file delete all the contents and add the following javascript.

import{ courseName as Course, liveSession as Session} "./module10" // .js ext is not required

courseName ="FSW220"
console.log( "From Module 10", courseName)
console.log( "From Module 10", liveSession)

//Question: What is the value in the Console tab in the Developer tools window?
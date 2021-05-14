
//CLO4: JavaScript: In the "scr" folder create a file named module4.js and add the following javascript.

console.log("Load Module 4 .... Start")

let courseName ="FSW113"
let liveSession = "02/02/2020"

export let Course = courseName
export let Session =  liveSession

console.log("Load Module 4 ..... End")

//in index.js file delete all the contents and add the following javascript.

console.log("Load index.js.... Start")

import { Course as CourseId , Session } from "./module4" // .js ext is not required
console.log( "From Module 4", Course)
console.log( "From Module 4", Session)

console.log("Load index.js.... End")

//Perform the following steps to debug your javascript:

//Step 1: In the Terminal Console  Type "Ctrl+c" to stop the execution process.

//Step 2: In the terminal Window type "npm start".
//You should see the following screen in the terminal window.

//Step 3: Now press "fn" key and the "F12" key together. Then click on the Console Tab. You should see the following output.

//Question: What is the Order of the loading the modules shown up in the Console tab in the Developer tools window?
//CLO3: JavaScript: In the "scr" folder create a file named module3.js and add the following javascript.

let courseName ="FSW113"
let liveSession = "02/02/2020"

export let Course = course name
export let Session =  liveSession

//in index.js file delete all the contents and add the following javascript.

import { Course as CourseId , Session } from "./module3" // .js ext is not required
console.log( "From Module 3", Course)
console.log( "From Module 3", Session)

//Perform the following steps to debug your javascript:

//Step 1: In the Terminal Console  Type "Ctrl+c" to stop the execution process.

//Step 2: In the terminal Window type "npm start".
//You should see the following screen in the terminal window.

//Step 3: Now press "fn" key and the "F12" key together. Then click on the Console Tab. You should see the following output.

//Question: What is the value shown up in the Console tab in the Developer tools window?
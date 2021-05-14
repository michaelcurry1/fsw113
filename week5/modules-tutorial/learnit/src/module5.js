CLO5: JavaScript: In the "scr" folder create a file named module5.js and add the following javascript.

let courseName ="FSW113"
export default courseName

//in index.js file delete all the contents and add the following javascript.

import Course  from "./module5 // .js ext is not required
console.log( "From Module 5", Course)
//Perform the following steps to debug your javascript:

//Step 1: In the Terminal Console  Type "Ctrl+c" to stop the execution process.

//Step 2: In the terminal Window type "npm start".
//You should see the following screen in the terminal window.

//Step 3: Now press "fn" key and the "F12" key together. Then click on the Console Tab. You should see the following output.

//Question: What is the Order of the loading the modules shown up in the Console tab in the Developer tools window?
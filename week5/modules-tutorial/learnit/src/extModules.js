//CLO1: JavaScript: Create a file named external.js and add the following javascript codes

number = 10

//Question: What is the value shown up in the console for the following statements?

 console.log(name)

 

//CLO2: JavaScript: Create another file named main.js and add the following javascript codes

const ext = require("./external.js")

//Question: What is the value shown up in the console for the following statements?

 

//CLO3: JavaScript: Create another file named main.js and add the following javascript codes

const ext = require("./external.js")

//Question: What is the value shown up in the console for the following statements?



     console.log("from ext", number)

 

//CLO4: JavaScript: goto file named external.js and add the following javascript codes

"use strict"

//then execute main.js

//Question: What is the value shown up in the console for the following statements?



     console.log("from ext", number)

 

//CLO5: JavaScript: goto file named external.js and add the following javascript codes

"use strict"

//then execute main.js

//Question: What is the value shown up in the console for the following statements?



     console.log("from ext", number)

//CLO6: JavaScript: goto file named external.js and add the following javascript codes

// replace number = 10 with
 var number =10;

// then execute main.js

//Question: What is the value shown up in the console for the following statements?



     console.log("from ext", number)

//CLO7: JavaScript: goto file named external.js and add the following javascript codes

// replace number = 10 with
// var number =10;

 //exports.Number  = number

// then execute main.js

//Question: What is the value shown up in the console for the following statements?



     console.log("from ext", ext.Number)

 

//CLO8: JavaScript: goto file named external.js and add the following javascript codes

//Add:
// var name = "John"
// exports.Number  = number
// exports.Name  = name

// then execute main.js

//Question: What is the value shown up in the console for the following statements?



     console.log("from ext", ext.Number)
     console.log("from ext", ext.Name)
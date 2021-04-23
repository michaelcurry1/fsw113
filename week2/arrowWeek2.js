console.log('clo1')
//CLO1:JavaScript
var temp = ( ) => 104
console.log(typeof temp)
console.log(temp())
//output function 1st console . 104 2nd output
console.log('clo2')
//CLO2:JavaScript
var temp = multiplier => 104 * multiplier
console.log(temp(2))

console.log('clo3')
//CLO3:JavaScript
var temp = ( multiplier, devider ) => 104 * multiplier/ devider
console.log(temp(3, 6))

console.log('clo4')
//CLO4:JavaScript
var temp = ( multiplier, divider ) => {  // block

    let result = 104 * multiplier

    if ( result){

       result = 104 / divider

    }

  return result

}
 console.log(temp(3, 6))

 console.log('clo5')
 // CLO5: JavaScript:
var clickButton = () => { 
   console.log(this)

}

  
clickButton()

console.log('clo6')
// CLO6: JavaScript:
 var clickButton = function (){

    console.log(this)
 }
 clickButton()

 console.log('clo7')
 // CLO7: JavaScript:
 var clickButton = ( )  => {

    console.log(this)
 }
 clickButton()

 console.log('clo8')
 // CLO8: JavaScript:
 var person =  {

    name : 'David Smith',

    age : 56,

    details: function ( ){

          console.log(this)

    }

}
person.details( )

console.log('clo9')
// CLO9: JavaScript:
 var person =  {

    name : 'David Smith',

    age : 56,

    details: ( ) => {

          console.log(this)

    }

}

person.details( )
console.log('clo10')
 // CLO10: JavaScript:
 var temp = () => 100
 console.log(temp)



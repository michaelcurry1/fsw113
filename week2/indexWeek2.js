//CLO1:JavaScript
var temp = ( ) => 104
console.log(typeof temp)
console.log(temp())

//CLO2:JavaScript
var temp = multiplier => 104 * multiplier
console.log(temp(2))

//CLO3:JavaScript
var temp = ( multiplier, devider ) => 104 * multiplier/ devider
console.log(temp(3, 6))

//CLO4:JavaScript
var temp = ( multiplier, divider ) => {  // block

    let result = 104 * multiplier

    if ( result){

       result = 104 / divider

    }

  return result

}
 console.log(temp(3, 6))

// CLO5: JavaScript:
var clickButton = function ('click', function(){

    console.log(this)
 }
 console.log(clickButton())

 // CLO6: JavaScript:
 var clickButton = function (){

    console.log(this)
 }
 clickButton()

 // CLO7: JavaScript:
 var clickButton = ( )  => {

    console.log(this)
 }
 clickButton()

 // CLO8: JavaScript:
 var person =  {

    name : 'David Smith',

    age : 56,

    details: function ( ){

          console.log(this)

    }

}
person.details( )

 // CLO9: JavaScript:
 var person =  {

    name : 'David Smith',

    age : 56,

    details: ( ) => {

          console.log(this)

    }

}

person.details( )

 // CLO10: JavaScript:
 var temp = () => 100
 console.log(temp)



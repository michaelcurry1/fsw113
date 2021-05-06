

/* 
  index.js
*/
$(document).ready(function() {
  
  "use strict";
  var resultList = $("#resultList");
  resultList.text("... Result");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function() {
    resultList.toggle(500);

    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide");
  });

  var listItems = $("header nav li");
  listItems.css("font-weight", "bold");
  listItems.filter(":first").css("font-size", "18px");

  $("#starWarApiSearchForm").on("submit", function() {
    //
    var peopleId = $("#peopleId").val();

    if (peopleId) {

      resultList.text("Performing search...");

      var starWarApiSearch = "https://swapi.dev/api/people/" + peopleId;
      
      $.get(starWarApiSearch)
        .success(function(r) {
          displayResults(r);
        })
        .fail(function(err) {
          console.log("Failed to query Star war API");
        })
        .done(function() {
          //
        });
    }

    return false;
  });

  function displayResults(results) {
   
    resultList.text(JSON.stringify(results));


  }

});
// console.log(axios)

function getAllPeople(){
axios.get("https://swapi.dev/api/people/").then(response=>{
console.log(response.data.results)
var people = response.data.results
people=peopleObjects(people)
console.log(people)
for(let i = 0; i < people.length; i++){
  const character = document.createElement('h1')
  character.textContent = people[i].name
  document.body.appendChild(character)

  // for(let i = 0; i < height.length; i++){
  // const character1 = document.createElement('h1')
  // character1.textContent = height[i].name
  // document.body.appendChild(character1)

  // for(let i = 0; i < films.length; i++){
  // const character2 = document.createElement('h1')
  // character2.textContent = films[i].name
  // document.body.appendChild(character2)
  // }
  // }
}
}
).catch(err=>{
  console.log(err)
}

)
}
getAllPeople()

function peopleObjects(array){
  
console.log(array)
var newArray=array.map(person=>{
  console.log(person)
  return({
    name:person.name,
    height:person.height, 
    films:person.films
  })
})
return newArray
}

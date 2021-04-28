/* 
  index.js
*/
const starwars_data = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/6/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/7/"
    ],
    "species": [
      "https://swapi.dev/api/species/1/"
    ],
    "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
  },
  {
      "name": "C-3PO", 
      "height": "167", 
      "mass": "75", 
      "hair_color": "n/a", 
      "skin_color": "gold", 
      "eye_color": "yellow", 
      "birth_year": "112BBY", 
      "gender": "n/a", 
      "homeworld": "http://swapi.dev/api/planets/1/", 
      "films": [
          "http://swapi.dev/api/films/1/", 
          "http://swapi.dev/api/films/2/", 
          "http://swapi.dev/api/films/3/", 
          "http://swapi.dev/api/films/4/", 
          "http://swapi.dev/api/films/5/", 
          "http://swapi.dev/api/films/6/"
      ], 
      "species": [
          "http://swapi.dev/api/species/2/"
      ], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:10:51.357000Z", 
      "edited": "2014-12-20T21:17:50.309000Z", 
      "url": "http://swapi.dev/api/people/2/"
  },
  
  {
      "name": "Obi-Wan Kenobi", 
      "height": "182", 
      "mass": "77", 
      "hair_color": "auburn, white", 
      "skin_color": "fair", 
      "eye_color": "blue-gray", 
      "birth_year": "57BBY", 
      "gender": "male", 
      "homeworld": "http://swapi.dev/api/planets/20/", 
      "films": [
          "http://swapi.dev/api/films/1/", 
          "http://swapi.dev/api/films/2/", 
          "http://swapi.dev/api/films/3/", 
          "http://swapi.dev/api/films/4/", 
          "http://swapi.dev/api/films/5/", 
          "http://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "http://swapi.dev/api/vehicles/38/"
      ], 
      "starships": [
          "http://swapi.dev/api/starships/48/", 
          "http://swapi.dev/api/starships/59/", 
          "http://swapi.dev/api/starships/64/", 
          "http://swapi.dev/api/starships/65/", 
          "http://swapi.dev/api/starships/74/"
      ], 
      "created": "2014-12-10T16:16:29.192000Z", 
      "edited": "2014-12-20T21:17:50.325000Z", 
      "url": "http://swapi.dev/api/people/10/"
  }
  ]         
const items = starwars_data[0].name
console.log(items)
// console.log(JSON.stringify(starwars_data));

// const list = JSON.stringify(starwars_data)
// console.log(list)

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
    debugger
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

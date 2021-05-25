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
a
  var listItems = $("header nav li");
  listItems.css("font-weight", "bold");
  listItems.filter(":first").css("font-size", "18px");

  $("#starWarApiSearchForm").on("submit", function() {
    
    var peopleId = $("#peopleId").val();

    if (peopleId) {

      resultList.text("Performing search...");

      var starWarApiSearch =  "https://swapi.dev/api/people/" + peopleId;
      
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

  async function displayResults(results) {
   
    await resultList.text(JSON.stringify(results));


  }

});

// Back End

function Destination (location, timeOfYear){
  this.location = location;
  this.landmarks = [];
  this.timeOfYear = timeOfYear;
}

function Landmark(name, notes) {
  this.name = name;
  this.notes = notes;
}

Destination.prototype.addLandmark = function(name, notes){
  var newLandmark = new Landmark(name, notes);
  this.landmarks.push(newLandmark);
}

// Front End
$(function(){

  function addLandmarkDiv() {
    $("#new-landmarks").append('<div class="new-landmark">' +
      '<div class="form-group">' +
        '<label for="landmark">Enter a Landmark:</label>' +
        '<input type="text" class="form-control landmark-input">' +
        '<label for="notes">Enter notes about Landmark:</label>' +
        '<input type="text" class="form-control notes-input">' +
      '</div>' +
    '</div>');
  };

  $("#landmarkButton").click(function() {
    addLandmarkDiv();
  });



  $("form#destinationForm").submit(function() {
    event.preventDefault();
    var inputLocation = $("input#location").val();
    var inputTimeOfYear = $("input#timeOfYear").val();

    var currentDest = new Destination(inputLocation, inputTimeOfYear);
    $(".new-landmark").each(function(){
      var inputLandmark = $(this).find(".landmark-input").val();
      var inputNotes = $(this).find(".notes-input").val();
      currentDest.addLandmark(inputLandmark, inputNotes);
    });
    console.log(currentDest);

    $("#destinationList").append("<li class='dest'>"+currentDest.location+"</li>");
    $(".dest").last().click(function() {
      $("#destinationDetails h3").text(currentDest.location);
      $("#ToY").text(currentDest.timeOfYear);
      $("#landmark-section").empty();
      currentDest.landmarks.forEach(function(landmark) {
        $("#landmark-section").append("<h5>"+landmark.name+"</h5><ul><li>" + landmark.notes+"</li></ul>");
      });
    });

    // clear form
    var inputLocation = $("input#location").val("");
    var inputTimeOfYear = $("input#timeOfYear").val("");
    var inputLandmark = $("input#landmark").val("");
    var inputNotes = $("input#notes").val("");
    $("#new-landmarks").empty();
    addLandmarkDiv();

  })
});

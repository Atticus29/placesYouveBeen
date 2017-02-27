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
  $("form#destinationForm").submit(function() {
    event.preventDefault();
    var inputLocation = $("input#location").val();
    var inputTimeOfYear = $("input#timeOfYear").val();
    var inputLandmark = $("input#landmark").val();
    var inputNotes = $("input#notes").val();

    var destination1 = new Destination(inputLocation, inputTimeOfYear);
    destination1.addLandmark(inputLandmark, inputNotes);
    console.log(destination1);
    var inputLocation = $("input#location").val("");
    var inputTimeOfYear = $("input#timeOfYear").val("");
    var inputLandmark = $("input#landmark").val("");
    var inputNotes = $("input#notes").val("");

  })
});

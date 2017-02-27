// Back End

function Destination (location, timeOfYear, notes){
  this.location = location;
  this.landmarks = [];
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Destination.prototype.addLandmark = function(landmark){
  this.landmarks.push(landmark);
}

// Front End
$(function(){
  $("form#destinationForm").submit(function() {
    event.preventDefault();
    var inputLocation = $("input#location").val();

    var destination1 = new Destination(inputLocation);
    console.log(destination1);

  })
});

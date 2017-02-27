// Back End

// Front End
$(function(){
  $("form#destinationForm").submit(function() {
    event.preventDefault();
    var inputLocation = $("input#location").val();

    var destination = new Destination(inputLocation);
    console.log(destination);

  })
});

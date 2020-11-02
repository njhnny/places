//Business logic 

// User Interface Logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    const inputtedLocation = $("input#new-location-name").val();
    const inputtedDate = $("input#new-date").val();
    const inputtedNotes = $("input#new-notes").val();

    $("input#new-location-name").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("");
    
    console.log(inputtedLocation);
    console.log(inputtedDate);
    console.log(inputtedNotes);
  });
});


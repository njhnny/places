//Business logic 
function TravelLog() {
  this.entry = [];
  this.currentId = 0;
}

TravelLog.prototype.addLocation = function(newLocation) {
  newLocation.id = this.assignId();
  this.entry.push(newLocation);
}

TravelLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TravelLog.prototype.findLocation = function(id) {
  for (let i=0; i < this.entry.length; i ++) {
    if (this.entry[i]) {
      if (this.entry[i].id == id) {
        return this.entry[i];
      }
    }
  };
  return false
}

TravelLog.prototype.deleteLocation = function(id) {
  for (let i=0; i< this.entry.length; i ++) {
    if (this.entry[i]) {
      if (this.entry[i].id == id) {
        delete this.entry[i];
        return true;
      }
    }
  };
  return false
}

function Location(location, date, notes) {
  this.location = location;
  this.date = date;
  this.notes = notes;
}

// User Interface Logic
let travelLog = new TravelLog();

function displayLocationDetails(travelLogToDisplay) {
  let travelList = $("ul#travelLog");
  let htmlForTravelList = "";
  travelLogToDisplay.entry.forEach(function(newLocation) {
    htmlForTravelList += "<li id=" + newLocation.id + ">" + newLocation.location + " " + "</li>";
  });
  travelList.html(htmlForTravelList);
}

function showNewLocation(newLocationid) {
  const contact = addressBook.findContact(contactId);
  $("#new-location").show();
  $(".location").html(newLocation.location);
  $(".date").html(newLocation.date);
  $(".notes").html(newLocation.notes);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + newLocation.id + ">Delete</button>");
}

function attachTravelListeners() {
  $("ul#travelLog").on("click", "li", function() {
    showNewLocation(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function() {
    travelLog.deleteLocation(this.id);
    $("#show-travelLog").hide();
    displayLocationDetails(travelLog);
  });
};

$(document).ready(function() {
  attachTravelListeners();
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    const inputtedLocation = $("input#new-location-name").val();
    const inputtedDate = $("input#new-date").val();
    const inputtedNotes = $("input#new-notes").val();

    $("input#new-location-name").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("");
    

    let newLocation = new Location(inputtedLocation, inputtedDate, inputtedNotes);
    travelLog.addLocation(newLocation);
    
  });
});


# _Places You've Been_
### 11.2.2020
## By Ryland Adams & Nick Hennessy
## Description
* _ A website where you can keep track of all the places you've been. Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name._

## Software Requirements
* _Internet browser
* _Git Bash_

## Setup 
* _On Github locate my repository link by clicking the green button that says "Code", this will open a drop down menu to allow for you to copy my https://_

* _Open Git Bash._ 

* _Change the current working directory to the location where you want the cloned directory._

* _Type git clone, and then paste the URL you copied earlier. here is a example ~ '''$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY'''_

* _Press Enter to create your local clone._

* _Navigate to the directory you were in when you cloned the repository._

* _open the new file you cloned._

* _Open index.html._

* _Find the language for you!_

## Specifications

| Behavior | Input | Output |
|-------------------------------------------------|--------|--------|
| It will accept user input for location, date/time and notes | portland, dec-2019, saw a blazer game | portland, dec-2019, saw a blazer game |
| It will use our input to construct objects that can then later be recalled by the user  | portland, dec-2019, saw a blazer game | newEvent = new Event(location, date, notes)|
| takes this new object and assigns it a unique ID and pushes it into a array | newEvent "id = 1"| trips = [newEvent "id = 1", newEvent "id = 2", newEvent "id = 3",]|
| It will create a ul and will add all unique id newEvent's to that list | trips = [newEvent "id = 1", newEvent "id = 2", newEvent "id = 3",] | <ul><li>newEvent "id = 1"</li><li>newEvent "id = 2"</li><li>newEvent "id = 3"</li></ul> |
| It will allow user to click on listed events expanding the infomation within and also prompting the user with the abilty to delete all info tied to that id |<ul><li>newEvent "id = 1"</li><li>newEvent "id = 2"</li><li>newEvent "id = 3"</li></ul>| newEvent "id = 2" = japan, july-2018, went to mt.Fuji   ~DELETE BUTTON~|

## Bugs
* none known

## For support
* _rylandadams@yahoo.com_
* _njhnny@gmail.com_

## Technologies and tools used

- Visual Studio Code
- HTML
- Markdowne
- Bootstrap
- Css
- jQuery
- Javascript

## Legal 
* _This software is licensed under the [MIT] license_
* _Copyright (C) 2020 Ryland S Adams_

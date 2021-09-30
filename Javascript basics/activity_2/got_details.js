// DOM #main div element
var main = document.getElementById('main');

// **** Your JavaScript code goes here ****
var characters = [{
	 "name": "Bran Stark",
	 "status": "Alive",
	 "current_location": "Fleebing White Walkers",
	 "power_ranking": 7,
	 "house": "stark",
	 "probability_of_survival": 98
},
{
	 "name": "Arya Stark",
	 "status": "Alive",
	 "current_location": "Back in Westeros",
	 "power_ranking": 8,
	 "house": "stark",
	 "probability_of_survival": 99
},
{
	 "name": "Sansa Stark",
	 "status": "Alive",
	 "current_location": "Winterfell",
	 "power_ranking": 10,
	 "house": "stark",
	 "probability_of_survival": 83
},
{
	 "name": "Robb Stark",
	 "status": "Dead - Red Wedding S3E9",
	 "current_location": "-",
	 "power_ranking": -1,
	 "house": "stark",
	 "probability_of_survival": 0
}]

// reduce survival probability by half
// This function will receive one character at a time and should return half the character's survival probability.
function halfSurvival(character) {
	return character.probability_of_survival / 2;
}

/*
Next you will create a for loop to call this function on all of your characters but one (your absolute favorite). 
Declare the characters' probability_of_survival to the returned value from halfSurvival.
*/

for (i = 0; i < characters.length; i++) {
	var obj = characters[i];

	if (obj.name === "Sansa Stark") {
		continue;
	}
	obj.probability_of_survival = halfSurvival(obj);
}

function debugCharacters() {

	for (i = 0; i < characters.length; i++) {
		console.log(characters[i].name + ": " + characters[i].probability_of_survival);
	}
}

function createDiv() {

	var tmp = "a";

	for (i = 0; i < characters.length; i++) {
		var div = document.createElement("div");

		var name = document.createElement("h5");
		name.appendChild(document.createTextNode("Name: " + characters[i].name));

		var house = document.createElement("h5");
		house.appendChild(document.createTextNode("House: " + characters[i].house));

		var probability = document.createElement("h5");
		probability.appendChild(document.createTextNode("Probabilty of Survival: " + 
			characters[i].probability_of_survival + " "));

		var status = document.createElement("h5");
		status.appendChild(document.createTextNode("Status: " + characters[i].status));

		div.appendChild(name);
		div.appendChild(house);
		div.appendChild(probability);
		div.appendChild(status);

		div.className += tmp;
		tmp += "a";
		
		main.appendChild(div);
	}
}

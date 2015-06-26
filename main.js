// Bonus I & II

var victims = [];
var volunteers = [];


var askVic = function() {
	var newVic = {};
		newVic.name = prompt("Enter victim Name:");
		newVic.phone = prompt("Enter victim Phone Number:");
		newVic.street = prompt("Enter victim Street:")
		victims.push(newVic);
}
askVic();


while (confirm('Would you like to continue entering victim information?') === true){
	askVic();
}

console.log(victims); //this is checking that the objects are pushing to the array

var askVol = function() {
	var newVol = {};
	newVol.name = prompt("Enter volunteer Name:");
	newVol.phone = prompt("Enter volunteer Phone Number:");
	newVol.street = prompt("Enter volunteer Street:")
	volunteers.push(newVol);
}
askVol();

while (confirm('Would you like to continue entering volunteer information?') === true){
	askVol();
}

console.log(volunteers);


alert("Number of Victims: " + victims['length'] + "\nNumber of Volunteers: " + volunteers['length']);

for ( i = 0; i < victims['length']; i++){
	alert('Here is the victim name: ' + victims[i].name);
}

for ( i = 0; i < volunteers['length']; i++){
	alert('Here is the volunteer name: ' + volunteers[i].name);
}


// After all of the above, prompt the user to enter the name of a person in need. 
//Then display an alert that lists all the volunteers that are available to help on the same street.

var askName = prompt("Enter the name of a person in need:");
 
var vicStreet = [];
var volMatch = [];

var meetNeed = function(){
	for (var i = 0; i < victims['length']; i++){
		if (victims[i].name === askName){
			var vicStreet = victims[i].street;
			console.log(vicStreet);
		}
	};

	for ( var i = 0; i < volunteers['length']; i++){
		if (volunteers[i].street === vicStreet){
			volMatch.push(volunteers[i].name);
			console.log(volunteers[i].name);
		}
	}

	if ( (vicStreet === null) || (vicStreet === undefined) ) {
		alert("There is no victim with that name.");
	}
	else if ( (volMatch === null) || (volMatch === undefined) ){
		alert("There are no volunteers on that street.");
	}
	else {
		alert('Here is a list of available volunters on that street:\n' +  volMatch);
	}
};
meetNeed(askName);







////////////////////////////////////////////////////////////////////////////////////


//This is the code for the bonus portion of Step #3

// var numVic = prompt("How many disaster victims do you wish to enter?");

// var victims = [];
// var volunteers = [];

// for (i = 1; i <= numVic; i++) {
// 	var newVic = {};
// 	newVic.name = prompt("Enter victim Name:");
// 	newVic.phone = prompt("Enter victim Phone Number:");
// 	newVic.street = prompt("Enter victim Street:")
// 	victims.push(newVic);
// }
// console.log(victims);

// var numVolunteer = prompt("How many volunteers do you wish to enter?")

// for (i = 1; i <= numVolunteer; i++) {
// 	var newVol = {};
// 	newVol.name = prompt("Enter volunteer Name:");
// 	newVol.phone = prompt("Enter volunteer Phone Number:");
// 	newVol.street = prompt("Enter volunteer Street:")
// 	volunteers.push(newVol);
// }

// console.log(volunteers);

// alert("Number of Victims: " + numVic + "\nNumber of Volunteers: " + numVolunteer);

// for ( i = 0; i < numVic; i++){
// 	alert('Here is the victim name: ' + victims[i].name);
// }

// for ( i = 0; i < numVolunteer; i++){
// 	alert('Here is the volunteer name: ' + volunteers[i].name);
// }




/////////////////////////////////////////////////////////////////////////////




// This block of code works using multiple arrays.

// var numVic = prompt("How many disaster victims do you wish to enter?");

// var vicName = [];
// var vicPhone = [];
// var vicStreet = [];

// for (i = 1; i <= numVic; i++) {
// 	var name = prompt("Enter victim Name:");
// 	vicName.push(name);
// 	var phone = prompt("Enter victim Phone Number:");
// 	vicPhone.push(phone);
// 	var street = prompt("Enter victim Street:")
// 	vicStreet.push(street);
// }

// var numVolunteer = prompt("How many volunteers do you wish to enter?")

// var vltrName = [];
// var vltrPhone = [];
// var vltrStreet = [];

// for (i = 1; i <= numVolunteer; i++) {
// 	var name = prompt("Enter volunteer Name:");
// 	vltrName.push(name);
// 	var phone = prompt("Enter volunteer Phone Number:");
// 	vltrPhone.push(phone);
// 	var street = prompt("Enter volunteer Street:")
// 	vltrStreet.push(street);
// }

// alert("Number of Victims: " + numVic + "\nNumber of Volunteers: " + numVolunteer + "\nVictim Names: " + vicName + "\nVolunteer Names: " + vltrName);














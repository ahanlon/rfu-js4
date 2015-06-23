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



var numVic = prompt("How many disaster victims do you wish to enter?");

var victims = [];
var volunteers = [];

for (i = 1; i <= numVic; i++) {
	var newVic = {};
	newVic.name = prompt("Enter victim Name:");
	newVic.phone = prompt("Enter victim Phone Number:");
	newVic.street = prompt("Enter victim Street:")
	victims.push(newVic);
}
console.log(victims);

var numVolunteer = prompt("How many volunteers do you wish to enter?")

for (i = 1; i <= numVolunteer; i++) {
	var newVol = {};
	newVol.name = prompt("Enter volunteer Name:");
	newVol.phone = prompt("Enter volunteer Phone Number:");
	newVol.street = prompt("Enter volunteer Street:")
	volunteers.push(newVol);
}

console.log(volunteers);

alert("Number of Victims: " + numVic + "\nNumber of Volunteers: " + numVolunteer);

for ( i = 0; i < numVic; i++){
	alert('Here is the victim name: ' + victims[i].name);
}

for ( i = 0; i < numVolunteer; i++){
	alert('Here is the volunteer name: ' + volunteers[i].name);
}
















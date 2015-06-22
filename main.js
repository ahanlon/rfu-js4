var numVic = prompt("How many disaster victims do you wish to enter?");

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

var victims = {};
var volunteers = {};


for (i = 1; i <= numVic; i++) {
	var name = prompt("Enter victim Name:");
	victims['vicName'] = name;
	var phone = prompt("Enter victim Phone Number:");
	victims['vicPhone'] = phone;
	var street = prompt("Enter victim Street:")
	victims['vicStreet'] = street;
}

var numVolunteer = prompt("How many volunteers do you wish to enter?")

for (i = 1; i <= numVolunteer; i++) {
	var name = prompt("Enter volunteer Name:");
	volunteers['vltrName'] = name;
	var phone = prompt("Enter volunteer Phone Number:");
	volunteers['vltrPhone'] = phone;
	var street = prompt("Enter volunteer Street:")
	volunteers['vltrStreet'] = street;
}

alert("Number of Victims: " + numVic + "\nNumber of Volunteers: " + numVolunteer + "\nVictim Names: " + victims['vicName'] + "\nVolunteer Names: " + volunteers['vltrName']);

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

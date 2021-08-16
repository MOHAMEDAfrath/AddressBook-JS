//getting the addressbook from another js file
const {AddressBook} = require('./AddressBook');
var prompt = require('prompt-sync')();
//creating object for the class
let contact = new AddressBook();
contact.firstName = prompt('Enter first name : ');
contact.lastName = prompt('Enter last name : ');
contact.address = prompt('Enter address : ');
contact.City = prompt('Enter city name : ');
contact.State = prompt('Enter state name : ');
contact.zip = prompt('Enter ZipCode: ')
contact.phone = prompt('Enter phone number : ');
contact.email = prompt('Enter email : ');
//printing with toString method
console.log(contact.toString());

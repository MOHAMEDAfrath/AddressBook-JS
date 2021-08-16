//getting the addressbook from another js file
const {AddressBook} = require('./AddressBook');
//creating object for the class
let contact = new AddressBook();
contact.firstName = "Mohamed";
contact.lastName = "Afrath";
contact.address = "Menod Street";
contact.City = "Chennai";
contact.State = "Tamil Nadu";
contact.phone = 9841635374;
contact.email = "afrath@gmail.com";
//printing with toString method
console.log(contact.toString());

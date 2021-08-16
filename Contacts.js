//getting the addressbook from another js file
const {AddressBook} = require('./AddressBook');
var prompt = require('prompt-sync')();
//creating object for the class
let contact = new AddressBook();
try
{
contact.firstName = prompt('Enter first name : ');
contact.lastName = prompt('Enter last name : ');
contact.address = prompt('Enter address : ');
contact.City = prompt('Enter city name : ');
contact.State = prompt('Enter state name : ');
contact.zip = prompt('Enter ZipCode: ')
contact.phone = prompt('Enter phone number : ');
contact.email = prompt('Enter email : ');
console.log("The contacts is :"+"\n"+contact.toString());
}catch(e){
    console.log(e);
}
//printing with toString method


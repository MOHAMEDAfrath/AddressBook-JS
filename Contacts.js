//getting the addressbook from another js file
const { AddressBook } = require("./AddressBook");
var prompt = require("prompt-sync")();
var addressbook = new Array();
var option = prompt('Enter 1 to create address book : ');
switch(option){
    case "1":
        //UC-2 created addressbook array
        var addressbook = new Array();
        console.log("Address Book created!");
        while(true){
            console.log("Enter 1 to add details to book \nEnter 2 to Display \nEnter 3 to Exit\n");
            var options = prompt("Enter option: ");
        switch(options){
            case "1":
                console.log("****Add Option****");
                //UC-2 add contacts to address book array
                AddContacts(addressbook);
                break;
            case "2":
                console.log("***Display Address Book***");
                Display(addressbook);
                break;
            case "3":
                return;
        }
    }
        break;
    default:
        console.log("Not created");
        break;
    
}

//UC-1 create a contact with properties
function AddContacts(address) {
  try {
      //creating object for the class
    let contact = new AddressBook();
    contact.firstName = prompt("Enter first name : ");
    contact.lastName = prompt("Enter last name : ");
    contact.address = prompt("Enter address : ");
    contact.City = prompt("Enter city name : ");
    contact.State = prompt("Enter state name : ");
    contact.zip = prompt("Enter ZipCode: ");
    contact.phone = prompt("Enter phone number : ");
    contact.email = prompt("Enter email : ");
    address.push(contact);
  } catch (e) {
    console.log(e);
  }
  return address;
}

function Display(address){
    if(address.length>0){
    for(let i = 0;i<address.length;i++){
        console.log(`Contact ${i+1} :-`)
        console.log(address.toString()+"\n");
    }
}else{
    console.log("No contacts found!");
}
}

//getting the addressbook from another js file
const { AddressBook } = require("./AddressBook");
var prompt = require("prompt-sync")();
var addressbook = new Array();
var option = prompt('Enter 1 to create address book : ');
switch(option){
    case "1":
        //UC-3 created addressbook array
        var addressbook = new Array();
        console.log("Address Book created!");
        while(true){
            console.log("\nEnter 1 to add details to book \nEnter 2 to Display \nEnter 3 to Modify Exisiting Contact \nEnter 4 to Delete a contact");
           console.log("Enter 5 to count the no of contacts \nEnter 6 to search based on city or state name \nEnter 7 to view based on city nad state name  \nEnter 8 to Exit\n");
            var options = prompt("Enter option: ");
        switch(options){
            case "1":
                console.log("****Add Option****");
                //UC-3 add contacts to address book array
                AddContacts(addressbook);
                break;
            case "2":
                console.log("***Display Address Book***");
                Display(addressbook);
                break;
            case "3":
                console.log("***Modify contacts***");
                Modify(addressbook);
                break;
            case "4":
                console.log("***Delete a contact***");
                Delete(addressbook);
                break;
            case "5":
                console.log("***count no of contacts****");
                //UC-6 count the number of contacts using reduce and arrow function
                console.log("The number of contacts :"+addressbook.reduce((countContacts) => countContacts+=1,0));
                break;
            case "6":
                //UC-8 Search based on city or state name using filter
                console.log("***Search based on city or state name***");
                var opt = prompt('Enter 1 for city / Enter 2 for state : ');
                if(opt == 1){
                    var cityname= prompt('Enter city name : ');
                    var result = addressbook.filter(x=>x.City == cityname);
                    if(result.length>0){
                    console.log("Based on city name "+cityname);
                    Display(result);
                }else{
                    console.log("No contacts in city "+cityname);
                }
                }else if(opt == 2){
                    var statename = prompt('Enter state name name : ');
                    var result = addressbook.filter(x=>x.State == statename);
                    if(result.length>0){
                    console.log("Based on state name "+statename);
                    Display(result);
                    }else{
                        console.log("No contacts in state "+statename);
                    }
                }
                break;
            case "7":
                console.log("****View based on City and state name****");
                ViewByCity(addressbook);            
                break;
            case "8":
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
    //UC-7 checks if already present,if not adds to array,else prints a message
    //every returns true if contacts not present in array
    if(address.length == 0 || address.every(x=>x.firstName != contact.firstName && x.lastName !=contact.lastName)){
    address.push(contact);
    console.log(`Added ${contact.firstName} successfully`);
    }else{
        console.log(`\nAlready present ${contact.firstName+" "+contact.lastName}! Please modify!`);
    }
  } catch (e) {
    console.error(e);
  }
  return address;
}
//UC-4 Modify existing details
function Modify(address)
{   
    var firstName = prompt('Enter first name : ');
    var result = address.find(x=>x.firstName == firstName);
    if(result == null){
        console.log("Enter valid name!")
    }else{
        console.log("Enter 1 to modify firstname \nEnter 2 to modify lastname \nEnter 3 to modify address \nEnter 4 to modify city name");
        console.log("Enter 5 to modify state name \nEnter 6 to modify zip \nEnter 7 to modify phone number \nEnter 8 to modify email");
        try{
            var option = prompt('Enter option: ');
            switch(option){
                case "1":
                    result.firstName = prompt('Enter new First Name: ');
                    console.log("First Name updated");
                    break;
                case "2":
                    result.lastName = prompt('Enter new last Name: ');
                    console.log("last Name updated");
                    break;
                case "3":
                    result.address = prompt('Enter new address: ');
                    console.log("address updated");
                    break;
                case "4":
                    result.City = prompt('Enter new City Name: ');
                    console.log("City Name updated");
                    break;
                case "5":
                    result.State = prompt('Enter new State Name: ');
                    console.log("State Name updated");
                    break;
                case "6":
                    result.zip = prompt('Enter new zip: ');
                    console.log("Zip updated");
                    break;
                case "7":
                    result.phone = prompt('Enter new Phone Number: ');
                    console.log("Phone number updated");
                    break;
                case "8":
                    result.email = prompt('Enter new Email ID: ');
                    console.log("Email Id updated");
                    break;
                default:
                    break;

            }
        }catch(e){
            console.error(e);
        }
    }
}
//UC-5 Delete a contact
function Delete(address){
    var firstName = prompt('Enter first name :');
    var lastName = prompt('Enter last name: ');
    var result = address.find(x=>x.firstName == firstName && x.lastName == lastName);  
    if(result != null){
        //pop out the contact
    address.pop(result);
    console.log("Deleted successfully");
    }else{
        console.log("No contacts found!");
    }
}
//UC-9 Ability to view based on city or name
function ViewByCity(address){
        var city = new Map();
        var state = new Map();
        address.forEach(contact =>{
            var array = new Array();
            //add to city map
        if(city.has(contact.City))
        {
            array = city.get(contact.City);
           
        }
        array.push(contact);
        city.set(contact.City,array);
    //add to state map
        var array = new Array();
        if(state.has(contact.State))
        {
            array = state.get(contact.State);
           
        }
        array.push(contact);
        state.set(contact.State,array);

        

    })
    for(let [key,value] of city){
        //UC-10 count based on city
        console.log("There are " +value.length+ " contacts in city "+key);
        Display(value);
    }
    for(let [key,value] of state){
        //count based on state
        console.log("There are " +value.length+ " contacts in state "+key);
        Display(value);
    }

}
//displays the contact
function Display(address){
    if(address.length>0){
    for(let i = 0;i<address.length;i++){
        console.log(`Contact ${i+1} :-`)
        console.log(address[i].toString()+"\n");
    }
}else{
    console.log("No contacts found!");
}
}


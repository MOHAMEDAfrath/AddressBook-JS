//using regex to validate inputs
class AddressBook{
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(firstNameRegex.test(value))
        this._firstName = value;
        else
        throw 'First name is invalid';
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(lastNameRegex.test(value))
        this._lastName = value;
        else
        throw 'Last name is invalid';
    }
    get address(){
        return this._address;
    }
    set address(value){
        let addressRegex = RegExp("^[A-Z a-z]{4,}$");
        if(addressRegex.test(value))
        this._address = value;
        else
        throw 'Address is invalid';
    }
    get City(){
        return this._City;
    }
    set City(value){
        let cityRegex = RegExp("^[A-Z a-z]{4,}$");
        if(cityRegex.test(value))
        this._City = value;
        else
        throw 'City is invalid';
    }
    get State(){
        return this._State;
    }
    set State(value){
        let stateRegex = RegExp("^[A-Z a-z]{4,}$");
        if(stateRegex.test(value))
        this._State = value;
        else
        throw 'State is invalid';

    }
    get zip(){
        return this._zip;
    }
    set zip(value){
        let zipRegex = RegExp("^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$");
        if(zipRegex.test(value))
        this._zip = value;
        else
        throw 'Zip is invalid';
    }
    get phone(){
        return this._phone;
    }
    set phone(value){
        let phoneRegex = RegExp("^[91]+[\\s]+[0-9]{10}$");
        if(phoneRegex.test(value))
        this._phone = value;
        else
        throw 'Invalid Phone Number';
    }
    get email(){
        return this._email;
    }
    set email(value){
        let emailRegex = RegExp("(^[a-z]+)(([\. \+ \-]?[a-z A-Z 0-9])*)@(([0-9 a-z]+[\.]+[a-z]{3})+([\.]+[a-z]{2,3})?$)");
        if(emailRegex.test(value))
        this._email = value;
        else
        throw 'Invalid Email';
    }
    toString(){
        return `First Name : ${this.firstName}\nSecondName : ${this.lastName}\nAddress : ${this.address}\nCity : ${this.City}\nState : ${this.State}\nZip : ${this.zip}\nPhone : ${this.phone}\nemail : ${this.email}`
    }

}
//exporting this class to use the class in another js file
module.exports = {AddressBook};

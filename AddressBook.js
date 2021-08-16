class AddressBook{
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName = value;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        this._lastName = value;
    }
    get address(){
        return this._address;
    }
    set address(value){
        this._address = value;
    }
    get City(){
        return this._City;
    }
    set City(value){
        this._City = value;
    }
    get State(){
        return this._State;
    }
    set State(value){
        this._State = value;
    }
    get zip(){
        return this._zip;
    }
    set zip(value){
        this._zip = value;
    }
    get phone(){
        return this._phone;
    }
    set phone(value){
        this._phone = value;
    }
    get email(){
        return this._email;
    }
    set email(value){
        this._email = value;
    }
    toString(){
        return `First Name : ${this.firstName}\nSecondName : ${this.lastName}\nAddress : ${this.address}\nCity : ${this.City}\nState : ${this.State}\nZip : ${this.zip}\nPhone : ${this.phone}\nemail : ${this.email}`
    }

}
//exporting this class to use the class in another js file
module.exports = {AddressBook};

//Class Defination
class MyClass{
    //1. Properties
    contacts={}; // blank object

    //2. Constructor
    constructor(y){ //y is formal arg
        console.log('Hello from constructor');
        //Constructor is immideatly called when we create the object of the class
        //The role of constructor is to initialize the properties
        this.contacts = y;

        //Call the method using internal object
        this.getContacts();
    }

    //3.Method
    getContacts(){
        console.log(this.contacts);
    }


} //End of Class

//Lets create the ex object of the class
//let object = new ClassName();

let x = {
    //P:V
    name:"Anil",
    surname:"Dollor",
    mob:"9797797979",
    addr:"Neemuch MP"
};
let object = new MyClass(x);

//Call the method using ex object
//object.member

object.getContacts();

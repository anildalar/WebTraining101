//Class Defination

class MyClass2{
    //1. Property
    name = "Anil";
    surname="Dollor";
    //2. Constructor

    //3. Method
    getMyName(){


        return this.name;
    }
    getMySurname(){
        return this.surname;
    }
} //Class Defination end
//object.property
//module.exports = {};

let obj = new MyClass2();

module.exports = obj; //export the object
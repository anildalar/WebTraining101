//class 

//Inheritance

//A = Parent Class
class A{
    //1. Properties

    //2. Constructor
    constructor(){

    }

    //3. Method
    myFunctionA(){
        console.log('Hello from MyFunctionA from Class A');
    }
}

//B = Child Class
class B extends A{
    //1. Properties

    //2. Constructor
    constructor(){
        super();
    }

    //3. Method
    myFunctionB(){
        console.log('Hello from MyFunctionB from Class B');
    }
}

//Create an ex object of the class

//Always create object of the child class

//let object = new class();

let obj = new B();

obj.myFunctionB();
obj.myFunctionA();
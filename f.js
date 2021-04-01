//Class Defination
class MyClass1{
    //1. Property
    name='';

    //2.Constructor
    constructor(){
        //The role of constructor is to initialize the properties
        this.name = "OKLABS";
        this.myFunction2();
    }

    //3.Method
    myFunction1(n){ //n is formal arg
        console.log(`Hello ${n} `);

    }

    myFunction2(){
        console.log(`Hello ${this.name} `);
    }
}//Class end

//Create an external object
//let object = new ClassName();
let o = new MyClass1();

//Access the member using ex. object
//object.member
o.myFunction1('Anil');



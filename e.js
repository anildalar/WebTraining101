//Class Defination
//PascalCase
class MyClass {
    //1.Property
    x = 10;
    y = 20;

    //2.Constructor

    //3.Method
    myFunction1(n) { // n is formal argument
        console.log(`Hello ${n} from myFunction1`);
        //this is used as internal object
        this.myFunction2();
    }

    myFunction2() {
        console.log("Hello from myFunction2");
        console.log("The sum is "+ (this.x+this.y) );
    }
} //Class Defination End

//Create an external object of the class

//let objectname = new ClassName()
let x = new MyClass();
//Access the members using object
//object.member

x.myFunction1("Anil"); //Actual Argument
//x.myFunction2();
//Name
//Varible Declared outside the function is called global varible

//Global Variable
var name="Dilip";
//1. Function Deceration
function a(){
    //We can use global variable inside function body
    console.log('Hello'+name );

    //Var declerated inside the function body is called local var
    let x=10; // local var
    const y=20; // local var
    console.log(x+y);

}

//2. Function Calling
a();
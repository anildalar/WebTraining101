//Normal Function

function myFun1(){
    

    return 'Hello Good Morning';
}
const x = myFun1();
console.log(x);

//Lets create a fat arrow function
const myFun2 = ()=>{
    return "Hello Good Morning Again";
}

//Lets call the fat arrow function
var y = myFun2();
console.log(y);


const myFun3 = (n)=>{ // n = formal arg
    return `Hello ${n} Good Morning Again`;
}

let z = myFun3("Anil"); //Actual Arg
console.log(z);
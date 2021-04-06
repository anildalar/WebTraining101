//Import

const obj = require("./export_function"); //  ./ = current directory
const myClass = require('./export_class');
//const aoo = require('./export_aoo');

//console.log(aoo);

const myObject = require();

console.log(obj.hello());

console.log(myClass);

//If we have class we can create object
//let object = new ClassName();
let obj1 = new myClass();

console.log(obj1);
let x = obj1.getMyName();
console.log(x);
// import <something> from <somelibrary>
//Named import
// import { something } from somelibrary
import { a }  from './export_es6.js';
import { MyClass } from './export_es6_class.js';

//Default Import
//import something from somelibrary
import X from './export_es6_default_export.js';

import { c } from './export_es6_fatarray.js';

console.log(c);
c('Anil');

console.log(X);
X();

console.log(a);
a();

console.log(MyClass);
//Create an ex object of the class
//let obj = new ClassName();
let obj = new MyClass();
//Access the member using object
//object.member
obj.getMyFullName();
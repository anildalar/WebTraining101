//named import
// Import { something } from somelibrary

import { MyClass } from './export2.js';

console.log(MyClass);

//lets create an ex obj
let o = new MyClass(['AA','BB','CC','DD','EE']);

let cc = o.getMyFriendsCount();
console.log(cc);

const ff = o.getMyFriends();

console.log(ff);
//default import
// Import { something } from somelibrary

import OKLABS from './export3.js';

console.log(OKLABS);

//lets create an ex obj
let o = new OKLABS(['AA','BB','CC','DD','EE']);

let cc = o.getMyFriendsCount();
console.log(cc);

const ff = o.getMyFriends();

console.log(ff);
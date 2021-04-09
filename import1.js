const Z = require('./export1');

console.log(Z);

//let create an object of the class

let obj = new Z(['A','B','C','D']); // Actual Arg
//console.log(obj);

let frnds = obj.getMyFriends();

console.log(frnds);

let c = obj.getMyFriendsCount();
console.log(c);
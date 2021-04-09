//clas defination
export default class MyClass{
    //1. Property
    friends=[]; //Empty Array

    //2. constructor
    constructor(f){ // f = formal arg
        //The role of constructor is to initialize the members
        this.friends = f;
    }

    //3. Method
    getMyFriends(){
        return this.friends;
    }

    getMyFriendsCount(){
        //Array.length
        return this.friends.length;
    }

}//Class Def End

//module.exports = MyClass;
//1. NodeJs   module.exports
//2. Js  1. named export



//3. Js  2. default export
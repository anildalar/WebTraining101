//Lets create an Array

const friends = ['A','B','C','D'];

const students = ['E','F','G',"H"];

//()=>{} Annonymous Fat arrow function
students.forEach(y=>{ // y is formal arg
    console.log(y);
});


friends.forEach(cbfnA);

function cbfnA(x){
    console.log(x);
}
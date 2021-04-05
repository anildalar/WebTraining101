//Lets Create an Array

let x = [
            'Anil', //String 0
            30,     //Integer 1
            5.7,    //Float 2
            ['Khushu',"Bulbul"], // Array 3
            { faterName:"Ramesh" }, //Object 4
            [                       //5
                {
                    //1. Properties
                    sibling:'Sunil',
                    'spouse':'X',
                    //2. Methods
                    getSpouseName:function(){
                        return this.spouse;                        
                    }
                },{
                    "sibling":"Ravi",
                    spouse:'Y'
                }
            ]                    //Array of Objects
    ]; //We have created a blank array

//console.log(x[5][0].sibling);
//console.log(x);
//console.log(x[4].faterName);

console.log(x[5][0].getSpouseName());

/**
 *   {
 *      1. property:value,
 * 
 * 
 *      2. Functions
 *   }

 */
 let obj = {
    //1. Property Area
    name:"Vikki",
    'surname':"Sharma",
    "address":"Neemuch",
    mob_no:'1028301208',
    
    //Method Area
    getMobNo : function(){
        return this.mob_no;
    }

 }; // {} is an object

 //object.member
 console.log(obj.name);
 console.log(obj.surname);
 console.log(obj.address);
 console.log(obj.getMobNo());




let z= [
            {
                //1.Property
                name:"A",
                //2. method
                getMyName:()=>{
                    return this.name;
                }  
            },
            {
                name:"B",
                //2. method
                getMyName:function(){
                    return this.name;
                }  
            },
            {
                name:"C",
                //2. method
                getMyName:function(){
                    return this.name;
                }  
            }
        ];  //Array Of Objects

module.exports = z;
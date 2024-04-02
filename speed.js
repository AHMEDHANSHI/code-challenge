// speed detector  program used to calculate speed values

const speed=parseInt(prompt("enter your speed"));
function speedDetector(speed){

     if(speed < 70){
         return "Ok"
    }else{   
         const remainder = speed-70
        const division = Math.trunc(remainder/5)
        demerit = parseInt(division)
     }

    return demerit
  

 }

 console.log(speedDetector(90));
//  output=  4 demerit points




 function speedDetector(speed){
     const speed = prompt("enter your speed")
     const demerit = 0
     if(speed < 70){
         return "Ok"
    }else{   
         const remainder = speed-70
        const division = Math.trunc(remainder/5)
        demerit = parseInt(division)
     }

    return demerit
 }
 console.log(speedDetector(80))



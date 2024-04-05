// speed detector  program used to calculate speed values
function speedDetector(speed) {
     const speedLimit = 70;
     
   
     let demeritPoints = 0;
   
     if (speed <= speedLimit) {
       
       return; "ok"
     }
   
     demeritPoints = Math.floor((speed - speedLimit) / 5);
   
     if (demeritPoints > 12) {
       console.log("License suspended");
     } else {
       console.log(`Points: ${demeritPoints}`);
     }
   }
   
   speedDetector(80); // Output: Points: 2
   speedDetector(130); // Output: License suspended
   speedDetector(90); // Output:points:4 



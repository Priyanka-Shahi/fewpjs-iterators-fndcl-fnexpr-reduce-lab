const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteries(batteryBatches) {
    const totalBatteries = batteryBatches.reduce((prev, curr) => prev + curr, initial);
}

// Code your solution here

  

  const totalBatteries = batteryBatches.reduce(function(previous, current, index){
    const returns = previous + current;
    return returns;
  } )
  
  console.log(totalBatteries);
  
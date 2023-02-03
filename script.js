// defining the variables
var batteryFrame = document.querySelector('.shell')
var height = document.querySelector('.parcentage-height');
var level = document.querySelector('.parcentage-digit');
var statu = document.querySelector('.status')

// config battery api

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
    }
    updateAllBatteryInfo();
  // watch charging plugin status
    battery.addEventListener("chargingchange", () => {
      updateChargeInfo();
    });
    function updateChargeInfo() {
        console.log(battery.charging)
        if(battery.charging){
          statu.innerHTML = "charging"
        }else{
         statu.innerHTML = " "
        }
     }

     // watch battery percentage changes
    battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });

  function updateLevelInfo() {
    const batteryLevel = battery.level * 100
    console.log(batteryLevel)
    // update the level in the dom
    level.innerHTML = `${batteryLevel}%`
    // update the height
    height.style.height = `${batteryLevel}%`
    // change the color of the battery to red if level is < 15
    if(batteryLevel > 15){ 
      batteryFrame.style.borderColor ='rgba(6,88,146,.9)'
      height.style.backgroundColor ='rgba(6,88,146,.9)'
    }else{
      batteryFrame.style.borderColor ='red'
      height.style.backgroundColor ='red'
    }
       
  }
  
  });
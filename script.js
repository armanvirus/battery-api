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
  
  
    
  
  });
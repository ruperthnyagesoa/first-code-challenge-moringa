// A speed detector program;
// This is a program that takes autoMobile speed as input and outputs a message depending on the speed;
function autoMobileSpeed(){
    let autoMobileSpeed = 70;
  let demeritPoints = (autoMobileSpeed-70)/5;
  //using the conditional "if statement" to print "Ok" if automobile speed is less or equal to 70km/hr
  if(autoMobileSpeed <= 70){
      console.log("OK");
  }
  //using the conditional "else if" to print specific message if automobile speed exceeds the base speed by 5km/hr
  else{
    console.log(`Points: ${demeritPoints}`);
    if(demeritPoints>12){
      console.log("License suspended");
    }
  }
  }
  autoMobileSpeed();
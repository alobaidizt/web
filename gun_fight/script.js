if (window.DeviceOrientationEvent) {
  document.getElementById("doEvent").innerHTML = "DeviceOrientation";
  // Listen for the deviceorientation event and handle the raw data
  window.addEventListener('deviceorientation', function(eventData) {
    // gamma is the left-to-right tilt in degrees, where right is positive
    var tiltLR = eventData.gamma;

    // beta is the front-to-back tilt in degrees, where front is positive
    var tiltFB = eventData.beta;

    // alpha is the compass direction the device is facing in degrees
    var dir = eventData.alpha

    // call our orientation event handler
    deviceOrientationHandler(tiltLR, tiltFB, dir);
  }, false);
} else {
  document.getElementById("doEvent").innerHTML = "Not supported.";
}
var TLpos;
function deviceOrientationHandler(tiltLR, tiltFB, dir) {
    var beta = Math.round(tiltFB);
    var status = "";
    document.getElementById("doTiltLR").innerHTML =     Math.round(tiltLR);
    document.getElementById("doTiltFB").innerHTML =     Math.round(tiltFB);
    document.getElementById("doDirection").innerHTML =  Math.round(dir);
     console.log(beta);
    if (beta > -80 && beta < -70) {
     status = "ready!";
    } else if (beta > 0  && beta < 10) {
     status = "BANG!!";
     document.getElementById("sound").play();
    }
    document.getElementById("status").innerHTML =  status;

}

function playSound() {
  document.getElementById("sound").play();
}

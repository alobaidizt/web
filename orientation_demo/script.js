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
    document.getElementById("doTiltLR").innerHTML =     Math.round(tiltLR);
    document.getElementById("doTiltFB").innerHTML =     Math.round(tiltFB);
    document.getElementById("doDirection").innerHTML =  Math.round(dir);

    TLpos = parseInt(document.getElementById("slide1_images").style.left);
    if (TLpos > 180) 
    {
      sign = 1;
    } 
    else 
    {
      sign = -1;
    }

    // Apply change to slide 
    var imageSlide = document.getElementById("slide1_images");
    imageSlide.style.left = sign*(dir/360)*1800 + "px";

    // Apply the transform to the image
    var leaf = document.getElementById("imgLeaf");
    leaf.style.webkitTransform =
      "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
    leaf.style.MozTransform = "rotate("+ tiltLR +"deg)";
    leaf.style.transform =
      "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
}

//--------velocity equation-------------------
function Velocity () {
  'use strict';
  var x = document.getElementById("VelX").value;
  var t = document.getElementById("VelT").value;
  var v = x/t;
  document.getElementById("vel").innerHTML = v;
};

//--------acceleration equation-----------
function Acceleration() {
  'use strict';
  var v = document.getElementById("AccV").value;
  var t = document.getElementById("AccT").value;
  var a = v/t;
  document.getElementById("acc").innerHTML = a;
}

//--------momentum equation---------------
function Momentum() {
  'use strict';
  var m = document.getElementById("MomM").value;
  var v = document.getElementById("MomV").value;
  var p = m*v;
  document.getElementById("mom").innerHTML = p;
}

//--------Work equation-------------------
function Work() {
  'use strict';
  var f = document.getElementById("WorkF").value;
  var s = document.getElementById("WorkS").value;
  var ang = document.getElementById("WorkAngle").value;
  var work = f*s*Math.cos(ang);
  var w = work.toFixed(2);//showing result with 2 decimal places
  document.getElementById("work").innerHTML = w;
}

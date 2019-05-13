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

//--------Kinetic Energy Equation---------
function Kinetic() {
  'use strict';
  var m = document.getElementById("KineticM").value;
  var v = document.getElementById("KineticV").value;
  var k = (m*Math.pow(v,2))/2;
  document.getElementById("Kinetic").innerHTML = k;
}

//---------1st law of motion---------------
function FirstEq() {
  'use strict';
  var u = document.getElementById("firstU").value;
  var a = document.getElementById("firstA").value;
  var t = document.getElementById("firstT").value;
  var v = parseInt(u) + parseInt(a)*parseInt(t);
  document.getElementById("firsteq").innerHTML = v;
}

//---------2nd law of motion--------------
function SecondEq() {
  'use strict';
  var u = document.getElementById("SecondU").value;
  var t = document.getElementById("SecondT").value;
  var a = document.getElementById("SecondA").value;
  var s = u * t + (a * Math.pow(a,2))/2;
  document.getElementById("second").innerHTML = s;
}

//-----------3rd law of equation-----------
function ThirdEq() {
  'use strict';
  var u = document.getElementById("ThirdU").value;
  var a = document.getElementById("ThirdA").value;
  var s = document.getElementById("ThirdS").value;
  var vel = Math.sqrt(Math.pow(u,2) + 2*a*s);
  var v = vel.toFixed(2);
  document.getElementById("third").innerHTML = v;
}

//-------------4th law of equation----------
function FourthEq() {
  'use strict';
  var v = document.getElementById("FourthV").value;
  var u = document.getElementById("FourthU").value;
  var vAvg = (parseInt(v)+parseInt(u))/2;//Average velocity
  document.getElementById("fourth").innerHTML = vAvg;
}

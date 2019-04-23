function velocity () {
  var x = document.getElementById("x").value;
  var t = document.getElementById("t").value;
  var v = x/t;
  console.log(v);
  document.getElementById("vel").innerHTML = v;
};

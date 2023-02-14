var buy = document.getElementById("buynow");
var lastclicked;
window.onload = function (e) {
  var timeNow = new Date().getTime() / 1000;
  lastclicked = timeNow;
};
buy.onclick = function (e) {
  //for time and distance
  var timeNow = new Date().getTime() / 1000;
  console.log(
    "time = " + Math.round((timeNow - lastclicked) * 100) / 100 + " s"
  );
};

//toggle to swap images and background  

function changeImage() {
  var image = document.getElementById('planet');
    var element = document.body;
    element.classList.toggle("planetMode");
  if (image.src.match("mars")) {
    image.src = "https://cdn.dribbble.com/users/22930/screenshots/3449820/earth_day.gif";
    
  } else {
    image.src = "images/mars.gif";
    
  }
}


//plant trees. tried to have the nodes inline not sure how
function plantTrees() {
  var btn = document.createElement("H1");
  var sd = document.createTextNode("🌱 ");
  btn.appendChild(sd);
  document.getElementById("tree").appendChild(btn);
    

}


//plant trees. tried to have the nodes inline not sure how
function plantSat() {
  var btns = document.createElement("H1");
  var st = document.createTextNode("📡 ");
  btns.appendChild(st);
  document.getElementById("satelite").appendChild(btns);
    

}





//earth clock- question: how to set up two clocks with two similar functions
function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById('earth') .innerHTML =
  hr + ":" + min + ":" + sec; 
     document.getElementById('earth').style.fontSize = "100px"; 
    document.getElementById('earth').style.color = "#FCE3D4"; 
     document.getElementById('earth').style.fontFamily = "Amatic SC,cursive";
  //didn't know if i can put them all into one 
  
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
    
 
}

//onload without making body onload
window.onload = function() {
  startTime();
}









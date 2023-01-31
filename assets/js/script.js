// Faire réapparaître la timeline education lors du click
let timelineEducation = document.getElementById('timeline-education');

// Pour les 2 boutons
var btn = document.getElementById('bouton')

function leftClick() {
    btn.style.left = '0'
}

function rightClick() {
    btn.style.left = '50%'
    timelineEducation.removeAttribute("hidden");
}

document.getElementById("right-button")
        .addEventListener("click", function() {
  document.getElementById("timeline-career").hidden = true;
  document.getElementById("timeline-education").hidden = false;
}, false);

document.getElementById("left-button")
        .addEventListener("click", function() {
  document.getElementById("timeline-education").hidden = true;
  document.getElementById("timeline-career").hidden = false;
}, false);

function showNav() {
  var x = document.getElementById("ulshow");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
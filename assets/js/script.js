
// Pour les 2 boutons

var btn = document.getElementById('bouton')

function leftClick() {
    btn.style.left = '0'
}

function rightClick() {
    btn.style.left = '50%'
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


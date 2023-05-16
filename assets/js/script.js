const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const bouton = document.getElementById('bouton');
const timelineEducation = document.getElementById("timeline-education");
const timelineCareer = document.getElementById("timeline-career");

leftButton.addEventListener("click", leftClick);

function leftClick() {
  bouton.style.left = '0';
  // console.log('click gauche')
}

leftButton.addEventListener("click", function () {
  timelineEducation.hidden = true;
  timelineCareer.hidden = false;
});

rightButton.addEventListener("click", rightClick);

function rightClick() {
  // console.log('click droit')
  bouton.style.left = '50%';
  timelineEducation.removeAttribute("hidden")
}

rightButton.addEventListener("click", function () {
  timelineCareer.hidden = true;
  timelineEducation.hidden = false;
});

// Marche plus à voir

// Pour le bouton scroll to top
let buttonTop = document.getElementById("buttonTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

buttonTop.addEventListener("click", topFunction)
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


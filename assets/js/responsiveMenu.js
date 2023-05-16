// Permet d'afficher le menu burger en mode responsive 
let togglenavbtnbtn = document.querySelector("navbtn")
navbtn.addEventListener("click", showNav)

function showNav() {
  var x = document.getElementById("ulshow");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

    /* Creating button click show hide bar */
    var togglebtn = document.querySelector(".togglebtn");
    var nav = document.querySelector(".navlinks");
    var links = document.querySelector(".navlinks li");

    togglebtn.addEventListener("click", function () {
      this.classList.toggle("click");
      nav.classList.toggle("open");
    })

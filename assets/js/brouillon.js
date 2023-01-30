function myFunction() {
    var x = document.getElementById("timeline-education");
    var y = document.getElementById("timeline-career");
    if (window.getComputedStyle(x).display === "none" || window.getComputedStyle(y).display === "block" ) {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display="block";
    }
  }

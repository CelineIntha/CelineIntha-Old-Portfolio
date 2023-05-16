// Language select

let engOption = document.getElementById("eng")
engOption.addEventListener("click", changeLanguageEN)

function changeLanguageEN() {
  window.location.replace(
    "../../lng/index.html"
  )
  console.log("remplacé")
}

let frOption = document.getElementById("fr")
frOption.addEventListener("click", changeLanguageFR)

function changeLanguageFR() {
  window.location.replace(
    "../../index.html"
  )
  console.log("remplacé")
}
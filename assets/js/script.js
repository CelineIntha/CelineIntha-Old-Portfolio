
function ShowAndHide() {
    var x = document.getElementById('SectionName');
    if (x.style.display == 'none') {
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
    }
}

// Pour les 2 boutons

var btn = document.getElementById('bouton')

function leftClick() {
    btn.style.left = '0'
}

function rightClick() {
    btn.style.left = '50%'
}

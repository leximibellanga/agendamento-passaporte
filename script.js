// variables
let botaoBurger = document.getElementById("botao-burger")
let menuBurger = document.getElementById("menu-burger")

// functions
function aparecerMenu() {
    menuBurger.style.display = "flex"
    botaoBurger.style.display = "none"
}

function desaparecerMenu() {
    menuBurger.style.display = "none"
    botaoBurger.style.display = "block"
}
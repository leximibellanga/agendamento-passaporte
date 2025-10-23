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

// Nacionalidade aumomaticamente 
let paisNasc = document.getElementById("IDpaisNasc")

paisNasc.addEventListener("click", function() {
    // variavel
    let nacionalidade = document.getElementById("IDnacionalidade")

    // condicoes
    if (paisNasc.value == "mocambique") {
        nacionalidade.value = "mocambicano"
    } else if (paisNasc.value == "angola") {
        nacionalidade.value = "angolano"
    } else if (paisNasc.value == "africa do sul") {
        nacionalidade.value = "sul africano"
    }
})
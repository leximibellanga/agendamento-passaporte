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


// Nacionalidade automatica
let paisNasc = document.getElementById("IDpaisNasc");

paisNasc.addEventListener("change", function() {
    let nacionalidade = document.getElementById("IDnacionalidade");
    nacionalidade.disabled = false;

    // ÁFRICA
    if (paisNasc.value == "mocambique") {
        nacionalidade.value = "mocambicano";
    } else if (paisNasc.value == "angola") {
        nacionalidade.value = "angolano";
    } else if (paisNasc.value == "africa do sul") {
        nacionalidade.value = "sul africano";
    } else if (paisNasc.value == "nigeria") {
        nacionalidade.value = "nigeriano";
    } else if (paisNasc.value == "egito") {
        nacionalidade.value = "egipcio";
    } else if (paisNasc.value == "marrocos") {
        nacionalidade.value = "marroquino";
    } else if (paisNasc.value == "quenia") {
        nacionalidade.value = "queniano";
    } else if (paisNasc.value == "etiopia") {
        nacionalidade.value = "etiope";
    } else if (paisNasc.value == "tanzania") {
        nacionalidade.value = "tanzaniano";
    } else if (paisNasc.value == "cabo verde") {
        nacionalidade.value = "cabo-verdiano";
    }

    // EUROPA
    else if (paisNasc.value == "portugal") {
        nacionalidade.value = "portugues";
    } else if (paisNasc.value == "espanha") {
        nacionalidade.value = "espanhol";
    } else if (paisNasc.value == "franca") {
        nacionalidade.value = "frances";
    } else if (paisNasc.value == "alemanha") {
        nacionalidade.value = "alema";
    } else if (paisNasc.value == "italia") {
        nacionalidade.value = "italiano";
    } else if (paisNasc.value == "reino unido") {
        nacionalidade.value = "britanico";
    } else if (paisNasc.value == "suica") {
        nacionalidade.value = "suico";
    } else if (paisNasc.value == "holanda") {
        nacionalidade.value = "holandes";
    } else if (paisNasc.value == "suecia") {
        nacionalidade.value = "sueco";
    } else if (paisNasc.value == "noruega") {
        nacionalidade.value = "noruegues";
    }

    // ÁSIA
    else if (paisNasc.value == "china") {
        nacionalidade.value = "chines";
    } else if (paisNasc.value == "japao") {
        nacionalidade.value = "japones";
    } else if (paisNasc.value == "india") {
        nacionalidade.value = "indiano";
    } else if (paisNasc.value == "coreia do sul") {
        nacionalidade.value = "coreano";
    } else if (paisNasc.value == "indonesia") {
        nacionalidade.value = "indonesio";
    } else if (paisNasc.value == "tailandia") {
        nacionalidade.value = "tailandes";
    } else if (paisNasc.value == "vietna") {
        nacionalidade.value = "vietnamita";
    } else if (paisNasc.value == "malasia") {
        nacionalidade.value = "malasio";
    } else if (paisNasc.value == "arabia saudita") {
        nacionalidade.value = "saudita";
    } else if (paisNasc.value == "filipinas") {
        nacionalidade.value = "filipino";
    }

    // AMÉRICA
    else if (paisNasc.value == "brasil") {
        nacionalidade.value = "brasileiro";
    } else if (paisNasc.value == "estados unidos") {
        nacionalidade.value = "americano";
    } else if (paisNasc.value == "canada") {
        nacionalidade.value = "canadense";
    } else if (paisNasc.value == "mexico") {
        nacionalidade.value = "mexicano";
    } else if (paisNasc.value == "argentina") {
        nacionalidade.value = "argentino";
    } else if (paisNasc.value == "chile") {
        nacionalidade.value = "chileno";
    } else if (paisNasc.value == "colombia") {
        nacionalidade.value = "colombiano";
    } else if (paisNasc.value == "peru") {
        nacionalidade.value = "peruano";
    } else if (paisNasc.value == "venezuela") {
        nacionalidade.value = "venezuelano";
    } else if (paisNasc.value == "cuba") {
        nacionalidade.value = "cubano";
    }

    // OCEANIA
    else if (paisNasc.value == "australia") {
        nacionalidade.value = "australiano";
    } else if (paisNasc.value == "nova zelandia") {
        nacionalidade.value = "neozelandes";
    } else if (paisNasc.value == "fiji") {
        nacionalidade.value = "fijiano";
    } else if (paisNasc.value == "samoa") {
        nacionalidade.value = "samoano";
    } else if (paisNasc.value == "tonga") {
        nacionalidade.value = "tonganiano";
    } else if (paisNasc.value == "papua nova guine") {
        nacionalidade.value = "papua";
    } else if (paisNasc.value == "kiribati") {
        nacionalidade.value = "kiribatiano";
    } else if (paisNasc.value == "tuvalu") {
        nacionalidade.value = "tuvaluano";
    } else if (paisNasc.value == "nauru") {
        nacionalidade.value = "nauruano";
    } else if (paisNasc.value == "vanuatu") {
        nacionalidade.value = "vanuatense";
    }

    // OUTROS
    else if (paisNasc.value == "outros") {
        nacionalidade.value = "outra";
    }

    // Caso nenhum país seja selecionado
    else {
        nacionalidade.value = "";
    }
});

//JUEGO VERSION 1.0
function piedraPapelTijera() {
    var input
    while (true) {
        if (!(input = prompt("Elige Piedra, Papel o Tijera para empezar"))) {
            alert("Ingresa una opcion válida")
        }
        else if (input) {
            inputLowerCase = input.toLowerCase()
            if ((inputLowerCase === "piedra") || (inputLowerCase === "papel") || (inputLowerCase === "tijera")) {
                break
            } else {
                alert("Ingresaste: " + "'" + input.toUpperCase() + "'!" + ", ingresa piedra, papel o tijera por favor!!!")
            }
        }
    }
    if ((inputLowerCase === "piedra") || (inputLowerCase === "papel") || (inputLowerCase === "tijera")) {
        //alert("Ingresaste una opcion válida, continuemos")
        if (true) {
            var turnoCompu = [
                "Piedra",
                "Papel",
                "Tijera"
            ]
            var randomNumber = Math.floor(Math.random() * 3)
            var turnoRandom = turnoCompu[randomNumber]
            var turnoRandomLowerCase = turnoRandom.toLowerCase()

            alert("Vos elegiste: " + input + ", y la compu eligió " + turnoRandom + " entonces...")
            switch (inputLowerCase) {
                case "piedra":
                    if (inputLowerCase === turnoRandomLowerCase) {
                        alert("EMPATE!")
                    } else if (turnoRandomLowerCase === "tijera") {
                        alert("GANASTE BUHHH")
                    } else if (turnoRandomLowerCase === "papel") {
                        alert("PERDISTE JAJAJAJA")
                    }
                    break
                case "papel":
                    if (inputLowerCase === turnoRandomLowerCase) {
                        alert("EMPATE!")
                    } else if (turnoRandomLowerCase === "piedra") {
                        alert("GANASTE BUHHH")
                    } else if (turnoRandomLowerCase === "tijera") {
                        alert("PERDISTE JAJAJA")
                    }
                    break
                case "tijera":
                    if (inputLowerCase === turnoRandomLowerCase) {
                        alert("EMPATE!")
                    } else if (turnoRandomLowerCase === "papel") {
                        alert("GANASTE BUHHH")
                    } else if (turnoRandomLowerCase === "piedra") {
                        alert("PERDISTE JAJAJA")
                    }
                    break
            }
        }
    }
}
//JUEGO VERSION 2.0
function JugarPiedraPapelOTijera() {
    swal("Okey, empecemos con el juego!", "Elegí una opción para empezar", "success", {
        buttons: {
            piedra: {
                text: "Piedra",
                value: "piedra",
            },
            papel: {
                text: "Papel",
                value: "papel",
            },
            tijera: {
                text: "Tijera",
                value: "tijera",
            },
        },
    })
        .then((value) => {
            var turnoCompu = [
                "Piedra",
                "Papel",
                "Tijera"
            ]
            var randomNumber = Math.floor(Math.random() * 3)
            var turnoRandom = turnoCompu[randomNumber]
            var turnoRandomLowerCase = turnoRandom.toLowerCase()
            switch (value) {
                case "piedra":
                    if (value === turnoRandomLowerCase) {
                        swal("Oh, elegiste Piedra!", "Y la compu eligió " + turnoRandom + ", entonces: Es un empate!", "warning")
                    } else if (turnoRandomLowerCase === "tijera") {
                        swal("Bien, elegiste Piedra!", "Y la compu eligió " + turnoRandom + ", entonces: Ganaste buhhh!", "success")
                    } else if (turnoRandomLowerCase === "papel") {
                        swal("Mal, elegiste Piedra!", "Y la compu eligió " + turnoRandom + ", entonces: Perdiste jaja", "error")
                    }
                    break;
                case "papel":
                    if (value === turnoRandomLowerCase) {
                        swal("Oh, elegiste Papel!", "Y la compu eligió " + turnoRandom + ", entonces: Es un empate!", "warning")
                    } else if (turnoRandomLowerCase === "piedra") {
                        swal("Bien, elegiste Papel!", "Y la compu eligió " + turnoRandom + ", entonces: Ganaste buhhh!", "success")
                    } else if (turnoRandomLowerCase === "tijera") {
                        swal("Mal, elegiste Papel!", "Y la compu eligió " + turnoRandom + ", entonces: Perdiste jaja", "error")
                    }
                    break;
                case "tijera":
                    if (value === turnoRandomLowerCase) {
                        swal("Oh, elegiste Tijera!", "Y la compu eligió " + turnoRandom + ", entonces: Es un empate!", "warning")
                    } else if (turnoRandomLowerCase === "papel") {
                        swal("Bien, elegiste Tijera!", "Y la compu eligió " + turnoRandom + ", entonces: Ganaste buhhh!", "success")
                    } else if (turnoRandomLowerCase === "piedra") {
                        swal("Mal, elegiste Tijera!", "Y la compu eligió " + turnoRandom + ", entonces: Perdiste jaja", "error")
                    }
                    break;
                default:
                    swal("Nope!", "Elegí una opción", "error");
            }
        });
}

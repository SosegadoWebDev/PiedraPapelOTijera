function piedraPapelTijera() {
    var input
    while (true) {
        if (!(input = prompt("Elige piedra, papel o tijera para empezar"))) {
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
/*
swal("Comenzamos el juego!","Elige piedra papel o tijera?", {
    buttons: {
      piedra: "Piedra",
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
    switch (value) {
   
      case "piedra":
        swal("Bien!", "Elegiste Piedra", "success");
        break;
   
      case "papel":
        swal("Bien!", "Elegiste Papel", "success");
        break;
   
        case "tijera" :
        swal("Bien!", "Elegiste Tijera", "success");
          break
    }
  });*/
// El cuerno de rinoceronte se compone de pelo compactado.
// La guerra más corta de la historia tuvo lugar entre Zanzibar e Inglaterra en 1896. Zanzíbar se rindió a los 38 minutos.
//La piel de un oso polar es negra. Su pelaje tampoco es blanco sino más bien claro.
//Los cómics del pato Donald se prohibieron en Finlandia porque no llevaba pantalones.
//Existen 118 elementos en la tabla y 27 letras en el alfabeto. Sonaba casi obvio que todas estarían incluidas. Pero la verdad es que no, la J  no está y las más frecuentes son la M y la U. La razón de la ausencia de la letra J, es que esta no forma parte del alfabeto clásico.

const formValidation = (form) => {
    let array = document.getElementsByClassName("incorrect")
    for (let i = 0; i < array.length; i++) {
        array[i].setAttribute("style","display: none");
    }

    let boolean = true;
    
    if (form.queztion_1.value != "3") {
        document.getElementById("quiz-incorrect-1").setAttribute("style","display: block");
        boolean = false;
    }

    if (form.queztion_2.value != "2") {
        document.getElementById("quiz-incorrect-2").setAttribute("style","display: block");
        boolean = false;
    }

    if (form.queztion_3.value != "4") {
        document.getElementById("quiz-incorrect-3").setAttribute("style","display: block");
        boolean = false;
    }
    if (form.queztion_4.value != "1") {
        document.getElementById("quiz-incorrect-4").setAttribute("style","display: block");
        boolean = false;
    }
    if (form.queztion_5.value != "3") {
        document.getElementById("quiz-incorrect-5").setAttribute("style","display: block");
        boolean = false;
    }
    if (form.queztion_6.value != "3") {
        document.getElementById("quiz-incorrect-6").setAttribute("style","display: block");
        boolean = false;
    }

    return boolean;
}
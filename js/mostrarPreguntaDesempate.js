import { mostrarResultadoFinal } from "../main.js";
export function mostrarPreguntaDesempate(casas) {
    const listaBoton = document.getElementById("button-container");
    qatext.innerText = "Empate detectado. Una última pregunta... \n¿Qué buscas en un desafío?";

    listaBoton.innerHTML = "";

    // Asociación entre casas y claves de opciones
    const clavePorCasa = {
        Gryffindor: "preg1",
        Slytherin: "preg2",
        Ravenclaw: "preg3",
        Hufflepuff: "preg4"
    };

    // Pregunta extra fija (puede ser la última del array opciones)
    const preguntaExtra = {
        preg1: "La gloria",
        preg2: "El poder",
        preg3: "El conocimiento",
        preg4: "La justicia"
    };
    console.log(casas);

    casas.forEach(casa => {
        const clave = clavePorCasa[casa];
        const textoRespuesta = preguntaExtra[clave];

        const boton = document.createElement("button");
        boton.classList.add("button")
        boton.innerText = textoRespuesta;
        boton.addEventListener("click", () => {

            // Llamamos a la función mostrarResultadoFinal que está en main.js
            mostrarResultadoFinal(casa);
        });

        listaBoton.appendChild(boton);
    });
}

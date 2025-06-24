import { final } from "./js/puntosFinal.js";
import { puntaje } from "./js/calcularPuntaje.js";

let puntajes = {
    gryffindor:0,
    slytherin:0,  
    ravenclaw:0,
    hufflepuff:0,
}

const pregunta = [
    "¿Qué cualidad valoras más?",
    "¿Qué criatura mágica prefieres?",
    "¿Qué asignatura te gustaría más?",
    "¿Qué harías si vieras a alguien en problemas?"
];

const opciones = [{
    preg1: "Valentía",
    preg2: "Ambición",
    preg3: "Inteligencia",
    preg4: "Lealtad",
},
{
    preg1: "Fénix",
    preg2: "Basilisco",
    preg3: "Águila",
    preg4: "Tejón",
},
{
    preg1: "Defensa Contra las Artes Oscuras",
    preg2: "Pociones",
    preg3: "Encantamientos",
    preg4: "Herbología",
},
{
    preg1: "Actuar sin dudar",
    preg2: "Evaluar la ventaja",
    preg3: "Buscar la solución",
    preg4: "Ayudar incondicionalmente",
},
];

let indice = 0;
const qatext = document.getElementById("qatext");
const listaBoton = document.getElementById("button-container");

function mostrarPregunta() {
    // Borrar botones anteriores
    listaBoton.innerHTML = "";

    // Mostrar la pregunta actual
    qatext.innerText = pregunta[indice];

    // Obtener opciones de la pregunta actual
    const actual = opciones[indice];

    for (let a = 1; a <= pregunta.length; a++) {
        const boton = document.createElement("button");
        const key = `preg${a}`;
        boton.innerText = actual[`preg${a}`];

        boton.addEventListener("click", () => {
            console.log(`Elegiste: ${actual[`preg${a}`]}`);
            console.log(key);
            puntaje(key, puntajes)
            // console.log(gryffindor, slytherin, ravenclaw, hufflepuff);
            
            indice++;

            if (indice < pregunta.length) {
                mostrarPregunta();
            } else {
                const nombreCasaFinal = final(puntajes.gryffindor, puntajes.slytherin, puntajes.ravenclaw, puntajes.hufflepuff)
                qatext.innerText = `Te pondré en... ${nombreCasaFinal}`;
                listaBoton.innerHTML = "";
                if (nombreCasaFinal === "Gryffindor") {
                    const img = document.createElement('img');
                    img.src = './assets/gryffindor.png';
                    img.width = 300;
                    listaBoton.appendChild(img);
                } else if (nombreCasaFinal === "Slytherin") {
                    const img = document.createElement('img');
                    img.src = './assets/slytherin.png';
                    img.width = 300;
                    listaBoton.appendChild(img);
                } else if (nombreCasaFinal === "Ravenclaw") {
                    const img = document.createElement('img');
                    img.src = './assets/ravenclaw.png';
                    img.width = 300;
                    listaBoton.appendChild(img);
                } else if (nombreCasaFinal === "Hufflepuff") {
                    const img = document.createElement('img');
                    img.src = './assets/hufflepuff.png';
                    img.width = 300;
                    listaBoton.appendChild(img);
                }
            }
        });

        listaBoton.appendChild(boton);
    }
}

mostrarPregunta();







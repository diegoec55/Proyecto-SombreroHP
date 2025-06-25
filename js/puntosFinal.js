import {mostrarPreguntaDesempate} from "./mostrarPreguntaDesempate.js"

export function final(g, s, r, h) {
    let maxpuntos = Math.max(g, s, r, h);
    let resultadoCasa = "";

        // Guardamos las casas y puntos en un objeto
    const casas = {
        Gryffindor: g,
        Slytherin: s,
        Ravenclaw: r,
        Hufflepuff: h
    };

    // Buscamos las casas con el puntaje máximo
    const empatadas = Object.entries(casas)
        .filter(([_, puntos]) => puntos === maxpuntos)
        .map(([casa]) => casa);

    if (empatadas.length === 1) {
        resultadoCasa = empatadas[0];
        return resultadoCasa;
    } else {
        mostrarPreguntaDesempate(empatadas)
    }
}
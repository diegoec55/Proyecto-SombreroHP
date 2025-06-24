export function final(g, s, r, h) {
    let maxpuntos = Math.max(g, s, r, h);
    let resultadoCasa = "";

    if (maxpuntos === g) {
        resultadoCasa = "Gryffindor";
    } else if (maxpuntos === s) {
        resultadoCasa = "Slytherin";
    } else if (maxpuntos === r) {
        resultadoCasa = "Ravenclaw";
    } else if (maxpuntos === h) {
        resultadoCasa = "Hufflepuff";
    }
    console.log(g, s, r, h);
    console.log(`El ganador es: ${resultadoCasa}`);
    return resultadoCasa

}
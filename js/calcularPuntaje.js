

export function puntaje(respuesta, gryffindor, slytherin, ravenclaw, hufflepuff) {
    switch (respuesta) {
        case "preg1":
            gryffindor++;
            break;
        case "preg2":
            slytherin++;
            break;
        case "preg3":
            ravenclaw++;
            break;
        case "preg4":
            hufflepuff++;
            break;
    }

    console.log(gryffindor, slytherin, ravenclaw, hufflepuff);

    return (gryffindor, slytherin, ravenclaw, hufflepuff)
}
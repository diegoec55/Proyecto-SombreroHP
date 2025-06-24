

export function puntaje(respuesta, puntajes) {
    
    
    switch (respuesta) {
        case "preg1":
            puntajes.gryffindor++;
            break;
        case "preg2":
            puntajes.slytherin++;
            break;
        case "preg3":
            puntajes.ravenclaw++;
            break;
        case "preg4":
            puntajes.hufflepuff++;
            break;
    }

    // console.log(puntajes.gryffindor, puntajes.slytherin, puntajes.ravenclaw, puntajes.hufflepuff);

}
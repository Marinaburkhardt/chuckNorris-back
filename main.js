const figura = {
    CHUCKPIEDRA: "piedra",
    CHUCKPAPEL: "papel",
    CHUCKTIJERA: "tijera"
}

function output(nroJugador) {
    let result
    console.log(`
    
    What's your chuck?
    
    JUGADOR ${nroJugador}: Elegi tu chuck norris
        1 - chuck1 (piedra)
        2 - chuck2 (papel)
        3 - chuck3 (tijera)
    `, )

    return result
}

// return readOption(numero)

/**
 * 
 * @param {figura} figura1 
 * @param {figura} figura2 
 * 
 * en caso de que figura 1 "gane" 2 devuelve 1
 * en caso de que las dos figuras "empaten" devuelve 0
 * en caso de que la figura 1 "pierda" devuelve -1
 * 
 */
function compare(figura1, figura2) {
    result = 1
    if (figura1 == figura2) {
        result = 0
    } else if (figura1 == figura.CHUCKPAPEL && figura2 == figura.CHUCKTIJERA) {
        result = -1
    } else if (figura1 == figura.CHUCKPIEDRA && figura2 == figura.CHUCKPAPEL) {
        result = -1
    } else if (figura1 == figura.CHUCKTIJERA && figura2 == figura.CHUCKPIEDRA) {
        result = -1
    }
    return result
} 


function readOption(numero) {
    if (numero == 1) {
        result = figura.CHUCKPIEDRA
    } else if (numero == 2) {
        result = figura.CHUCKPAPEL
    } else {
        result = figura.CHUCKPIEDRA
    }
}



a = output(2)

console.log(a)
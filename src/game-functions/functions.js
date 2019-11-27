/**
  * ARMA = PIEDRA
  * SONRISA = PAPEL
  * SOMBRERO = TIJERA
 */

const tipoFigura = {
    PIEDRA: 1, /** PIEDRA */
    PAPEL: 2, /** PAPEL */
    TIJERA: 3 /** TIJERA */
}
/**
 * La pregunta es: ¿figura1 le gana a figura2?
 * @param {tipoFigura} figura1 
 * @param {tipoFigura} figura2 
 * La respuesta es:
 * 1 = "SI"
 * 0 = "NO, ES EMPATE"
 * -1 = "NO"
 */
function comparar(figura1, figura2) {
    let result = -1
    if (figura1 == figura2) {
        result = 0
    } else if (figura1 == tipoFigura.PIEDRA && figura2 == tipoFigura.TIJERA) {
        result = 1
    } else if (figura1 == tipoFigura.PAPEL && figura2 == tipoFigura.PIEDRA) {
        result = 1
    } else if (figura1 == tipoFigura.TIJERA && figura2 == tipoFigura.PAPEL) {

        result = 1
    }
    return result
}

/**
 * 
 * @param {tipoFigura} figura 
 * si es una figura valida
 * devuelve true caso contrario devuelve false
 */
function esFiguraValida(figura) {
    result = false
    if (figura == tipoFigura.SOMBRERO || figura == tipoFigura.ARMA || figura == tipoFigura.SONRISA) {
        result = true
    }
    return result
}

/**
 * Valida si la partida es terminada antes de tiempo o no
 * @param {*} totalTurnos 
 * @param {*} turnosGanados 
 */
function isTerminada(turnosGanados) {
    const MAX_TURNOS = 3
    result = false
    if ((MAX_TURNOS / 2 + 0.5) == turnosGanados) {
        result = true
    }
    return result
}

function contarTurnos(turnos) {
    let jugador1 = {
        nickJugador: '',
        turnosGanados: 0
    }

    let jugador2 = {
        nickJugador: '',
        turnosGanados: 0
    }

    /*
        "Turnos": [{
                "IdTurno": 1,
                "NumeroTurno": 1,
                "IdJugadaPorJugador": 19,
                "Jugada1": "Piedra",
                "IdJugadaPorJugador2": 2,
                "Jugada2": "Papel",
                "JugadorPorJugar": "edditrana",
                "NickJugadorGanador": "edditrana"
            }, {
                "IdTurno": 2,
                "NumeroTurno": 2,
                "IdJugadaPorJugador": 3,
                "Jugada1": "Papel",
                "IdJugadaPorJugador2": null,
                "Jugada2": null,
                "JugadorPorJugar": "edditrana",
                "NickJugadorGanador": null
            }]
    
    */
}


function calcularGanador(turnos, nickJugador1, nickJugador2) {
    let cantTurnosJug1 = 0; let cantTurnosJug2 = 0; let result
    turnos.forEach(turno => {
        if (nickJugador1 == turno.NickJugadorGanador) {
            cantTurnosJug1++
        } else if (nickJugador2 == turno.NickJugadorGanador) {
            cantTurnosJug2++
        } else if (turno.NickJugadorGanador == null) {
            //nada
        }
    })
    if (cantTurnosJug1 > cantTurnosJug2) {
        result = 0
    } else if (cantTurnosJug1 < cantTurnosJug2) {
        result = 1
    } else {
        result = null
    }
    return result
}


function isPartidaTerminada(turnos, nickJugador1, nickJugador2, ganadorTurnoActual) {
    let terminada = false; let j1 = 0; let j2 = 0; let i = 0
    console.log("ESTAN JUGANDO " + nickJugador1 + "  y  " + nickJugador2)
    if (nickJugador1 == ganadorTurnoActual) {
        j1 = 1
    } else {
        j2 = 1
    }
    console.log("CANT TURNOS = " + turnos.length + " MAS EL ACUTAL * +1")
    while (i < turnos.length) {
        console.log(" j1 = " + j1 + "   " + "j2 = " + j2 + "   TURNO: " + (i + 1))

        if (turnos[i].NickJugadorGanador == nickJugador1) {
            console.log(turnos[i].NickJugadorGanador)
            j1++
        } else if (turnos[i].NickJugadorGanador2 == nickJugador2) {
            console.log(turnos[i].NickJugadorGanador2)
            j2++
        }
        i++
    }
    let result

    if (j1 == 3) {
        result = 0
    } else if (j2 == 3) {
        result = 1
    } else {
        result = null
    }

    console.log("JUGADOR 1 TIENE " + j1 + " turnos ganados y JUGADOR 2 TIENE " + j2)

    console.log(" EL RESULTADO ES ======>" + result)
    return result
}





module.exports = {
    comparar,
    isPartidaTerminada,
    calcularGanador
}


/*
 * ARMA = PIEDRA
 * SONRISA = PAPEL
 * SOMBRERO = TIJERA
*/

import Partida from '../../models/partida-model'
import turno from './turno-memory-dao'

let partidas = []
partidas.push(createPartida(1, 1, "mkraitman", "edditrana", "2019-11-12"))
partidas.push(createPartida(2, 1, "mburkhardt", "edditrana", "2019-11-12"))
partidas.push(createPartida(3, 1, "mkraitman", "mburkhardt", "2019-11-12"))
partidas.push(createPartida(4, 1, "mkraitman", "edditrana", "2019-11-12"))
partidas.push(createPartida(5, 1, "mkraitman", "edditrana", "2019-11-12"))
partidas.push(createPartida(6, 1, "mkraitman", "edditrana", "2019-11-12"))
partidas.push(createPartida(7, 1, "mkraitman", "edditrana", "2019-11-12"))
partidas.push(createPartida(8, 1, "mkraitman", "edditrana", "2019-11-12"))

let turnos = []
turnos.push(turno.createTurno(1, 1, 1, 2, 1, 1, 'mkraitman'))

/**
 * 
 * @param {*identificador de partida} id 
 * @param {*estado que puede variar en 1, 2 o 3} idEstado 
 * @param {*nick del jugador 1 que participa de la partida (quien la crea)} nickJugador 
 * @param {*nick del jugador 2 quien es el que debe responder el turno} nickJugador2 
 * @param {*fecha de creacion} fecha 
 */
function createPartida(id, idEstado, nickJugador, nickJugador2, fecha) {
    return new Partida(id, idEstado, nickJugador, nickJugador2, fecha)
}

/**
 * 
 * @param {*trae todas las partidas de un jugador por su nick} nick 
 */
function getAllPartidasByNick(nick) {
    return getAllPartidas(nick)
}

/**
 * simula el stored procedure de la bd
 * @param {nick del jugador que participa en la partida} nick 
 */
async function getAllPartidas(nick) {
    let lstPartidas = []
    partidas.forEach(partida => {
        console.log(partida)
        if (partida.NickJugador == nick || partida.NickJugador2 == nick) {
            lstPartidas.push(partida)
        }
    })
    console.log(lstPartidas)
    return lstPartidas
}

/**
 * 
 * @param {*Trae todos los detalles de una partida por su id} idPartida 
 */
function obtenerDetalles(idPartida) {
    return buscarPartidaById(idPartida)
}

// function jugar(json) {
//     let partida = buscarPartidaById(idPartida)
//     if (partida == undefined) {
//         console.log(err)
//     } else {
//         if (nickJugador != partida.NickJugador && nickJugador != partida.nickJugador2) {
//             console.log("error, el jugador no corresponde a la partida")
//         } else if (nickJugador == partida.nickJugador) {
//             console.log("juega el jguador 1")

//         } else {
//             console.log("juega el jugador 2")

//         }
//     }
// }

/**
 * 
 * @param {*} idPartida 
 */
function getTurnosPartida(idPartida) {
    let lstTurnos = []
    turnos.forEach(turno => {
        console.log(turno)
        if (turno.IdPartida == idPartida) {
            lstTurnos.push(turno)
        }
    })
    return lstTurnos
}

async function buscarPartidaById(id) {
    let partida = undefined; let i = 0

    while (i < partidas.length && partida == undefined) {
        console.log(i)
        if (partidas[i].Id == id) {
            partida = partidas[i]
        } else {
            i++
        }
    }
    if (partida != undefined) {
        let turnos = getTurnosPartida(id)
        delete turnos["Turno"]
        return [
            {
                IdPartida: partida.Id,
                Descripcion: "descripcion",
                NickJugador: partida.NickJugador,
                NickJugador2: partida.NickJugador2,
                FechaCreacion: partida.FechaCreacion,
                Turnos: "",
            },
            turnos

        ]
    }else{
        return undefined
    }
}




module.exports = {
    getAllPartidasByNick,
    buscarPartidaById,
    obtenerDetalles
    // jugar
}
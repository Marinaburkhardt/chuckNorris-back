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


function createPartida(id, idEstado, nickJugador, nickJugador2, fecha) {
    return new Partida(id, idEstado, nickJugador, nickJugador2, fecha)
}

async function getAllPartidasByNick(nick) {
    return getAllPartidas(nick)
}

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

async function login(nick, password) {
    return buscarJugador(nick, password)
}


function jugar(idPartida, idTurno, numeroTurno, nickJugador, figura) {
    let partida = buscarPartidaById(idPartida)
    if (partida == undefined) {
        console.log(err)
    } else {
        if (nickJugador != partida.NickJugador && nickJugador != partida.nickJugador2) {
            console.log("error, el jugador no corresponde a la partida")
        } else if (nickJugador == partida.nickJugador) {
            console.log("juega el jguador 1")
            
        } else {
            console.log("juega el jugador 2")

        }
    }
}

function buscarPartidaById(id) {
    let partida = undefined; let i = 0
    while (i < partidas.length && partida == undefined) {
        console.log(i)
        if (partidas[i].Id == id) {
            partida = partidas[i]
        } else {
            i++
        }
    }
    return partida
}



module.exports = {
    getAllPartidasByNick,
    buscarPartidaById
}
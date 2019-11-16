import Partida from '../../models/partida-model'

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

async function buscarJugador(nick, password) {
    let jugador = undefined; let i = 0
    while (i < jugadores.length && jugador == undefined) {
        console.log(i)
        if (jugadores[i].NickJugador == nick && jugadores[i].Contraseña == password) {
            jugador = jugadores[i]
        } else {
            i++
        }
    }
    return jugador

}

module.exports = {
    getAllPartidasByNick
}
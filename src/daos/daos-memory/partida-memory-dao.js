import Partida from '../../models/partida-model'

let partidas = []
partidas.push(1, 1, "mkraitman", "edditrana", "2019-11-12" )
partidas.push(2, 1, "mburkhardt", "edditrana", "2019-11-12" )
partidas.push(3, 1, "mkraitman", "mburkhardt", "2019-11-12" )
partidas.push(4, 1, "mkraitman", "edditrana", "2019-11-12" )
partidas.push(5, 1, "mkraitman", "edditrana", "2019-11-12" )
partidas.push(6, 1, "mkraitman", "edditrana", "2019-11-12" )
partidas.push(7, 1, "mkraitman", "edditrana", "2019-11-12" )
partidas.push(8, 1, "mkraitman", "edditrana", "2019-11-12" )



function createPartida(id, idEstado, nickJugador, nickJugador2, fechaCreacion) {
    return new Partida(id, idEstado, nickJugador, nickJugador2, fechaCreacion)
}

function create(jugador) {
    if (buscarJugador(jugador.nick) != null) {
        jugadores.push(jugador)
    } else {
        throw new Error('Jugador ya existente')
    }
}

async function getAllPartidasByNick(nick) {
    return sacarJugador(nick)
}




async function getTop5() {
    return getTop()
}

async function getTop() {
    let lstJugadores = []
    let i = 0
    while (i < 5) {
        delete jugadores[i]['Contraseña']
        lstJugadores.push(jugadores[i])
        i++
        console.log(i)
    }
    return lstJugadores
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
    login,
    getAllPartidasByNick,
    getTop5
}
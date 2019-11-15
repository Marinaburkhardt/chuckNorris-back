import Jugador from '../../models/jugador-model'
import ResponseError from '../../models/response-error-model'


let jugadores = []
jugadores.push(createJugador('admin', 'mkraitman@gmail.com', 'mkraitman', 0, 0))
jugadores.push(createJugador('admin', 'bmarina@gmail.com', 'bmarina', 0, 0))
jugadores.push(createJugador('admin', 'edditrana@gmail.com', 'edditrana', 0, 0))
jugadores.push(createJugador('admin', 'saraza@gmail.com', 'jose', 0, 0))
jugadores.push(createJugador('admin', 'saraza@gmail.com', 'pepe', 0, 0))
jugadores.push(createJugador('admin', 'saraza@gmail.com', 'juan', 0, 0))
jugadores.push(createJugador('admin', 'saraza@gmail.com', 'roberto', 0, 0))


function createJugador(password, mail, nick, partidasJugadas, partidasGanadas) {
    return new Jugador(password, mail, nick, partidasJugadas, partidasGanadas)
}



function create(jugador) {
    if (buscarJugador(jugador.nick) != null) {
        jugadores.push(jugador)
    } else {
        throw new Error('Jugador ya existente')
    }
}

async function getAllJugadoresByNick(nick) {
    return sacarJugador(nick)
}

async function sacarJugador(nick) {
    let i = 0; let lstJugadores = jugadores;
    let result; let cant = lstJugadores.length
    while (i < lstJugadores.length) {
        delete jugadores[i]['Contraseña']
        delete jugadores[i]['PartidasJugadas']
        delete jugadores[i]['PartidasGanadas']
        if (lstJugadores[i].NickJugador == nick) {
            lstJugadores.splice(i, 1)
        } else {
            i++
        }
    }
    if (i == cant) {
        result = "no encontrado"
    } else {
        result = lstJugadores
    }
    return result
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
    getAllJugadoresByNick,
    getTop5
}
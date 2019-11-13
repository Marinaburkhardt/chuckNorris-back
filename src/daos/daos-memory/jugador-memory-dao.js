import Jugador from '../../models/jugador-model'


let jugadores = []
jugadores.push(createJugador('admin', 'mkraitman@gmail.com', 'mkraitman', 0, 0))
jugadores.push(createJugador('admin', 'bmarina@gmail.com', 'bmarina', 0, 0))
jugadores.push(createJugador('admin', 'edditrana@gmail.com', 'edditrana', 0, 0))


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
    login
}
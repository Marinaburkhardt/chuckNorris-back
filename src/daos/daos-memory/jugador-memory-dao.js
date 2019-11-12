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

function getAllJugadores(q, callback) {

}


function buscarJugador(nick) {
    let jugador = null; let i = 0
    while (i <  jugadores.length && jugador == null) {
        if ( jugadores[i].nick == nick) {
            jugador = jugadores[i]
        } else {
            i++
        }
    }
    return jugador
}



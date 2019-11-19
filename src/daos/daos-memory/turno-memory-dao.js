import Turno from '../../models/turno-model'

function createTurno(IdTurno, NumeroTurno, IdJugadaPorJugador1,
    IdJugadaPorJugador2, IdPartida, NickJugadorGanador, JugadorPorJugar) {

    return new Turno(IdTurno, NumeroTurno, IdJugadaPorJugador1, IdJugadaPorJugador2,
        IdPartida, NickJugadorGanador, JugadorPorJugar)
}


function buscarTurnoByIdPartida(idPartida) {

}

module.exports = { createTurno }

import Turno from '../../models/turno-model'

let turnos = []
turnos.push(createTurno(1, 1, 1, 2, null, 1,'mkraitman'))

function createTurno(IdTurno, NumeroTurno, IdJugadaPorJugador1,
    IdJugadaPorJugador2, IdPartida, NickJugadorGanador, JugadorPorJugar) {

   return new Turno(IdTurno, NumeroTurno, IdJugadaPorJugador1, IdJugadaPorJugador2,
        IdPartida, NickJugadorGanador, JugadorPorJugar)
}


function buscarTurnoByIdPartida(idPartida){

}
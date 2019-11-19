export default class Turno {
  constructor(IdTurno, NumeroTurno, IdJugadaPorJugador1, IdJugadaPorJugador2, IdPartida, NickJugadorGanador, JugadorPorJugar) {
    this.IdTurno = IdTurno
    this.NumeroTurno = NumeroTurno
    this.IdPartida = IdPartida
    this.IdJugadaPorJugador1 = IdJugadaPorJugador1
    this.IdJugadaPorJugador2 = IdJugadaPorJugador2
    this.NickJugadorGanador = NickJugadorGanador
    this.JugadorPorJugar = JugadorPorJugar
  }
}
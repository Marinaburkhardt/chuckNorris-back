/**
 * @swagger
 * definitions:
 *   Turno:
 *     type: object
 *     required:
 *       - numeroTurno
 *       - idPartida
 *       - idJugadaPorJugador1
 *       - idJugadaPorJugador2
 *       - nickJugadorGanador
 *     properties:
 *       numeroTurno:
 *         type: number
 *       idPartida:
 *         type: number
 *       idJugadaPorJugador1:
 *         type: number
 *       idJugadaPorJugador2:
 *         type: number
 *       nickJugadorGanador:
 *         type: string
 *   Turnos:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Turno'
 */
export default class Turno {
    constructor(numeroTurno, idPartida, idJugadaPorJugador1, idJugadaPorJugador2, nickJugadorGanador) {
      this.numeroTurno = numeroTurno
      this.idPartida = idPartida
      this.idJugadaPorJugador1 = idJugadaPorJugador1
      this.idJugadaPorJugador2 = idJugadaPorJugador2
      this.nickJugadorGanador = nickJugadorGanador
    }
  }
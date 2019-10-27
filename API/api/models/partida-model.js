/**
 * @swagger
 * definitions:
 *   Partida:
 *     type: object
 *     required:
 *       - idEstado
 *       - nickJugador
 *       - nickJugador2
 *       - fechaCreacion
 *     properties:
 *       idEstado:
 *         type: number
 *       nickJugador:
 *         type: string
 *       nickJugador2:
 *         type: string
 *       fechaCreacion:
 *         type: date
 *   Partidas:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Turnos'
 */
export default class Partida {
    constructor(idEstado, nickJugador, nickJugador2, fechaCreacion) {
      this.idEstado = idEstado
      this.nickJugador = nickJugador
      this.nickJugador2 = nickJugador2
      this.fechaCreacion = fechaCreacion
    }
  }
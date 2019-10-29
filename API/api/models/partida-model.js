/**
 * @swagger
 * definitions:
 *   Partida:
 *     type: object
 *     required:
 *       - id
 *       - idEstado
 *       - idJugador1
 *       - idJugador2
 *       - fechaCreacion
 *     properties:
 *       id:
 *         type: id
 *       idEstado:
 *         type: number
 *       idJugador1:
 *         type: number
 *       idJugador2:
 *         type: number
 *       fechaCreacion:
 *         type: date
 *   Partidas:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Turno'
 */
export default class Partida {
    constructor(id, idEstado, idJugador1, idJugador2, fechaCreacion) {
      this.id = id
      this.idEstado = idEstado
      this.idJugador1 = idJugador1
      this.idJugador1 = idJugador1
      this.fechaCreacion = fechaCreacion
    }
  }
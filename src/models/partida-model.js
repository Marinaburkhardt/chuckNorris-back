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
 *         type: number
 *       idEstado:
 *         type: number
 *       idJugador1:
 *         type: number
 *       idJugador2:
 *         type: number
 *       fechaCreacion:
 *         type: string
 *   Partidas:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Partida'
 */
export default class Partida {
  constructor(Id, IdEstado, NickJugador, NickJugador2, FechaCreacion) {
    this.Id = id
    this.IdEstado = idEstado
    this.NickJugador = NickJugador
    this.NickJugador2 = NickJugador2
    this.FechaCreacion = FechaCreacion
  }
}

/**
 * @swagger
 * definitions:
 *   Jugador:
 *     type: object
 *     required:
 *       - estadoPartida
 *     properties:
 *       estadoPartida:
 *         type: string
 *   Jugadores:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Partidas'
 */
export default class Estado {
    constructor(estadoPartida) {
      this.estadoPartida = estadoPartida
    }
  }
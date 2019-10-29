
/**
 * @swagger
 * definitions:
 *   Jugador:
 *     type: object
 *     required:
 *       - id
 *       - password
 *       - mail
 *       - nick
 *       - partidasJugadas
 *       - partidasGanadas
 *     properties:
 *       password:
 *         type: string
 *       mail:
 *         type: string
 *       nick:
 *         type: string
 *       partidasJugadas:
 *         type: number
 *       partidasGanadas:
 *         type: number
 *   Jugadores:
 *     type: array
 *     items:  
 *       $ref: '#/definitions/Jugador'
 */
export default class Jugador {
    constructor(id, password, mail, nick, partidasJugadas, partidasGanadas) {
      this.id = id
      this.password = password
      this.mail = mail
      this.nick = nick
      this.partidasJugadas = partidasJugadas
      this.partidasGanadas = partidasGanadas
    }
  }
  
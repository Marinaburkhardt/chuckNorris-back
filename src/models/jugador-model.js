
/**
 * @swagger
 * definitions:
 *   Jugador:
 *     type: object
 *     required:
 *       - password
 *       - Mail
 *       - NickJugador
 *       - partidasJugadas
 *       - partidasGanadas
 *     properties:
 *       password:
 *         type: string
 *       Mail:
 *         type: string
 *       NickJugador:
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
    constructor(Contraseña, Mail, NickJugador, partidasJugadas, partidasGanadas) {
      this.Contraseña = Contraseña
      this.Mail = Mail
      this.NickJugador = NickJugador
      this.partidasJugadas = partidasJugadas
      this.partidasGanadas = partidasGanadas
    }
  }
  
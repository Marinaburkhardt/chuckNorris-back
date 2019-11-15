
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
    constructor(Contraseña, Mail, NickJugador, PartidasJugadas, PartidasGanadas) {
      this.NickJugador = NickJugador
      this.Contraseña = Contraseña
      this.Mail = Mail
      this.PartidasJugadas = PartidasJugadas
      this.PartidasGanadas = PartidasGanadas
    }
  }
  
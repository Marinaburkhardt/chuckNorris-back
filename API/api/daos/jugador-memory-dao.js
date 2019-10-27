import Model from '../models/jugador-model'

export default class JugadorMemoryDAO {
    constructor() {
        this.data = new Map()

        this.createJugador('mkraitman', 'admin', 'mkraitman@gmail.com', 'mkraitman', 3, 1)
        this.createJugador('bmarina', 'admin', 'bmarina@gmail.com', 'burkhardtmarina', 3, 1)
        this.createJugador('edditrana', 'admin', 'edditrana@gmail.com', 'edditrana', 3, 1)
    }

    createJugador(password, mail, nick, partidasJugadas, partidasGanadas) {
        this.data.set(nick, new Model(password, mail, nick, partidasJugadas, partidasGanadas))
    }

    getAllJugadores() {
        return Array.from(this.data.values())
    }

}

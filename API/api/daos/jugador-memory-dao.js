import Model from '../models/jugador-model'

export default class JugadorMemoryDAO {
    constructor() {
        this.data = new Map()
        this.createJugador(0, 'admin', 'mkraitman@gmail.com', 'mkraitman', 3, 1)
        this.createJugador(1, 'admin', 'bmarina@gmail.com', 'bmarina', 3, 1)
        this.createJugador(2, 'admin', 'edditrana@gmail.com', 'edditrana', 3, 1)
    }

    createJugador(id, password, mail, nick, partidasJugadas, partidasGanadas) {
        this.data.set(id, new Model(id, password, mail, nick, partidasJugadas, partidasGanadas))
    }

    getAllJugadores() {
        return Array.from(this.data.values())
    }

    buscarJugador(id) {
        if (this.data.has(id)) {
            return this.data.get(id)
        } else {
            throw new Error(`Jugador con el id ${id} no existe`)
        }
    }
}

import Model from '../models/jugador-model'

export default class JugadorMemoryDAO {
    constructor() {
        this.data = new Map()
        this.createJugador(0, 'admin', 'mkraitman@gmail.com', 'mkraitman', 0, 0)
        this.createJugador(1, 'admin', 'bmarina@gmail.com', 'bmarina', 0, 0)
        this.createJugador(2, 'admin', 'edditrana@gmail.com', 'edditrana', 0, 0)
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

    create(jugador) {
        if (this.data.has(jugador.id)) {
            throw new Error(`un jugador con el id ${jugador.id} ya existe`)
        } else {
            this.createStock(jugador.id, jugador.password, jugador.mail, jugador.nick, jugador.partidasJugadas, jugador.partidasGanadas)
            return this.retrieve(jugador.id)
        }
    }
}

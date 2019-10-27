import Model from '../models/jugador-model'

export default class PartidaMemoryDAO {
    constructor() {
        this.data = new Map()
        this.createPartida(0, 'ejemploEstado', 0, 1, new Date(2019, 10, 29))
    }

    createPartida(id, idEstado, idJugador1, idJugador2, fechaCreacion) {
        this.data.set(id, new Model(id, idEstado, idJugador1, idJugador2, fechaCreacion))
    }

    getAllPartidas(id) {
        let array = []
        if (this.data.has(id)) {
            array.push(this.data.get(nickJugador2)) 
        } else {
            throw new Error(`Jugador con el id ${id} no existe`)
        }
    }
}
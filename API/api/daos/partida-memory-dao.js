import Model from '../models/partida-model'

export default class PartidaMemoryDAO {
    constructor() {
        this.data = new Map()
        this.createPartida(1, 'ejemploEstado', 0, 1, "2019-10-29")
    }

    createPartida(id, idEstado, idJugador1, idJugador2, fechaCreacion) {
        this.data.set(id, new Model(id, idEstado, idJugador1, idJugador2, fechaCreacion))
    }

    getAllPartidas() {
        return Array.from(this.data.values())
    }

    getPartidaById(id) {
        if (this.data.has(id)) {
            return this.data.get(id)
        } else {
            throw new Error(`No hay partidas con el id ${id}`)
        }
    }

    create(partida) {
        if (this.data.has(partida.id)) {
            throw new Error(`una partida con el id ${partida.id} ya existe!`)
        } else {
            this.createPartida(partida.id, partida.idEstado, partida.idJugador1, partida.idJugador2, partida.fechaCreacion)
            return this.getPartidaById(partida.id)
        }
    }
}
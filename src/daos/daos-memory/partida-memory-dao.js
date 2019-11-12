import Partida from '../../models/partida-model'

export default class PartidaMemoryDAO {
    constructor() {
        this.partidas = []

        this.createPartida(1, 'ejemploEstado', 0, 1, "2019-10-29")
    }

    createPartida(idEstado, idJugador1, idJugador2, fechaCreacion) {
        this.partidas.push(new Partida(idEstado, idJugador1, idJugador2, fechaCreacion))
    }

    getAllPartidas() {
        return this.partidas
    }

    getPartidaByJugador() {
       return 
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
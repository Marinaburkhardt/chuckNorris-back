import Model from '../models/turno-model'


export default class JugadorMemoryDAO {
    constructor() {
        this.data = new Map()
        this.createJugador(0, 'admin', 'mkraitman@gmail.com', 'mkraitman', 0, 0)
    }

    createTurno(numeroTurno, idPartida, idJugadaPorJugador1, idJugadaPorJugador2, nickJugadorGanador) {
        this.data.set(numeroTurno, new Model(numeroTurno, idPartida, idJugadaPorJugador1, idJugadaPorJugador2, nickJugadorGanador))
    }

    getTurnoByNumero(numeroTurno) {
        if (this.data.has(numeroTurno)) {
            return this.data.get(numeroTurno)
        } else {
            throw new Error(`Turno con el numero ${numeroTurno} no existe`)
        }
    }
}
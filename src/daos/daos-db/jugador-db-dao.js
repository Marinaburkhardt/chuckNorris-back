import Model from '../../models/jugador-model'//mas adelante se validaran las estructuras
const db = require('../../database/db-functions')

function getAllJugadores() {
    return db.query('SELECT * FROM jugador')
}

function getTop5() {
    return db.execInt('[dbo].[obtenerTopJugadores]', 'cantidad', 5)
}

function getAllJugadoresByNick(nick) {
    return db.execVarchar('[dbo].[obtenerJugadores]', 'nickJugador', nick)
}

function login(nick, password) {
    let query = `SELECT * FROM jugador WHERE NickJugador = '${nick}' AND Contraseña = '${password}'`
    console.log(query)
    return db.query(query)
}



//SELECT * FROM jugador WHERE NickJugador = 'mkraitman' AND Contraseña = '213a'

function create(jugador) {
    if (this.data.has(jugador.id)) {
        throw new Error(`un jugador con el id ${jugador.id} ya existe`)
    } else {
        this.createStock()
        return this.retrieve(jugador.id)
    }
}

module.exports = {
    getAllJugadores,
    getTop5,
    login,
    getAllJugadoresByNick
}


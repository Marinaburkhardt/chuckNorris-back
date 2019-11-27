const db = require('../../database/db-functions')

function getAllJugadores() {
    return db.query('SELECT * FROM jugador')
}

function getTop5() {
    return db.execInt('[dbo].[obtenerTopJugadores]', 'cantidad', 5)
}

function getAllJugadoresByNick(nick) {
    return db.execVarchar2('[dbo].[obtenerJugadores]', 'nickJugador', nick)
}

function login(nick, password) {
    let query = `SELECT * FROM jugador WHERE NickJugador = '${nick}' AND Contraseña = '${password}'`
    console.log(query)
    return db.query(query)
}
//SELECT * FROM jugador WHERE NickJugador = 'mkraitman' AND Contraseña = '213a'

module.exports = {
    getAllJugadores,
    getTop5,
    login,
    getAllJugadoresByNick
}


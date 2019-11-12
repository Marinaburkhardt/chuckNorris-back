import Model from '../../models/partida-model' //mas adelatne se validaran las estructuras
const db = require('../../database/db-functions')


function getAllPartidasByNick(nick) {
    return db.execVarchar('[dbo].[obtenerPartidasEnJuego]', 'nickJugador', nick)
}

function comenzarPartida(nickJugador1, nickJugador2){
    return db.execVarchar('[dbo].[comenzarPartida]', 'nickJugador1', nickJugador1, 'nickJugador2', nickJugador2)
}


module.exports = {
    getAllPartidasByNick,
    comenzarPartida
}


const db = require('../../database/db-functions')

function getAllPartidasByNick(nick) {
    return db.execVarchar2('[dbo].[obtenerPartidasEnJuego]', 'nickJugador', nick)
}

function comenzarPartida(nickJugador1, nickJugador2) {
    return db.execVarchar('[dbo].[comenzarPartida]', 'nickJugador1', nickJugador1, 'nickJugador2', nickJugador2)
}

function jugar(json) {
    return db.execJson('[dbo].[jugar]', 'jsonJugada' , json)
}

function obtenerDetalles(idPartida){
    return db.execInt('[dbo].[obtenerDetallePartida]', 'idPartida', idPartida)
}


module.exports = {
    getAllPartidasByNick,
    comenzarPartida,
    obtenerDetalles,
    jugar
}


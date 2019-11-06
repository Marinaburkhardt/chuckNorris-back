const request = require('request-promise-native')

const serverUrl = 'http://localhost:3000/api/'

async function consultarJugadores() {
    const postOpt = {
        method: 'GET',
        uri: serverUrl + 'jugador/jugadores',
        json: true
    }

    return await request(postOpt)
}


module.exports = {
    consultarJugadores
}
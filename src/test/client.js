const request = require('request-promise-native')

const serverUrl = 'http://localhost:3000/api/'

 function consultarJugadores(nick, password) {
    const postOpt = {
        method: 'POST',
        uri: serverUrl + 'jugador/login',
        body: {
            nick: nick,
            password: password
        },
        json: true
    }
    return request(postOpt)
}

//get example
// async function consultarJugadores() {
//     const postOpt = {
//         method: 'GET',
//         uri: serverUrl + 'jugador/jugadores',
//         json: true
//     }
//     return await request(postOpt)
// }


function login() {
    const postOpt = {
        method: 'POST',
        uri: serverUrl + 'jugador/login',
        json: true
    }
    return request(postOpt)
}

module.exports = {
    consultarJugadores
}
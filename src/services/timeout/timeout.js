const mailingChuck = require('../mailingChuck/mailChuck')
let timeoutID = 300000 //equivalente a 5min

/**
 * @param {*} primerJugador jugador que realiza la primer jugada dentro del turno
 * @param {*} segundoJugador jugador que realiza la segunda jugada dentro del turno
 * @param {*} idPartida identificador de la partida en juego
 */
function reivisarTimeoutPartida(ulitmoJugador, proximoJugador, idPartida) {
    let idJugadaUltimoJugador;
    let idJugadaProximoJugador;

    setTimeout (function(){
        if (idJugadaProximoJugador == null && idJugadaUltimoJugador <= 10){ //verifica q no haya terminado el juego
            mailingChuck.envioMailChuck(proximoJugador,'perdisteTimeout')
            mailingChuck.envioMailChuck(ulitmoJugador,'ganaste')
            //set partida finalizada
        } else {
            clearTimeout(timeoutID)   
        }
    }, timeoutID)

}

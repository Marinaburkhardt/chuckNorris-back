const mailingChuck = require('../mailingChuck/mailChuck')
let timeoutID = 100 //equivalente a 5min = 300000
let partidaDB = require ('../../daos/daos-db/partida-db-dao')

/**
 * @param {*} primerJugador jugador que realiza la primer jugada dentro del turno
 * @param {*} segundoJugador jugador que realiza la segunda jugada dentro del turno
 * @param {*} idPartida identificador de la partida en juego
 */
function reivisarTimeoutPartida(ulitmoJugador, proximoJugador, idPartida, turnoAntesDeRevision) {

    partidaDB.obtenerDetalles(idPartida).then(result => {
        let turno = result[0][0].length;
        let ultimoTurnoActual = turno.NumeroTurno;
        
        setTimeout (function(){
            if (idJugadaProximoJugador == null && turnoAntesDeRevision != ultimoTurnoActual){
                mailingChuck.envioMailChuck(proximoJugador,'perdisteTimeout')
                mailingChuck.envioMailChuck(ulitmoJugador,'ganaste')
                //setear partida finalizada en controlador
            } else {
                clearTimeout(timeoutID)   
            }
        }, timeoutID)
    
    } )

    
}

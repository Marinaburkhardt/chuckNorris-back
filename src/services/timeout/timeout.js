const mailingChuck = require('../mailingChuck/mailChuck')
let timeoutID = 100 //equivalente a 5min = 300000
let partidaDB = require ('../../daos/daos-db/partida-db-dao')

/**
 * @param {*} primerJugador jugador que realiza la primer jugada dentro del turno
 * @param {*} segundoJugador jugador que realiza la segunda jugada dentro del turno
 * @param {*} idPartida identificador de la partida en juego
 */
function reivisarTimeoutPartida(ulitmoJugador, proximoJugador, idPartida, turnoAntesDeRevision) {
    
    partidaDB.obtenerDetalles(idPartida).then(res => {
        response = {};
        response = res;
        let parseado = JSON.parse(response);
        // console.log(parseado[1][0]['NumeroTurno']);
        let ultimoTurnoActual = parseado[1][0]['NumeroTurno']
        
        setTimeout (function(){
            if (turnoAntesDeRevision != ultimoTurnoActual){
                mailingChuck.envioMailChuck(proximoJugador,'perdisteTimeout')
                mailingChuck.envioMailChuck(ulitmoJugador,'ganaste')
                //setear partida finalizada en controlador
            } else {
                clearTimeout(timeoutID)   
            }
        }, timeoutID)
    })
}


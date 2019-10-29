// pensaba q antes de enviar el mail avisando q es el turno de otro jugador, guardar el numero de turno de la partida,
// enviar el mail, colocar un timeout, y preguntar si en ese timeout el numero de turno se incrementó en 1
// si se incrementó hacer un clear de la alerta, sino marcar la partida como perdida/finalizada

let timeoutID;
let turnoAntesDeMail;

function enviarMailTurno (){
    //guardar el # del turno antes de envair mail
    //enviar mail
}

function enviarMailPartidaPerdidaTimeout (){
    //guardar el # del turno antes de envair mail
    //enviar mail
}

function desactivarTimeout () {
    clearTimeout(timeoutID)
}

setTimeout (function mailPorPartidaPerdidaTimeout () {
    //verificar numero de turno de partida actual
    if (numeroTurnoActual == turnoAntesDeMail) {
        enviarMailPartidaPerdidaTimeout();
        //dar finalizada la partida
    } else {
        desactivarTimeout();
    }
},timeoutID)

import mailing from '../mailing/mailing'
let timeoutID;
let turnoAntesDeMail;

let comienzoPartidaOptions = {

    attachments: [
        { filename: 'iconoHome.png', path: './pics/iconoHome.png', cid: 'iconoHomo@chuckppt.com' },
        { filename: 'nuevaPartida.png', path: './pics/chuckNuevaPartida.png', cid: 'nuevaPartida@chuckppt.com' }
    ],

    from: 'chucknorris.ppt@gmail.com',
    to: '',
    subject: 'Es hora de tu muerte - Chuck ppt',
    // text: `Es tu turno.`
    html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='cid:iconoHomo@chuckppt.com>' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='cid:nuevaPartida@chuckppt.com' style='width: 80%'> </div> </div> </div></body></html>"
    // html: '<img src="cid:iconoHomo@chuckppt.com"/>',
    // html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\iconoHome.png' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\chuckNuevaPartida.png' style='width: 80%'> </div> </div> </div></body></html>"
};

let jugadaPendienteOptions = {

    attachments: [
        { filename: 'iconoHome.png', path: './pics/iconoHome.png', cid: 'iconoHomo@chuckppt.com' },
        { filename: 'nuevaPartida.png', path: './pics/chuckNuevaPartida.png', cid: 'nuevaPartida@chuckppt.com' }
    ],

    from: 'chucknorris.ppt@gmail.com',
    to: '',
    subject: 'Es hora de tu muerte - Chuck ppt',
    // text: `Es tu turno.`
    html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='cid:iconoHomo@chuckppt.com>' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='cid:nuevaPartida@chuckppt.com' style='width: 80%'> </div> </div> </div></body></html>"
    // html: '<img src="cid:iconoHomo@chuckppt.com"/>',
    // html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\iconoHome.png' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\chuckNuevaPartida.png' style='width: 80%'> </div> </div> </div></body></html>"
};

let ganasteOptions = {

    attachments: [
        { filename: 'iconoHome.png', path: './pics/iconoHome.png', cid: 'iconoHomo@chuckppt.com' },
        { filename: 'nuevaPartida.png', path: './pics/chuckNuevaPartida.png', cid: 'nuevaPartida@chuckppt.com' }
    ],

    from: 'chucknorris.ppt@gmail.com',
    to: '',
    subject: 'Es hora de tu muerte - Chuck ppt',
    // text: `Es tu turno.`
    html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='cid:iconoHomo@chuckppt.com>' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='cid:nuevaPartida@chuckppt.com' style='width: 80%'> </div> </div> </div></body></html>"
    // html: '<img src="cid:iconoHomo@chuckppt.com"/>',
    // html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\iconoHome.png' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\chuckNuevaPartida.png' style='width: 80%'> </div> </div> </div></body></html>"
};

let perdisteOptions = {

    attachments: [
        { filename: 'iconoHome.png', path: './pics/iconoHome.png', cid: 'iconoHomo@chuckppt.com' },
        { filename: 'nuevaPartida.png', path: './pics/chuckNuevaPartida.png', cid: 'nuevaPartida@chuckppt.com' }
    ],

    from: 'chucknorris.ppt@gmail.com',
    to: '',
    subject: 'Es hora de tu muerte - Chuck ppt',
    // text: `Es tu turno.`
    html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='cid:iconoHomo@chuckppt.com>' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='cid:nuevaPartida@chuckppt.com' style='width: 80%'> </div> </div> </div></body></html>"
    // html: '<img src="cid:iconoHomo@chuckppt.com"/>',
    // html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\iconoHome.png' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\chuckNuevaPartida.png' style='width: 80%'> </div> </div> </div></body></html>"
};

let timeoutOptions = {

    attachments: [
        { filename: 'iconoHome.png', path: './pics/iconoHome.png', cid: 'iconoHomo@chuckppt.com' },
        { filename: 'nuevaPartida.png', path: './pics/chuckNuevaPartida.png', cid: 'nuevaPartida@chuckppt.com' }
    ],

    from: 'chucknorris.ppt@gmail.com',
    to: '',
    subject: 'Es hora de tu muerte - Chuck ppt',
    // text: `Es tu turno.`
    html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='cid:iconoHomo@chuckppt.com>' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te había desafiado!! Pero no jugaste a tiempo y perdiste la partida </div> <div class='col-sm-6'> <br> <img src='cid:nuevaPartida@chuckppt.com' style='width: 80%'> </div> </div> </div></body></html>"
    // html: '<img src="cid:iconoHomo@chuckppt.com"/>',
    // html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\iconoHome.png' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\chuckNuevaPartida.png' style='width: 80%'> </div> </div> </div></body></html>"
};


/**
 * 
 * @param {*} jugador objeto jugador el cual contendrá como mínimo el nick y el mail
 * @param {*} accion acción por la cual se enviará un mail en particular
 */
function envioMailChuck(jugador, accion) {
    switch (accion) {
        case 'comienzo':
            this.comienzoPartidaOptions.to = jugador.mail
            this.comienzoPartidaOptions.html.replace("@Jugador", jugador.nick)
            mailing.enviarMail(comienzoPartidaOptions)
            break;

        case 'jugadaPendiente':
            this.jugadaPendienteOptions.to = jugador.mail
            this.jugadaPendienteOptions.html.replace("@Jugador", jugador.nick)
            mailing.enviarMail(jugadaPendienteOptions)

            setTimeout (function mailPorPartidaPerdidaTimeout () {
                //TO DO verificar numero de turno de partida actual con query a la DB
                let timeoutID = 300000 //equivalente a 5min
                let numeroTurnoActual;
                if (numeroTurnoActual == turnoAntesDeMail) {
                    mailing.enviarMail(timeoutOptions)
                    //TO DO dar finalizada la partida
                } else {
                    clearTimeout(timeoutID)
                }
            },timeoutID)
            break;

        case 'ganaste':
            this.ganasteOptions.to = jugador.mail
            this.ganasteOptions.html.replace("@Jugador", jugador.nick)
            mailing.enviarMail(ganasteOptions)
            break;

        case 'perdiste':
            this.perdisteOptions.to = jugador.mail
            this.perdisteOptions.html.replace("@Jugador", jugador.nick)
            mailing.enviarMail(perdisteOptions)
            break;

        default:
            break;
    }
    
}

module.exports = envioMailChuck
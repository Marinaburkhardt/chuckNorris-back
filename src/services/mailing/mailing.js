const nodemailer = require('nodemailer');
const hbs = require ('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chucknorris.ppt@gmail.com',
    pass: '*123Saraza*'
  }
});

var options = {
  viewEngine : {
      extname: '.hbs', // handlebars extension
      layoutsDir: './templates/', // location of handlebars templates
      defaultLayout: 'ganaste', // name of main template
      partialsDir: './templates/', // location of your subtemplates aka. header, footer etc
  },
  viewPath: './templates/',
  extName: '.hbs'
  };


transporter.use('compile',hbs(options));




let mailOptions = {

  attachments: [
    {filename: 'iconoHome.png', path: './pics/iconoHome.png', cid: 'iconoHomo@chuckppt.com'},
    {filename: 'nuevaPartida.png', path: './pics/chuckNuevaPartida.png', cid: 'nuevaPartida@chuckppt.com'}
  ],
  
  from: 'chucknorris.ppt@gmail.com',
  to: 'saint.eze@gmail.com',
  subject: 'Es hora de tu muerte - Chuck ppt',
  // text: `Es tu turno.`
  // html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='cid:iconoHomo@chuckppt.com>' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='cid:nuevaPartida@chuckppt.com' style='width: 80%'> </div> </div> </div></body></html>"
  // html: '<img src="cid:iconoHomo@chuckppt.com"/>',
  // html: "<html><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script><head> <div class='container'> <nav class='navbar navbar-expand-lg navbar-dark bg-dark'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarTogglerDemo01' style='color: white;'> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\iconoHome.png' class='align-middle' style='width: 100%; max-width: 65px; height: auto; color: white;'> Chuck Norris PPT </div> </nav> </div></head><body> <div class='container'> <div class='row'> <br> <div class='col-sm-4 offset-1'> <br> <br> @jugador te ha desafiado!! Tienes lo necesario para vencer? Demuestralo! </div> <div class='col-sm-6'> <br> <img src='C:\Users\Saint\Documents\Facultad\PNT2\Final\chuckNorris-back\ejemplo de logica del juego\src\services\mailing\pics\chuckNuevaPartida.png' style='width: 80%'> </div> </div> </div></body></html>"
  template: 'ganaste'
};



function enviarMail (mailOptions){
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


enviarMail(mailOptions)

module.exports = {enviarMail}
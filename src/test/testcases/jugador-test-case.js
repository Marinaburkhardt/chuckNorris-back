var cli = require('../client')

async function jugadoresOK() {
    console.log( await cli.consultarJugadores())
}

module.exports = {
    jugadoresOK
} 


const express = require('express')
const app = express()
const functions = require('./functions.js')
const puerto = 3000

app.use(express.json())

var jugadores = [
    {
        nroJugador: 1,
        rondasGanadas: 0,
        ultimaFiguraJugada: ""
    },
    {
        nroJugador: 2,
        rondasGanadas: 0,
        ultimaFiguraJugada: ""
    }
]

var turnos = []

var turno = {
    jugadores,
    resultado: "",
    nroTurno: 0
}

var partida = {
    isPartidaComenzada: false,
    jugadores,
    turnos,
    proximoTurno: 1,
    turnosJugador: 0,
    cantidadTurnos: 0,
    ganador: '?'
}

app.listen(puerto, () => {
    console.log(`servidor inicializando en puerto ${puerto}`)
})


/** Devuelve la lista de turnos jugados hasta el momento */
app.get('/api/jugadores', (req, res) => {
    console.log('request recibido')

    res.json({
        jugadores
    })
})

/** reinicia la partida y devuelve los resultados. ?????*/
// app.get('/api/reiniciar', (req, res) => {
//     console.log('GET request recibido')

//     jugadores.push(req.body)

//     res.json({
//         result: 'ok',
//         body: req.body
//     })
// })


app.get('/api/datos-partida', (req, res) => {
    console.log('GET request recibido')

    res.json({
        result: {
            partida
        }
    })
})

/** configura la cantidad de turnos que se van a jugar */
app.post('/api/configurar-partida', (req, res) => {
    console.log('POST request recibido')
    req.body.cantidadTurnos
    let result
    if (req.body.cantidadTurnos < 3 || req.body.cantidadTurnos > 9) {
        result = "La cantidad de turnos tiene que ser mayor a  3 y menor a 9"
    } else if (req.body.cantidadTurnos % 2 != 1) {
        result = "La cantidad de turnos tiene que ser impar"
    } else {
        partida.isPartidaComenzada = true
        result = {
            mensaje: "La partida esta lista para comenzar! :D",
            cantidadTurnos: req.body.cantidadTurnos,
            isPartidaComenzada: partida.isPartidaComenzada
        }
    }

    res.json({

        result: {
            mensaje: result,

        }
    })
})



/** jugada de un jugador, identificándolo por su nro (1 o 2). */
app.post('/api/jugar/:nroJugador', (req, res) => {
    console.log('POST request recibido')
    let concatThis = ''

    if (!partida.isPartidaComenzada) {
        result = "la partida aun no esta configurada"
    } else if (!functions.esFiguraValida(req.body.figura)) {
        result = "La figura ingresada no es valida"
    } else {

        if (req.params.nroJugador == "1" && partida.proximoTurno == "1") {
            partida.proximoTurno++
            result = `jugaste ${req.body.figura}`
            jugadores[0].ultimaFiguraJugada = req.body.figura
            req.body.figura
        } else if (req.params.nroJugador == "2" && partida.proximoTurno == "2") {
            partida.proximoTurno--
            jugadores[1].ultimaFiguraJugada = req.body.figura

            /* comparo las dos figuras con el metodo compare */
            resultado = functions.compare(jugadores[0].ultimaFiguraJugada, jugadores[1].ultimaFiguraJugada)
            if (resultado == 1) {
                turno.resultado = "Gana el jugador 1"
                jugador[0].rondasGanadas++
            } else if (resultado == -1) {
                turno.resultado = "Gana el jugador 2"
                jugadores[1].rondasGanadas++
            } else {
                turno.resultado = "Hay un empate"
            }
            turno.nroTurno++
            turnos.push(turno)
            result = {mensaje : `jugaste ${req.body.figura}`
                + '... ' + turno.resultado,
                turno
        }



        /* valido si la partida termino cuando el 2do jugador termina el turno*/
        if (partida.cantidadTurnos == turno.nroTurno) {
            if (jugadores[0].rondasGanadas > jugadores[1].rondasGanadas) {
                partida.ganador = jugadores[0]
            } else if (ugadores[0].rondasGanadas < jugadores[1].rondasGanadas) {
                partida.ganador = jugadores[1]
            } else {
                /* el caso de que empaten tienen que jugar los dos todas las rondas */
                partida.ganador = "Jodanse por empatar"
            }
        }
    } else {
        result = "No es tu turno!"
    }
}

    res.json({
    result
})
})

//esto lo dejo aca por si se nos ocurre algo 
function reinciarPartida() {
}


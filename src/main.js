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

/** reinicia la partida y devuelve los resultados... (Para probar si se reinician 
 * los datos o en el caso original la partida termina y los datos dejan de persistir)*/
app.get('/api/reiniciar', (req, res) => {
    console.log('GET request recibido')

    reinciarPartida()

    res.json({
        result: 'ok',
        body: partida
    })
})


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

    if (!partida.isPartidaComenzada) {
        if (req.body.cantidadTurnos < 3 || req.body.cantidadTurnos > 9) {
            result = "la cantidad de turnos tiene que ser mayor a 3 y menor a 9"
        } else if (req.body.cantidadTurnos % 2 != 1) {
            result = "la cantidad de turnos tiene que ser impar"
        } else {
            partida.cantidadTurnos = req.body.cantidadTurnos
            partida.isPartidaComenzada = true
            result = {
                mensaje: "la partida esta lista para comenzar",
                cantidadTurnos: req.body.cantidadTurnos,
                isPartidaComenzada: partida.isPartidaComenzada
            }
        }
    } else {
        result = "la partida ya ha sido configurada"
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
        result = "la partida aun no esta configurada o ya ha terminado"
    } else if (!functions.esFiguraValida(req.body.figura)) {
        result = "la figura ingresada no es valida"
    } else {

        if (req.params.nroJugador == "1" && partida.proximoTurno == "1") {
            partida.proximoTurno++
            result = {
                mensaje: `jugaste ${req.body.figura}`
            }
            jugadores[0].ultimaFiguraJugada = req.body.figura
            req.body.figura
        } else if (req.params.nroJugador == "2" && partida.proximoTurno == "2") {
            partida.proximoTurno--
            jugadores[1].ultimaFiguraJugada = req.body.figura

            /* comparo las dos figuras con el metodo compare */
            resultado = functions.compare(jugadores[0].ultimaFiguraJugada, jugadores[1].ultimaFiguraJugada)
            if (resultado == 1) {
                turno.resultado = "gana el jugador 1"
                jugador[0].rondasGanadas++
            } else if (resultado == -1) {
                turno.resultado = "gana el jugador 2"
                jugadores[1].rondasGanadas++
            } else {
                turno.resultado = "hay un empate"
            }
            turno.nroTurno++
            turnos.push(turno)
            result = {
                mensaje: `jugaste ${req.body.figura}`
                    + '... ' + turno.resultado,
            }

            /* valido si la partida termino cuando el 2do jugador termina el turno */
            if (partida.cantidadTurnos == turno.nroTurno) {

                if (jugadores[0].rondasGanadas > jugadores[1].rondasGanadas) {
                    partida.ganador = jugadores[0]
                } else if (jugadores[0].rondasGanadas < jugadores[1].rondasGanadas) {
                    partida.ganador = jugadores[1]
                } else {
                    /* en el caso de que empaten tienen que jugar los dos todas las rondas */
                    partida.ganador = "empate"
                }
                /* en el caso de que la partida haya terminado la reinciamos(no aplica en la version final) */
                result = {
                    mensaje: `jugaste ${req.body.figura}`
                        + '... ' + turno.resultado,
                    turnosJugados: partida.cantidadTurnos,
                    ganador: "gana el jugador nro" + partida.ganador.nroJugador + " con " + partida.ganador.rondasGanadas + " rondas ganadas",
                }
                reinciarPartida()
            }
        } else {
            result = "no es tu turno!"
        }
    }

    res.json({
        result
    })
})

//esto lo dejo aca por si se nos ocurre algo 
function reinciarPartida() {



    jugadores = [
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

    turnos = []

    turno = {
        jugadores,
        resultado: "",
        nroTurno: 0
    }

    partida = {
        isPartidaComenzada: false,
        jugadores,
        turnos,
        proximoTurno: 1,
        turnosJugador: 0,
        cantidadTurnos: 0,
        ganador: '?'
    }

}


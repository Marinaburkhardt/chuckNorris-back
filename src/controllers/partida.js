import * as DAO from '../daos/daos-factory'
import ResponseError from '../models/response-error-model'
let dotenv = require('dotenv')

const gameFunctions = require('../game-functions/functions')
let mailChuck = require('../services/mailingChuck/mailChuck')
let timeOut = require('../services/timeout/timeout')

dotenv.config()
const dao = DAO.getInstance(process.env.PERSISTENCE, 'partida')

const express = require('express')
const router = express.Router()

// let turnos = [
//     {
//       IdTurno: 44,
//       NumeroTurno: 1,
//       IdJugadaPorJugador: 70,
//       IdFigura1: 1,
//       Jugada1: 'Piedra',
//       IdJugadaPorJugador2: 71,
//       IdFigura2: 3,
//       Jugada2: 'Tijera',
//       JugadorPorJugar: null,
//       NickJugadorGanador: 'edditrana'
//     },
//     {
//       IdTurno: 45,
//       NumeroTurno: 2,
//       IdJugadaPorJugador: 72,
//       IdFigura1: 1,
//       Jugada1: 'Piedra',
//       IdJugadaPorJugador2: 73,
//       IdFigura2: 3,
//       Jugada2: 'Tijera',
//       JugadorPorJugar: null,
//       NickJugadorGanador: 'edditrana'
//     }
//   ]


// let isTerminada = gameFunctions.isPartidaTerminada(turnos, 'mkraitman', 'edditrana', 'edditrana' )
//         console.log(isTerminada)





/**
 * @swagger
 * /partida/partidas/{nick}:
 *   get:
 *     description: Recibe un jugador y busca todas las partidas en las que participa
 *     tags:
 *       - partida
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nick
 *         description: nick del jugador en relacion con las partidas
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: partidas de un jugador
 */
router.get('/partidas/:nick', async (req, res, next) => {
    dao.getAllPartidasByNick(req.params.nick).then(result => {
        console.log(result)
        res.send(result)
    })
})

/**
 * @swagger
 * /comenzar:
 *   post:
 *     description: recibe dos jugadores y crea una partida entre ellos
 *     tags:
 *       - partida
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: partida
 */
router.post('/comenzar', (req, res, next) => {

    console.log(req.body)
    dao.comenzarPartida(req.body.nickJugador1, req.body.nickJugador2).then(result => {
        if (result == undefined) {
            result = new ResponseError(400, "Jugador no existente")
            res.status(400)
        }
        res.send(result)
    })
})

/**
 * @swagger
 * /detalles/{idPartida}:
 *   post:
 *     description: recibe el id de una partida y devuelve detalles sobre ella
 *     tags:
 *       - partida
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: partida
 */
router.get('/detalles/:idPartida', (req, res, next) => {
    dao.obtenerDetalles(req.params.idPartida).then(detalles => {

        if (detalles == undefined || detalles == '{"codigo":400, "mensaje":"El id de partida no existe"}') {
            res.status(400)
            result = new ResponseError(400, "El id de partida no existe")
        }

        detalles = JSON.parse(detalles)
        console.log(detalles)
        res.send(detalles)
    })
})


/**
 * @swagger
 * /jugar/{nick}:
 *   post:
 *     description: recibe un jugador
  *     tags:
 *       - partida
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nick
 *         description: nick del jugador a jugar
 *         in: path
 *         required: true
 *         type: string
 *       - name: figura
 *         description: figura que define el resultado de la ronda
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: jugado
 */

router.post('/jugar/:nick', (req, res, next) => {

    let paramJson //variable que se va aenviar como parametro al sp
    let detallesPartida = req.body[0]
    let turnos = req.body[1]["Turnos"]
    let envioFront = req.body[2]

    console.log("ESTA JUGANDO EL JUGADOR ....... " + req.params.nick)

    console.log("DETALLES ......" + JSON.stringify(detallesPartida))

    console.log("TURNOS ......" + JSON.stringify(turnos))

    console.log("ENVIO FRONT ......" + JSON.stringify(envioFront))

    //recibo los detalles de ultimo turno para poder enviar los datos necesarios

    console.log(detallesPartida)
    let tamaño = turnos.length

    let ultimoTurno = req.body[1]["Turnos"][tamaño - 1]
    console.log(ultimoTurno)


    if (req.params.nick == detallesPartida.NickJugador) {
        //caso jugador 1
        console.log("----JUGADA JUGADOR 1----")
        // datos seteados = figura jugada de jugador 1
        paramJson = {
            IdPartida: detallesPartida.IdPartida,
            IdTurno: ultimoTurno.IdTurno,
            NumeroTurno: ultimoTurno.NumeroTurno,
            NickJugadorJugada: req.params.nick,
            IdFigura: envioFront.IdFigura,
            NickJugadorGanadorPartida: null,
            NickJugadorGanador: null
        }

    } else if (req.params.nick == detallesPartida.NickJugador2) {

        //caso de jugador 2
        console.log("----JUGADA JUGADOR 2----")
        //--------- set ganador Turno ---------
        let ganadorTurno;

        let resultadoTurno = gameFunctions.comparar(ultimoTurno.IdFigura1, envioFront.IdFigura)

        console.log("SE COMPARA " + ultimoTurno.IdFigura1, envioFront.IdFigura)
        if (resultadoTurno == 1) {
            ganadorTurno = detallesPartida.NickJugador
        } else if (resultadoTurno == -1) {
            ganadorTurno = detallesPartida.NickJugador2
        } else if (resultadoTurno == 0) {
            ganadorTurno = null
        }

        //--------- terminar partida ---------

        //-------------------------------------
        paramJson = {
            IdPartida: detallesPartida.IdPartida,
            IdTurno: ultimoTurno.IdTurno,
            NumeroTurno: ultimoTurno.NumeroTurno,
            NickJugadorJugada: req.params.nick,
            IdFigura: envioFront.IdFigura,
            NickJugadorGanadorPartida: gameFunctions.isPartidaTerminada(turnos, detallesPartida.NickJugador, detallesPartida.NickJugador2, ganadorTurno),
            NickJugadorGanador: ganadorTurno
        }

    }

    console.log("\n \n \n Se le esta enviando a la base la siguiente informacion \n " + JSON.stringify(paramJson))

    dao.jugar(paramJson).then(result => {
        res.send(result)
    })
})

module.exports = router
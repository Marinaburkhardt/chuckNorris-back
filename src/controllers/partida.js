import * as DAO from '../daos/daos-factory'
import ResponseError from '../models/response-error-model'
let dotenv = require('dotenv')

let mailChuck = require('../services/mailingChuck/mailChuck')
let timeOut = require('../services/timeout/timeout')

dotenv.config()
const dao = DAO.getInstance(process.env.PERSISTENCE, 'partida')

const express = require('express')
const router = express.Router()

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
    dao.obtenerDetalles(req.params.idPartida).then(result => {
        if (result == undefined || result == '{"codigo":400, "mensaje":"El id de partida no existe"}') {
            res.status(400)
            result = new ResponseError(400, "El id de partida no existe")
        }
        console.log(result)
        res.send(result)
    })
})


/**
 * @swagger
 * /jugar/{nick}:
 *   put:
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
router.put('/jugar', (req, res, next) => {
    console.log(req.body)
    dao.jugar(req.body).then(resultJugada => {

        dao.obtenerDetalles(req.body.IdPartida).then(detalle => {
            
            detalle[1][0]["nickJugadorJugada"]

            //validar ganador si es el segundo jugador el que juega

            //nick jugador ganador partida = 0 gana jugador 1, 1 gana jugador 2, null sigue la partida
            //turno mkraitman o edditrana

            let jugador = {
                nick: 'mkraitman',
                mail: 'mkraitman@gmail.com'
            }
            res.send(resultJugada)
          
            // timeOut.reivisarTimeoutPartida(jugador, jugador, 1, 1)
        })
    })
})

module.exports = router
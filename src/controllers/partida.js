import * as DAO from '../daos/daos-factory'
import ResponseError from '../models/response-error-model'
let dotenv = require('dotenv')
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
 *         schema:
 *           $ref: '#/definitions/Partida'
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
 *         schema:
 *           $ref: '#/definitions/Jugador'
 */
router.post('/comenzar', (req, res, next) => {
    let request = req.body
    dao.comenzarPartida(request.nickJugador1, request.nickJugador2).then(result => {
        console.log(result)
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
 *         schema:
 *           $ref: '#/definitions/Jugador'
 */
router.get('/detalles/:idPartida', (req, res, next) => {
    dao.obtenerDetalles(req.params.idPartida).then(result => {
        if(result == undefined || result == '{"codigo":400, "mensaje":"El id de partida no existe"}'){
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
 *         schema:
 *           $ref: '#/definitions/Figura'
 *     responses:
 *       200:
 *         description: jugado
 *         schema:
 *           $ref: '#/definitions/Partida'
 */
router.post('/jugar', (req, res, next) => {
    console.log(req.body)
    let result = dao.jugar(req.body).then(result => {
        console.log(result)
    })


  
    console.log(result)
})

module.exports = router
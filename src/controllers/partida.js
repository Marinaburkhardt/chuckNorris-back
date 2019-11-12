import * as DAO from '../daos/daos-factory'
import * as Swagger from './swagger'

const dao = DAO.getInstancePartida('db')

const express = require('express')
const router = express.Router()
/**
 * @swagger
 * /partida/partidas:
 *   get:
 *     description: Retrieve an specific stock
 *     tags:
 *       - partida
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: partida
 *         schema:
 *           $ref: '#/definitions/Partidas'
 */
router.get('/partidas/:nick', async (req, res, next) => {
    dao.getAllPartidasByNick(req.params.nick).then(result => {
        res.send(result)
    })
})

/**
 * @swagger
 * /partida/turnos/{id}:
 *   get:
 *     description: Devuelve todos los turnos de una partida
 *     tags:
 *       - partida
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id de la partida
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: turno
 *         schema:
 *           $ref: '#/definitions/Turnos'
 */
router.get('/turnos/:id', async (req, res) => {
    const response = dao.
        Swagger.validateModel('Partida', response)
    res.send(response)
})





/**
 * @swagger
 * /partida:
 *   post:
 *     description: Crea una nueva partida
 *     tags:
 *       - partida
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: partida
 *         description: partida object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Partida'
 *     responses:
 *       200:
 *         description: new partida
 *         schema:
 *           $ref: '#/definitions/Partida'
 */
router.post('/comenzar', (req, res, next) => {
    // Swagger.validateModel('Partida', req.body)

    let request = req.body
    dao.comenzarPartida(request.nickJugador1, request.nickJugador2).then(result => {
        console.log(result)
        res.send(result)
    })
})


module.exports = router
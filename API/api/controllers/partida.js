import * as DAO from '../daos/daos-factory'
import * as Swagger from './swagger'

const dao = DAO.getInstanceJugador('memory')

const express = require('express')
const router = express.Router()
/**
 * @swagger
 * /partidas:
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
router.get('/partidas', async (req, res) => {
    const response = dao.
    Swagger.validateModel('Partida', response)
    res.send(response)
})

/**
 * @swagger
 * /turnos/{id}:
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


module.exports = router
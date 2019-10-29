import * as DAO from '../daos/daos-factory'
import * as Swagger from './swagger'

const dao = DAO.getInstancePartida('memory')

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
router.get('/partidas', async (req, res) => {
    const response = dao.getAllPartidas()
    Swagger.validateModel('Partida', response)
    res.send(response)
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
router.post('/', (req, res, next) => {
    Swagger.validateModel('Partida', req.body)
    const response = dao.create(req.body)
    res.send(response)
  })


module.exports = router
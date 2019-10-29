import * as DAO from '../daos/daos-factory'
import * as Swagger from './swagger'
import JugadorMemoryDAO from '../daos/jugador-memory-dao'

const dao = DAO.getInstanceJugador('memory')

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /jugador/jugadores:
 *   get:
 *     description: lista de jugadores menos el pasado por parametro
 *     tags:
 *       - jugador
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Jugadores
 *         schema:
 *           $ref: '#/definitions/Jugadores'
 */
router.get('/jugadores', (req, res, next) => {
    const response = dao.getAllJugadores()
    Swagger.validateModel('Jugadores', response)
    res.send(response)
})


/**
 * @swagger
 * /jugador/{id}:
 *   get:
 *     description: Devuelve un jugador especifico
 *     tags:
 *       - jugador
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: identificador unico de jugador
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: jugador
 *         schema:
 *           $ref: '#/definitions/Jugador'
 */
router.get('/:id', (req, res, next) => {
    const response = dao.retrieve(parseInt(req.params.id, 10))
    Swagger.validateModel('Stock', response)
    res.send(response)
  })

/**
 * @swagger
 * /jugador:
 *   post:
 *     description: Crea un nuevo jugador
 *     tags:
 *       - jugador
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: jugador
 *         description: jugador object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Jugador'
 *     responses:
 *       200:
 *         description: new jugador
 *         schema:
 *           $ref: '#/definitions/Jugador'
 */
router.post('/', (req, res, next) => {
    Swagger.validateModel('Jugador', req.body)
    const response = dao.create(req.body)
    res.send(response)
  })

module.exports = router
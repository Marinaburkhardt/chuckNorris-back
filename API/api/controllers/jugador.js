import * as DAO from '../daos/daos-factory'
import * as Swagger from './swagger'
import JugadorMemoryDAO from '../daos/jugador-memory-dao'

const dao = DAO.getInstanceJugador('memory')

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /jugadores:
 *   get:
 *     description: lista de jugadores menos el pasado por parametro
 *     tags:
 *       - jugadores
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

router.get

module.exports = router
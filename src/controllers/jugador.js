import * as DAO from '../daos/daos-factory'
import * as Swagger from './swagger'
import ResponseError from '../models/response-error-model'
const dao = DAO.getInstanceJugador('db')


const express = require('express')
const router = express.Router()


router.post('/create', (req, res, next) => {
  console.log(req.body)
  dao.create(req.body)
  res.json(req.body)
})

/**
 * @swagger
 * /login:
 *   get:
 *     description: valida la existencia y el ingreso de datos de un jugador
 *     tags:
 *       - jugador
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Jugador
 *         schema:
 *           $ref: '#/definitions/Jugadores'
 *       400:
 *         description: 
 */
router.post('/login', (req, res, next) => {
  dao.login(req.body.nick, req.body.password).then(result => {
    if(result == undefined){
      res.status(400)
      res.json(new ResponseError(400, "El usuario ingresado no existe"))
    }else{
      res.json(result)
    }
  })
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
router.get('/jugadores/:nick', async (req, res, next) => {
  dao.getAllJugadoresByNick(req.params.nick).then(result => {
    res.send(result)
  })
})




router.get('/saraza/saraza', async (req, res, next) => {
  dao.getAllJugadores().then(result => {
    res.send(result)
  })
})

router.get('/top5', async (req, res, next) => {
  dao.getTop5().then(result => {
    res.send(result)
  })
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
router.post('/create', (req, res, next) => {
  console.log(req.body)
  res.send(req.body)
})

module.exports = router
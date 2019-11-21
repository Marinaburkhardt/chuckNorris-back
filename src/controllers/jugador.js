import * as DAO from '../daos/daos-factory'
import ResponseError from '../models/response-error-model'
const express = require('express')
const router = express.Router()

let dotenv = require('dotenv')
dotenv.config()
const dao = DAO.getInstance(process.env.PERSISTENCE, 'jugador')

/**
 * @swagger
 * /login:
 *   post:
 *     description: valida el ingreso de datos de un jugador
 *     tags:
 *       - jugador
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nick
 *         description: Nick del jugador
 *         in: body
 *         required: true
 *       - name: password
 *         description: Contraseña del jugador
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: logged ok
 */
router.post('/login', (req, res, next) => {
  dao.login(req.body.nick, req.body.password).then(result => {
    console.log(req.body.nick + req.body.password)
    console.log(result)
    if (result == undefined) {
      res.status(400)
      res.json(new ResponseError(400, "El usuario ingresado no existe"))
    } else {
      let resultado = {
        NickJugador: result.NickJugador,
        Mail: result.Mail
      }
      res.json(resultado)
    }
  })
})

/**
 * @swagger
 * /jugador/jugadores/{id}:
 *   get:
 *     description: Recibe un nick y devuelve toda la lista de jugadores posibles a jugar
 *     tags:
 *       - jugador
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nick
 *         description: nick del jugador
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: jugadores encontrados
 */
router.get('/jugadores/:nick', async (req, res, next) => {


  dao.getAllJugadoresByNick(req.params.nick).then(result => {
    if (result == "no encontrado") {
      res.status(400)
      result = new ResponseError(400, "El jugador no se encuentra en la lista")
    }
    res.send(result)
  })
})


/**
 * @swagger
 * /jugador/top5:
 *   get:
 *     description: Devuelve el top5 de jugadores
 *     tags:
 *       - jugador
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: top 5 de jugadores
 */
router.get('/top5', async (req, res, next) => {
  dao.getTop5().then(result => {
    console.log(result)
    res.send(JSON.parse(result))
  })
})


module.exports = router
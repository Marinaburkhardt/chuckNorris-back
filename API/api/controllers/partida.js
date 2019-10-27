const express = require('express')
import * as Swagger from './swagger'
const router = express.Router()
/**
 * @swagger
 * /stocks:
 *   get:
 *     description: Testea devolviendo OK
 *     tags:
 *       - ok
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: stocks
 *         schema:
 *           $ref: '#/definitions/Stocks'
 */
router.get('/sayok', async (req, res) => {
    res.json("ok")
})

router.get('/jugadores', async (req, res) => {

})

module.exports = router
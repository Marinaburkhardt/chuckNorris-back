/**
 * @swagger
 * definitions:
 *   Stock:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - currentPrice
 *       - lastUpdate
 *     properties:
 *       id:
 *         type: number
 *       name:
 *         type: string
 *       currentPrice:
 *         type: number
 *       lastUpdate:
 *         type: number
 *   Stocks:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Stock'
 */
export default class ResponseError {
    constructor(codigo, descripcion) {
      this.codigo = codigo
      this.descripcion = descripcion
    }
  }
  
  
/**
 * @swagger
 * definitions:
 *   ResponseError:
 *     type: object
 *     required:
 *       - codigo
 *       - descripcion
 *     properties:
 *       codigo:
 *         type: number
 *       descripcion:
 *         type: string
 */
export default class ResponseError {
    constructor(codigo, descripcion) {
      this.codigo = codigo
      this.descripcion = descripcion
    }
  }
  
  
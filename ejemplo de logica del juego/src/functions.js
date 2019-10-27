
/**
  * ARMA = PIEDRA
  * SONRISA = PAPEL
  * SOMBRERO = TIJERA
 */

const tipoFigura = {
    SOMBRERO: "sombrero", /** PAPEL */
    SONRISA: "sonrisa", /** TIJERA */
    ARMA: "arma" /** PIEDRA */
}

 /**
  * La pregunta es: ¿figura1 le gana a figura2?
  * @param {tipoFigura} figura1 
  * @param {tipoFigura} figura2 
  * La respuesta es:
  * 1 = "SI"
  * 0 = "NO, ES EMPATE"
  * -1 = "NO"
  */
function compare(figura1, figura2) {
    result = -1
    if (figura1 == figura2) {
        result = 0
    } else if (figura1 == tipoFigura.ARMA && figura2 == tipoFigura.SONRISA) {
        result = 1
    } else if (figura1 == tipoFigura.SONRISA && figura2 == tipoFigura.SOMBRERO) {
        result = 1
    } else if (figura1 == tipoFigura.SOMBRERO && figura2 == tipoFigura.ARMA) {
        result = 1
    }
    return result
}


/**
 * 
 * @param {tipoFigura} figura 
 * si es una figura valida
 * es devuelve true caso contrario devuelve false
 */
function esFiguraValida(figura) {
    result = false
    if (figura == tipoFigura.SOMBRERO || figura == tipoFigura.ARMA || figura == tipoFigura.SONRISA) {
        result = true
    }
    return result
}

module.exports = {
    compare,
    tipoFigura,
    esFiguraValida
}


/*
 * ARMA = PIEDRA
 * SONRISA = PAPEL
 * SOMBRERO = TIJERA
 */

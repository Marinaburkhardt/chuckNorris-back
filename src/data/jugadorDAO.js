/**
 * 
 * @param {puede ser el mail o el nick} text 
 * @param {password del jugador ingresado en "text"} password 
 */
function loginJugador(text, password) {
    index = 0; result = null
    result = "ERROR - NO SE ENCONTRO EL JUGADOR"
    codigo = "00101"
    encontro = false
    while (index < jugadores.length && !encontro) {
        if (jugadores[index].mail == text || jugadores[index].nick == text) {
            encontro = true
            if (jugadores[index].password == password) {
                result = "OK"
                codigo = "00100"
            } else {
                result = "ERROR - CONTRASEÑA ERRONEA"
                codigo = "00102"
            }
        } else {
            index++
        }
    }
    return {
        result,
        codigo
    }
}
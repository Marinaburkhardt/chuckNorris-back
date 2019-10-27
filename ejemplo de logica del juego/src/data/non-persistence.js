var jugadores = [
    {
        nroJugador: 1,
        rondasGanadas: 0,
        ultimaFiguraJugada: ""
    },
    {
        nroJugador: 2,
        rondasGanadas: 0,
        ultimaFiguraJugada: ""
    }
]

var turnos = []

var turno = {
    jugadores,
    resultado: "",
    nroTurno: 0
}

var partida = {
    isPartidaComenzada: false,
    jugadores,
    turnos,
    proximoTurno: 1,
    turnosJugador: 0,
    cantidadTurnos: 0,
    ganador: '?'
}
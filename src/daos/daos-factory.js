import JugadorMemoryDAO from './daos-memory/jugador-memory-dao'
import JugadorDBDAO from './daos-db/jugador-db-dao'

import PartidaMemoryDAO from './daos-memory/partida-memory-dao'
import PartidaDBDAO from './daos-db/partida-db-dao'

let memoryDAOJugador = null
let memoryDAOPartida = null

function isInstantiated(obj) {
  let result = false
  obj = null ? result = false : result = true
  return result
}

function getInstance(type, dao) {
  let instance
  if (type == 'memory') {
    switch (dao) {
      case 'jugador':
        isInstantiated(JugadorMemoryDAO) ? instance = JugadorMemoryDAO : instance = memoryDAOJugador
        break

      case 'partida':
        isInstantiated(PartidaMemoryDAO) ? instance = PartidaMemoryDAO : instance = memoryDAOPartida
        break
    }

  } else if (type == 'db') {

    switch (dao) {
      case 'jugador':
        instance = JugadorDBDAO
        break

      case 'partida':
        instance = PartidaDBDAO
        break
    }

  }
  return instance
}

module.exports = {
  getInstance
}

import StocksMemoryDAO from './daos-memory/stocks-memory-dao'

import JugadorMemoryDAO from './daos-memory/jugador-memory-dao'
import JugadorDBDAO from './daos-db/jugador-db-dao'

import PartidaMemoryDAO from './daos-memory/partida-memory-dao'
import PartidaDBDAO from './daos-db/partida-db-dao'


let memoryDAOStock = null
let memoryDAOJugador = null
let memoryDAOPartida = null

function isInstantiated(obj) {
  result = false

  obj = null ? result = false : result = true

  return result
}

function getInstance(type, dao) {
  let instance

  if (type == 'memory') {
    //ask memory-dao
    switch (dao) {
      case 'jugador':
        isInstantiated(JugadorMemoryDAO) ? instance = memoryDAOJugador : instance = new JugadorMemoryDAO
        break

      case 'partida':
        isInstantiated(PartidaMemoryDAO) ? instance = memoryDAOPartida : instance = new PartidaMemoryDAO
        break
    }
    if (memoryDAOStock === null) {
      memoryDAOStock = new StocksMemoryDAO()
    }

    //pregunta por la base de datos
  } else if (type == 'db') {

    switch (dao) {
      case 'jugador':
        instance = JugadorDBDAO
    }
  }
}



function getInstanceStocks(type) {
  if (type === 'memory') {
    if (memoryDAOStock === null) {
      memoryDAOStock = new StocksMemoryDAO()
    }
    return memoryDAOStock
  }
  throw new Error('Unknown DAO type ' + type)
}

function getInstanceJugador(type) {

  if (type === 'memory') {
    if (memoryDAOJugador === null) {
      memoryDAOJugador = JugadorMemoryDAO
      return memoryDAOJugador
    }
  } else if (type === 'db') {
    return JugadorDBDAO
  } else {
    throw new Error('Unknown DAO type ' + type)
  }
}

function getInstancePartida(type) {
  if (type === 'memory') {
    if (memoryDAOPartida === null) {
      memoryDAOPartida = PartidaMemoryDAO
      return memoryDAOPartida
    }
  } else if (type == 'db') {
    return PartidaDBDAO
  } else {
    // throw new Error('Unknown DAO type ' + type)
  }
}

module.exports = {
  getInstanceJugador,
  getInstanceStocks,
  getInstancePartida
}

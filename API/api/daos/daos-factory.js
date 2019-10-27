import StocksMemoryDAO from './stocks-memory-dao'
import JugadorMemoryDAO from './jugador-memory-dao'

let memoryDAOStock = null
let memoryDAOJugador = null



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
      memoryDAOJugador = new JugadorMemoryDAO()
    }
    return memoryDAOJugador
  }
  throw new Error('Unknown DAO type ' + type)
}

module.exports = {
  getInstanceJugador,
  getInstanceStocks
}

let dbConfig = require('./db-config').config
var sql = require("mssql");

function query(query, callback) {
    sql.connect(dbConfig, function (err) {
        if (err) console.log(err)
        let request = new sql.Request()
        request.query(query, callback)
    })
}
//db.query('SELECT * FROM jugador', function (err, result)

function querySearch(query, key, value, callback){
    sql.connect(dbConfig, function (err){
        if (err) console.log(err)
        let request = new sql.Request()
        request.query(`${query} WHERE ${key} = ${value} `, callback)
    })
}
//db.query('SELECT * FROM jugador', 'nick', 'mkraitman', function (err, result)

function execTop(nameProcedure, cantidad, callback) {
    sql.connect(dbConfig, function (err) {
        if(err) console.log(err)
        let request = new sql.Request()
        request.input('cantidad', sql.Int, cantidad);
        request.execute(nameProcedure, callback)
     })
}

//  db.exec('dbo.obtenerTopJugadores', 5, function (err, result) {
//     console.log("desde la pegada" + result)
//     res.send(result)
//   })


module.exports = {
    query,
    execTop,
    querySearch

}
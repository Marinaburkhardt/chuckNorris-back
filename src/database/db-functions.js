let dbConfig = require('./db-config').config
var sql = require("mssql")


/**
 * Conecta con la base de datos usando la configuracion de db-config
 */
function connectDB() {
    const pool = new sql.ConnectionPool(dbConfig)

    return pool.connect()
        .then(pool => {
            console.log('Connected to database')
            return pool
        })
        .catch(err => console.log('Database connection failed!', err))
}

/**
 * Ejecuta un store procedure con un parametro entero
 * @param {*nombre del store procedure} procedure 
 * @param {*nombre del paramtero} param 
 * @param {*valor del parametro} int 
 */
function execInt(procedure, param, int) {
    const connection = connectDB()
    return connection
        .then(pool => {
            return pool.request()
                .input(param, sql.Int, parseInt(int))
                .execute(procedure)
        })
        .then(result => {
            return result.recordset[nnnn0][""]
        })
        .catch(err => {
            console.log('Query failed!', err)
        })
}

/**
 * Ejecuta un store procedure con 2 parametros varchar
 * @param {*nombre del store procedure} procedure 
 * @param {*nombre del parametro} param 
 * @param {*valor del parametro} varchar 
 */
function execVarchar2(procedure, param, varchar) {
    const connection = connectDB()
    return connection
        .then(pool => {
            return pool.request()
                .input(param, sql.VarChar(100), varchar)
                .execute(procedure)
        })
        .then(result => {
            return result.recordset[0][""]
        })
        .catch(err => {
            console.log('Query failed!', err)
        })
}

/**
 * Ejecuta un store procedure con dos parametros varchar
 * @param {*nombre del store procedure} procedure 
 * @param {*nombre del 1er parametro} param 
 * @param {*valor del 1er parametro} varchar 
 * @param {*nombre del 2do paramtro} param2 
 * @param {*valor del 2do parametro} varchar2 
 */
function execVarchar(procedure, param, varchar, param2, varchar2) {
    const connection = connectDB()
    return connection
        .then(pool => {
            return pool.request()
                .input(param, sql.VarChar(100), varchar)
                .input(param2, sql.VarChar(100), varchar2)
                .execute(procedure)
        })
        .then(result => {
            return result.recordset[0][""]
        })
        .catch(err => {
            console.log('Query failed!', err)
        })
}

/**
 * Envia una consulta a la base de datos. Puede ser generada previamente para agregar 
 * condiciones u otras instrucciones
 * @param {query que se envia a la base} query 
 */
function query(query) {
    const connection = connectDB()
    return connection
    .then(pool => {
        return pool.request()
        .query(query)
    })
    .then(result => {
        console.log(result.recordsets[0])
        return result.recordsets[0][0]
    })
    .catch(err => {
        console.log('Query failed!', err)
    })
}


module.exports = {
    query,
    execInt,
    execVarchar,
    execVarchar2
}
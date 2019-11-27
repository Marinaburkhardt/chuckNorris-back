const chai = require('chai');
const expect = chai.expect
const chaiHttp = require('chai-http');
chai.use(chaiHttp)
let URL = 'http://localhost:3000'

describe('--- PARTIDA CONTROLLER TESTCASES ---', function () {
    it('GET ALL PARTIDAS BY NICK', function (done) {
        chai.request(URL)
            .get('/api/partida/partidas/mkraitman')
            .end(function (err, res) {
                expect(res).to.have.status(200)
                done()
            })
    })

    it('OBTENER DETALLES DE PARTIDA', function (done) {
        chai.request(URL)
            .get('/api/partida/detalles/1')
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body[0]).to.have.property('IdPartida').to.be.equal(1)
                expect(res.body[0]).to.have.property('Descripcion').to.be.equal('descripcion')
                expect(res.body[0]).to.have.property('NickJugador').to.be.equal('mkraitman')
                expect(res.body[0]).to.have.property('NickJugador2').to.be.equal('edditrana')
                expect(res.body[0]).to.have.property('FechaCreacion').to.be.equal("2019-11-12")
                expect(res.body[0]).to.have.property('Turnos').to.be.equal("")
                done()
            })
    })

    it('OBTENER DETALLES DE PARTIDA ERROR', function (done) {
        chai.request(URL)
            .get('/api/partida/detalles/ID_ERRONEO')
            .end(function (err, res) {
                expect(res).to.have.status(400)
                expect(res.body).to.have.property('codigo').to.be.equal(400)
                expect(res.body).to.have.property('descripcion').to.be.equal("El id de partida no existe")
                done()
            })
    })
})
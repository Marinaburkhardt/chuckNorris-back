const chai = require('chai');
const expect = chai.expect
const chaiHttp = require('chai-http');
chai.use(chaiHttp)
let URL = 'http://localhost:3000'


describe('--- JUGADOR CONTROLLER TESTCASES ---', function () {
    it('LOGIN OK', function (done) {
        chai.request(URL)
            .post('/api/jugador/login')
            .send({
                nick: "mkraitman",
                password: "admin"
            })
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('NickJugador').to.be.equal("mkrman")
                expect(res.body).to.have.property('Mail').to.be.equal("mkraitman@gmail.com")
                done()
            })
    })

    it('LOGIN ERROR', function (done) {
        chai.request(URL)
            .post('/api/jugador/login')
            .send({
                nick: "badNick",
                password: "badPassword"
            })
            .end(function (err, res) {
                expect(res).to.have.status(400)
                expect(res.body).to.have.property('codigo').to.be.equal(400)
                expect(res.body).to.have.property('descripcion').to.be.equal("El usuario ingresado no existe")
                done()
            })
    })

    it('TOP 5', function (done) {
        chai.request(URL)
            .get('/api/jugador/top5')
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body).to.have.lengthOf(5)
                done()
            })
    })


    it('GET ALL JUGADORES BY NICK', function (done) {
        let jugador = "mkraitman"
        chai.request(URL)

            .get(`/api/jugador/jugadores/mkraitman`)
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body).to.have.lengthOf(6)
                expect(res.body[0]['NickJugador']).to.be.not.equal('mkraitman')
                done()
            })
    })

    it('GET ALL JUGADORES BY NICK ERROR', function (done) {
        chai.request(URL)
            .get('/api/jugador/jugadores/jugadorNoValido')
            .end(function (err, res) {
                expect(res).to.have.status(400)
                expect(res.body).to.have.property('codigo').to.be.equal(400)
                expect(res.body).to.have.property('descripcion').to.be.equal("El jugador no se encuentra en la lista")
                done()
            })
    })
})

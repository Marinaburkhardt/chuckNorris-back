const chai = require('chai');
const expect = chai.expect
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

describe('--- PARTIDA CONTROLLER TESTCASES ---', function () {
    it('LOGIN OK', function (done) {
        chai.request('http://localhost:3000')
            .post('/api/partida/')
            .send({
                nick: "mkraitman",
                password: "admin"
            })
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('NickJugador').to.be.equal("mkraitman")
                expect(res.body).to.have.property('Mail').to.be.equal("mkraitman@gmail.com")
                done()
            })
    })
})
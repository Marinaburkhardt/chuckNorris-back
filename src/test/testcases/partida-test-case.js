const chai = require('chai');
const expect = chai.expect
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

describe('--- PARTIDA CONTROLLER TESTCASES ---', function () {
    it('GET ALL PARTIDAS BY NICK', function (done) {
        chai.request('http://localhost:3000')
            .get('/api/partida/partidas/mkraitman') 
            .end(function (err, res) {
                expect(res).to.have.status(200)

                done()
            })
    })
})
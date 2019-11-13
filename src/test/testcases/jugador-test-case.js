const assert = require("chai").assert;
const client = require('../client')

describe("LOGIN TESTS: ", function () {
    describe("CASOS: ", function () {

        client.consultarJugadores("mkraitman", "admin")
        .then(result => {
            console.log(result)
            it("LOGIN OK", function () {
                assert.equal({
                    NickJugador: "mkraitman",
                    Mail: "mkraitman@gmail.com", result
                })
            })
        })
    })
})

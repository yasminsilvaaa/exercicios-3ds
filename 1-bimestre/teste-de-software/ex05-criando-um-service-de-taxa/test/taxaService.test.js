const { describe } = require("yargs")
const calcularTaxa = require("../Service/taxaService")


describe("testar taxaService", () => {
    test("aplicar 5% acima de 500", () => {
        expect(calcularTaxa(600)).toBe(630)
    })
})

 test(" não aplicar taxa ate 500", () => {
        expect(calcularTaxa(300)).toBe(300) })
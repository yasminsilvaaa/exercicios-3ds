function calcularTaxa(valor){
    if (valor>500){
        return valor * 5
    }

    return valor
}


module.exports = calcularTaxa
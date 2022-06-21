let carrinhoDeCompras = [
    "Funko Pop Kakashi",
    "Dragon Ball Collection",
    "Vou ser Dev"
]

function testaPosicao(lista, posicao) {
    for (posicao--; posicao > -1; posicao--) {
        if (lista[posicao] == "Vou ser Dev"){
            console.log(`Você foi premiado`)
            return
        }
    }
    console.log(`Você não foi premiado`)
}

testaPosicao(carrinhoDeCompras, carrinhoDeCompras.length)

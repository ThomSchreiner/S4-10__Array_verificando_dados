let assentos = [
    "Desconfortável",
    "Normal",
    "Confortável"
]

function gerarNumRandom (min, max){
    return Math.floor(Math.random() * (max - min))
}

function assentoPremiado (assento, numeroDeAssentos){
    let numGerado = gerarNumRandom(1, numeroDeAssentos+1)
    console.log(`O assento premiado foi o Assento ${assento[numGerado]}`)
}

let premiado = assentoPremiado(assentos, assentos.length)
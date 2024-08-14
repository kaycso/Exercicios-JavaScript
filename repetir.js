function repetir(valor, repeticoes) {
    let valores = []
    for (let i = 1; i <= repeticoes; i++){
        valores.push(valor)
    }
    
    return valores
}

console.log(repetir(5, 2))
console.log(repetir(50, 10))
console.log(repetir('string', 10))
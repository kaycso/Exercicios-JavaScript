function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
        
    })
}

/* funcionarOuNao('testando...', .5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('fim!'))
 */
funcionarOuNao('Testando...', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        v => console.log(v),
        err => console.log('erro', err)
    )
    .catch(err => `Erro: ${err}`)
    .then(() => console.log('fim!'))
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(2, 'teste')
    .then(frase => frase)
    .then(outraFrase => console.log(outraFrase))

function falarDepoisDe2(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe2(3, 'teste2')
    .then(frase => {
        console.log(frase)
        return "teste 3"
    })
    .then(outraFrase => {
        console.log(outraFrase)
    })
    .catch(e => console.log(e))
const fs = require('fs')
const path = require('path')

const caminhoArquivo = path.join(__dirname, 'arquivoParaDesafioPromise.txt')

const lerArquivo = (caminhoArquivo) => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminhoArquivo, (_, conteudo) => {
            resolve(conteudo)
        })
    })
}

lerArquivo(caminhoArquivo).then(console.log)
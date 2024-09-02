const http = require('http')
const { resolve } = require('path')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let getAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto AsyncFunction

getAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

// Segunda aula async/await
function esperarPor(tempo) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(), tempo * 1000)
    })
}

// com o código abaixo é possível perceber que não há espera da execução da função chamarPor e todos consoles.log são impressos diretamente
async function executar() {
    for (let i = 1; i < 4; i++) {
        esperarPor(1.5)
        console.log('async/await', i)
    }
}

executar()

// Realizando a comparação com o código abaixo, é possível perceber que há a espera de primeiro executar a função para depois ir para a outra linha
async function exec() {
    for (let i =1; i < 4; i++) {
        await esperarPor(1.5)
        console.log('async/await', i)
    }
}

exec()
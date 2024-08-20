const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}


// Para exibir as chaves presentes no objeto
console.log('utilização do Object.keys:\n', Object.keys(pessoa))

console.log('\n')
//Para exibir os valores das chaves presentes no objeto
console.log('utilização do Object.values:\n', Object.values(pessoa))

console.log('\n')
//Para exibir os pares chave e valore presentes no objeto
console.log('utilização do Object.values:\n', Object.entries(pessoa))

console.log('\n')
//Para exibir os pares chave e valore presentes no objeto utilizando o operador destructing
console.log('utilização do forEach com o operador de desestruturação:')
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

console.log('\n')
// Para criar uma nova propriedade utilizando o Object.defineProperty()
Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true, // fazer ser listável quando chamar as propriedades do objeto
    writable: false, // propriedade que permite ou não que o atributo seja modificado
    value: '01/01/2019' // define o valor da propriedade
})

pessoa.dataNasc = '01/01/2017' // tentar modificar o valor do atributo criado
console.log(pessoa.dataNasc) // o retorno demonstra que não o atributo não foi modificado
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'teste', {
    enumerable: false,
    writable: false,
    value: 'teste'
}) // criando novo atributo não listável (enumerable = false)
console.log('tentando acessar a lista com chave e valor', Object.entries(pessoa))
console.log('acessando o atributo diretamente:\n', pessoa.teste)


console.log('\n')
// uso do Object.assign (ECMAScript 2015) que insere atributos de outros objetos em um objeto de destino
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // o valor 'a: 4' do objeto 'o2' sobrescreve o valor do objeto 'dest'
console.log(obj)
console.log(dest)
console.log(o1)
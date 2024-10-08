const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__)


// Aula herença #02
console.log('\n')
// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log('avo:\n', avo)
console.log('\npai:\n', pai)
console.log('\nfilho:\n', filho)

console.log('\nAcessando atributo 1 no objeto pai:\n', pai.attr1)
console.log('\nAcessando atributo 1 no objeto filho:\n', filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
                if (this.velAtual + delta <= this.velMax) {
                    this.velAtual += delta
                } else {
                    this.velAtual = this.velMax
                }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari2 = {
    modelo: 'F40',
    velMax: 324
}

const volvo2 = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari2, carro)
Object.setPrototypeOf(volvo2, carro)

console.log('\n',ferrari2)
console.log(volvo2)

console.log('\n' + volvo2.status())
volvo2.acelerarMais(100)
console.log(volvo2.status())

console.log('\n' + ferrari2.status())
ferrari2.acelerarMais(100)
console.log(ferrari2.status())

console.log('\n')


// Aula herença #03
const pai2 = { nome: 'pedro', corCabelo: 'preto' }
const filha = Object.create(pai2) // cria um objeto tendo como prototitpo o objeto 'pai'
console.log('Sobre filha:')
console.log(filha) // retorna um objeto vazio, pois o objeto criado não possui valores próprios, apenas possui valores herdados que podem ser acessados com a notação filha.nome, por exemplo
filha.nome = 'ana' // define um atributo nome (que sobrescreve o atributo nome do prototipo) com valor 'ana'
console.log(filha) // dessa vez retorno o objeto com o atributo nome
console.log(filha.corCabelo) // retorna o valor do atributo corCabelo declarado no objeto prototipo: preto

const filha2 = Object.create(pai2, {
    nome: { value: 'Bia', writable: false, enumerable: false }
}) // cria o objeto filha2 herdando os atributos do objeto protótipo 'pai' e sobrescreve o valor do atributo nome de 'pedro' para 'bia'

console.log('\nSobre filha2:')
console.log(filha2) // retorna vazio, pois em sua criação o atributo nome veio como não enumerado
console.log(filha2.nome)
console.log(filha2.corCabelo)

console.log('\nUso do for')
for (let key in filha2) { // uso do for para percorrer em todas as chaves do elemento
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
} // no final é identificado que ele não enocontra a chave nome, pois esta foi declarada como 'enumerable: false'


// Aula herença #04 
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

let obj1 = new MeuObjeto
let obj2 = new MeuObjeto
console.log('\nexibindo obj1:', obj1)
console.log('exibindo obj2:', obj2)

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj2.nome = 'André'
obj1.falar()
obj2.falar()

obj1.falar = function() {
    console.log(`Bom dia!`)
} // sobrescreve a função falar no obj1

obj1.falar()


// Aula herença #05
console.log('\n'+ typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())

String.prototype.toString = function() {
    return 'lascou tudo'
}

console.log('Escola'.reverse())


// Aula herença #06
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até bre', 456)

console.log(aula3, aula4)
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
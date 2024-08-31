// Forma para criar conjuntos
// Regra: não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // não será adicionado, pois já existe

console.log(times)
console.log(times.size) //Saída: 5
console.log(times.has('vasco')) //Saída: false
console.log(times.has('Vasco')) //Saída: true
times.delete('Flamengo')
console.log(times.has('Flamengo')) //Saída: false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
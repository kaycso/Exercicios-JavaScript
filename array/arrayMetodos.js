const pilotos = ['vattel1', 'Alonso','Raikkonen', 'Massa']
pilotos.pop() // retira o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento a posição 0
console.log(pilotos)

// Splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1) // remove o elemento de índice 3
console.log(pilotos)

// Método slice
const algunsPilotos1 = pilotos.slice(2) // retorna um novo array com os elementos a partir do indice indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // retorna um novo array com elementos a partir do índice indicado (1) até outro índice (4) não inclusivo
console.log(algunsPilotos2)
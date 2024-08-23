let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log('tentando acessar um elemento de índice não existente no array:', aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados)
aprovados[3] = 'João' // sobrescreve o valor Paulo no array
console.log(aprovados)

aprovados[9] = 'Pedro'
console.log(aprovados)
console.log(aprovados.length)

// ordenar o array
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

notas = [5, 2, 4, 1, 3, 0, 1, 9, 6, 7, 8]
console.log(notas)
notas.sort()
console.log(notas)

// Deletar elementos do array
delete aprovados[1]
console.log(aprovados)

// Método splice
aprovados.splice(1, 1) // exlcui, a partir do índice 1 do array, um elemento, ou seja o próprio elemento de índice 1
console.log(aprovados)
aprovados.splice(4, 5) // exlcui, a partir do índice 4 do array, dois elementos
console.log(aprovados)

aprovados.splice(2, 2, 'Elemento3', 'Elemento4') // exclui 2 elementos a partir do índice 2 e adiciona o 'elemento1' e 'elemento2'
console.log(aprovados)

aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // exclui 2 elementos a partir do índice 1 e adiciona o 'elemento1' e 'elemento2' posteriormente ao elemento
console.log(aprovados)

aprovados.splice(1, 0, 'João', 'Carlos') // Não exlcuirá nenhum elemento, mas adicionará, a partir do índice 1, novos elementos
console.log(aprovados)
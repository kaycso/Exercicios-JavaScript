const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

/* 
 O forEach recebe 3 parâmetros: 
 1° - valor do elemento no array
 2° - índice do elemento
 3° - array (retorna o array completo)
*/
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})


// Aula 02
/*
    Exercício:
    Criar um método chamado forEach2 que irá executar a mesma função do forEach
*/
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const myArray = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
myArray.forEach2((nome, indice, array) => {
    console.log(`${indice + 1}) ${nome}`)  
    console.log(array)  
})
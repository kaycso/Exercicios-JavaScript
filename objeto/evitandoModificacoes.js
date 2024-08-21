// Object.preventextensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log(produto)
console.log('Extensível:', Object.isExtensible(produto))


produto.nome = 'Borracha' // é possível modificar atributos
produto.descricao = 'Borracha escolar branca' // não é possível adicionar atributos
delete produto.tag // é possível deletar atributos
console.log('\nObjeto produto modificado:\n', produto)

// Object.seal
const pessoa = { nome: 'julia', idade: 35 }
Object.seal(pessoa)
console.log('\nObjeto pessoa:\n', pessoa)

pessoa.sobrenome = 'Silva' // Não é possível adicionar atributos
delete pessoa.nome // Não é possível deletar
pessoa.idade = 40 // é possível alterar os valores do atributo
console.log('\nObjeto pessoa após o uso do Object.seal:\n', pessoa)

// Object.freeze = selado + valores constantes
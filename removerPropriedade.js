function removerPropriedade(objeto, propriedade){
    const { [propriedade]: _, ...novoObjeto } = objeto
    return novoObjeto
}

let objeto = {a: 1, b: 20}
let objeto2 = {
    id: 20,
    produto: 'camisa',
    valor: 49.90
}

console.log(removerPropriedade(objeto, 'b'))
console.log(removerPropriedade(objeto2, 'valor'))
console.log(Object.is(removerPropriedade(objeto2, 'valor'), objeto2))
console.log(objeto2)

const removeProperty = (objeto, propriedade) => {
    delete objeto[propriedade]
    return objeto
}
console.log(removeProperty({a: 1, b: 2}, 'a'))
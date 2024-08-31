// operador ... rest(juntar)/spread(espalhar)

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone) //Saída: { ativo: true, nome: 'Maria', salario: 1234.99 }

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal) //Saída: ['Maria', 'Rafaela', 'Joao', 'Pedro', 'Gloria']

//usar como parâmetro de função rest
function guardarObjetos(...propriedades) {
    const objetos = propriedades
    return objetos
}

const objeto = {a: 1, b: 2, c: 3}
const objeto2 = {a: 4, b: 5, c: 6}
const todosObjetos = guardarObjetos(objeto, objeto2)
console.log(todosObjetos) //Saída: [{a: 1, b: 2, c: 3}, {a: 4, b: 5, c: 6}]
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) //Saída: undefined
console.log(tecnologias.get('react')) //Saída: { framework: false }
console.log(tecnologias.get('react').framework) //Saída: false

const chavesVariadas = new Map([
    [function() {}, 'função'],
    [{}, 'objeto'],
    [123, 'Número']
])

console.log(chavesVariadas)

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) //verifica se uma chave existe no map - saída: true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) //Saída: false
console.log(chavesVariadas.size) //Saída: 2

/* 
    Estudo com ChatGPT:

Explique o que é o Map.

O ChatGPT disse:
ChatGPT
Map é uma estrutura de dados em JavaScript que permite armazenar pares de chave-valor, onde qualquer tipo de dado (objetos, funções, primitivos) pode ser usado como uma chave. Diferente de objetos normais, onde as chaves são strings ou símbolos, o Map oferece uma maior flexibilidade nas chaves e fornece métodos úteis para manipulação de seus dados.

Características do Map
1 - Armazenamento de Pares Chave-Valor:
- Cada entrada no Map consiste em uma chave e um valor.
- Tanto a chave quanto o valor podem ser de qualquer tipo, incluindo objetos, números, strings, funções, etc.

2 - Preservação da Ordem de Inserção:
- Ao iterar sobre um Map, os pares chave-valor são retornados na ordem em que foram inseridos, ao contrário dos objetos normais, onde a ordem das chaves não é garantida.

3 - Tamanho Dinâmico:
- O tamanho de um Map pode ser facilmente verificado usando a propriedade size.

4 - Métodos Úteis:
- set(key, value): Adiciona ou atualiza um par chave-valor.
- get(key): Retorna o valor associado a uma chave específica.
- has(key): Retorna true se uma chave específica existir no Map, caso contrário, false.
- delete(key): Remove o par chave-valor associado a uma chave específica.
- clear(): Remove todos os pares chave-valor do Map.
- keys(): Retorna um iterador para as chaves do Map.
- values(): Retorna um iterador para os valores do Map.
- entries(): Retorna um iterador para os pares chave-valor (cada entrada é um array [chave, valor]).


Exemplo de Uso do Map
Aqui está um exemplo básico de como criar e manipular um Map:
*/

// Criando um novo Map
const myMap = new Map();

// Adicionando pares chave-valor
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set('job', 'Developer');

// Acessando valores
console.log(myMap.get('name')); // Saída: "Alice"
console.log(myMap.get('age'));  // Saída: 25

// Verificando se uma chave existe
console.log(myMap.has('job')); // Saída: true
console.log(myMap.has('salary')); // Saída: false

// Tamanho do Map
console.log(myMap.size); // Saída: 3

// Iterando sobre as chaves e valores
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}
// Saída:
// name: Alice
// age: 25
// job: Developer

// Removendo um par chave-valor
myMap.delete('age');
console.log(myMap.size); // Saída: 2

// Limpando o Map
myMap.clear();
console.log(myMap.size); // Saída: 0

/*
Diferença entre Map e Objeto:
Embora tanto Map quanto objetos sejam usados para armazenar pares chave-valor, há algumas diferenças importantes:

- Tipo de Chaves:
    - Em um objeto, as chaves são sempre strings ou símbolos.
    - Em um Map, as chaves podem ser de qualquer tipo, incluindo objetos.

- Iteração:
    - A ordem de iteração de um objeto não é garantida, enquanto a ordem de iteração de um Map é sempre a ordem de inserção.

- Desempenho:
    - Map é geralmente mais eficiente para adicionar/remover pares chave-valor em comparação com objetos, especialmente quando o número de entradas é grande.

- Métodos:
    - Map oferece métodos mais diretos e ricos para manipulação de dados, como size, keys, values, entries, entre outros.


Quando Usar Map?

- Use Map quando precisar de chaves que não são strings, quando a ordem de inserção importa, ou quando precisa de métodos específicos oferecidos pelo Map.
- Para casos simples onde as chaves são strings e a performance não é uma preocupação, um objeto regular pode ser suficiente.
O Map é uma poderosa estrutura de dados que oferece flexibilidade e eficiência na manipulação de pares chave-valor em JavaScript.
*/
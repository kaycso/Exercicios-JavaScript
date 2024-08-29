const filtrarNumeros = elemento => typeof elemento === "number"

const lista = [0, 'js', 2, 1, 'python', 'Java', 21]
const listFiltrada = lista.filter(filtrarNumeros)
console.log(listFiltrada)
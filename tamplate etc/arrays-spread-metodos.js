const bestFriends = ['Ana', 'Júlia', 'Nathy', 'Deba']

console.log(bestFriends[2])

// Operador Spread (...)

const allFriends = [...bestFriends, 'Eliel', 'Mimi']

console.log(allFriends)

// Metodos de interção

/*for (let i = 0; < allFriends.length; i++) {
  console.log(allFriends[i])
}*/
// Quando precisamos de um retorno qu enão modifique o array anterios o map é perfeito

allFriends.map(Friends => console.log(Friends))

//Filter + array

const numeros = [24, 58, 49, 22, 18, 45]
const numerosImpares = numeros.filter(numero => numero % 2 != 0)

console.log(numerosImpares)
const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares)
//numeros ordenados

const numerosOrdenadosCrescente = numeros.sort((a, b) => a + b)
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numero.sort((a, b) => b - a)
console.log(numerosOrdenadosDecrescente)

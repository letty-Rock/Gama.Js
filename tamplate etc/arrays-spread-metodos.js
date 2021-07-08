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

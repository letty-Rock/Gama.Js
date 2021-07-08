// declarar objeto atribuindo a uma variavel

const pessoa = {
  nome: ' Rosangela',
  idade: '40',
  cidade: 'Guaruja'
}

//notação de ponto

console.log(pessoa.nome)

//notação de colchetes

console.log(pessoa['idade'])

//Desestruturando um objeto

const { nome, idade, cidade } = pessoa
console.log(`me chamo ${nome} anos`)
console.log(`tenho ${idade}`)
console.log(`sou de ${cidade}`)

console.log(`me chamo ${nome} tenho ${idade} ano e sou do ${cidade}`)

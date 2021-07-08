// usada para funcões anonimas ou funções call back ( passada como parametro de outras funções)

const soma = (num1, num2) => num1 + num2

console.log(soma(3, 5))
// se for mais de uma linha abrir escopo {}

const sayHello = name => `Hello ${name}`
console.log(sayHello('Letty'))

//Em JavaScript, uma "factory function" (função de fábrica) é uma função que retorna um objeto.

function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade
  };
}

// Cria uma nova instância de pessoa usando a função de fábrica

var pessoa1 = criarPessoa('Jack', 25);
var pessoa2 = criarPessoa('taylor', 30);

console.log(pessoa1); // Saída: { nome: 'Jack', idade: 25 }
console.log(pessoa2); // Saída: { nome: 'taylor', idade: 30 }


// A função Math é um objeto embutido no JavaScript que fornece métodos e constantes matemáticas 

// Exemplo: Obtendo o valor absoluto de um número
var numero = -5;
var valorAbsoluto = Math.abs(numero);

console.log(valorAbsoluto); // Saída: 5


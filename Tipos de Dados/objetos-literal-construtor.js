//Literal

var itens1 = {};
var itens2 = {nome: "suco", preço: 8, estoque: true, detalhes: {detalhe: '...'}};

//Acessando da forma literal

console.log(itens2.nome)
console.log(itens2.preço)
console.log(itens2.estoque)
console.log(itens2.detalhes)
console.log(itens2.detalhes.detalhe)

var pessoa = new Object();
pessoa.nome = "Mateus";
pessoa.idade = 23; 
pessoa.altura = 1.77;

console.log("\n-----------------------------\n")

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.altura)
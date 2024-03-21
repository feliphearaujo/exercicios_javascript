prompt = require('prompt-sync')();

let qtdMaca,preco;

qtdMaca = parseInt(prompt('Quantas maçãs você quer comprar? '));

if(qtdMaca >= 12){
    preco = qtdMaca * 0.25;
}else{
    preco = qtdMaca * 0.3;
}

console.log('O preço de',qtdMaca,'maçãs é R$',preco.toFixed(2));
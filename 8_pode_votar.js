prompt = require('prompt-sync')();

let anoVot, anoNasc, idade;

anoVot = parseInt(prompt('Digite o ano em que vai ocorrer a votação: '))
anoNasc = parseInt(prompt('Digite seu ano de nascimento: '));

idade = anoVot - anoNasc;

console.log('Idade: '+idade);

if (idade >= 16){
    console.log('Pode votar');
}else{
    console.log('Não pode votar');
}
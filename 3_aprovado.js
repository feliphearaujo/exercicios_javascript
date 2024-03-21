prompt = require('prompt-sync')()

let n1,n2,media;

n1 = parseFloat(prompt('Informe a nota 1: '));
n2 = parseFloat(prompt('Informe a nota 2: '));

media = (n1 + n2)/2;

if (media >= 6){
    console.log('PARABÉNS! Você foi aprovado!');
}else{
    process.exit();
}


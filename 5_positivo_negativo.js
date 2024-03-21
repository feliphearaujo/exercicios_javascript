prompt = require('prompt-sync')()

let n;

n = parseFloat(prompt('Digite um número: '));

if (n >= 0){
    console.log('Positivo');
}else{
    console.log('Negativo');
}

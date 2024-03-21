prompt = require('prompt-sync')()

let n;

n = parseFloat(prompt('Digite um número: '));

if (n > 0){
    console.log('Positivo');
}else if (n < 0){
    console.log('Negativo');
}else{
    console.log('Zero');
}

prompt = require('prompt-sync')();

let array = [];
let n1,n2,n3;

n1 = parseInt(prompt('Digite o primeiro número: '));
n2 = parseInt(prompt('Digite o segundo número: '));
n3 = parseInt(prompt('Digite o terceiro número: '));

array.push(n1,n2,n3);
array.sort();

console.log('Menor',array[0]+'\n'+
            'Do meio',array[1]+'\n'+
            'Maior',array[2])

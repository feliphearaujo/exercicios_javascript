prompt = require('prompt-sync')()

let n1,n2;

do{
    n1 = parseFloat(prompt('Informe o 1º número: '));
}while(n1==n2);
n1 = n1;

do{
    n2 = parseFloat(prompt('Informe o 2º número: '));
}while(n1==n2);
n2 = n2;



if (n1 > n2){
    console.log('Maior:',n1+'\n'+
                'Menor:',n2);
}else{
    console.log('Maior:',n1+'\n'+
    'Menor:',n2);
}

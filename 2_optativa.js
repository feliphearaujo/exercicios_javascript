prompt = require('prompt-sync')()

let n1,n2,op,media1,media2;

n1 = parseFloat(prompt('Informe a nota 1: '));
n2 = parseFloat(prompt('Informe a nota 2: '));

media1 = (n1 + n2)/2;

console.log('A média do aluno é',media1);

do{
    op = prompt('Deseja fazer uma avaliação optativa? s/n ');
}while(op != 's' && op != 'n');
op = op;

if(op == 's'){
    op = parseFloat(prompt('Informe a nota da optativa: '));
    if(n1 <= n2 && op >= n1){
        media2 = (op + n2)/2;
    }else if(n2 <= n1 && op >=n2){
        media2 = (op + n1)/2;
    }else{
        media2 = (n1 + n2)/2;
    }
}else{
    op = -1;
    media2 = media1;
}

console.log('A média final do aluno é',media2);

if(media2 >= 6){
    console.log('Aprovado');
}else if(media2 <= 3){
    console.log('Reprovado');
}else{
    console.log('Recuperação');
}


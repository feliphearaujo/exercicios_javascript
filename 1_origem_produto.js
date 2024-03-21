prompt = require('prompt-sync')();

let cod;

do{
    cod = prompt('Informe o codigo do produto: ')
}while(isNaN(cod))
cod = parseInt(cod);

switch (cod) {
    case 1:
        console.log('Produto da região Sul');
        break;
    case 2:
        console.log('Produto da região Norte');
        break;
    case 3:
        console.log('Produto da região Leste');
        break;
    case 4:
        console.log('Produto da região Oeste');
        break;        
    case 10:
        console.log('Produto da região Centro-Oeste');
        break;
    case 11:
        console.log('Produto da região Noroeste');
        break;    
    default:
        if(cod == 5 || cod == 6){
            console.log('Produto da região Nordeste');
        }else if(cod == 7 || cod == 8 || cod == 9){
            console.log('Produto da região Sudeste');
        }else{
            console.log('Produto importado');
        }
        break;
}

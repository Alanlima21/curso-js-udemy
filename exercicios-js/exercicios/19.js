let lanchonete = (codigo, qtd) =>{
    switch(codigo){
        case 100:
            console.log(`Valor: ${qtd * 3}`);
            break;
        case 200:
            console.log(`Valor: ${qtd * 4}`);
            break;
        case 300:
            console.log(`Valor: ${qtd * 5.50}`);
            break;
        case 400:
            console.log(`Valor: ${qtd * 7.50}`);
            break;
        case 500:
            console.log(`Valor: ${qtd * 3.50}`);
            break;
        case 600:
            console.log(`Valor: ${qtd * 2.80}`);
            break;
        default:
            console.log('Código inválido');
    }
}

lanchonete(300, 2);
lanchonete(600, 3);
lanchonete(100, 5);
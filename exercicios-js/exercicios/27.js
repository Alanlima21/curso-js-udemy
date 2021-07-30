let taxaCrecimento = (crianca1,crianca2,taxa1,taxa2) =>{
    let maior = (crianca1 > crianca2) ? crianca1 : crianca2;
    let menor = (crianca2 < crianca1) ? crianca2 : crianca1;

    let anos = 0;

    if(menor != maior){
        while(menor <= maior){
            menor += taxa1;
            maior += taxa2;
            anos++;
        }
        console.log(`A criança menor ultrapassará em ${anos} anos`);
        return '';
    }
    console.log('Tem a mesma altura');
}

taxaCrecimento(142,140,6,3);
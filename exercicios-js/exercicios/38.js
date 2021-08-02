let impares = (inicio, fim) =>{
    if(inicio > fim ){
        let aux = inicio;
        inicio = fim;
        fim = aux;
    }

    for(let i = inicio; i<=fim; i++){
        if(i % 2 !=0){
            console.log(i);
        }
    }
}

impares(30, 10);

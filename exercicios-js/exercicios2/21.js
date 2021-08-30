function menorNumero(array){
    array.sort((a,b) => a - b);
    console.log(array[0]);
}

menorNumero([10, 5, 35, 65]);
menorNumero([5, -15, 50, 3]);
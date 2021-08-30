function filtrarPorQuantidadeDeDigitos(array, digito){
    let arrayString = array.map(elemento => elemento.toString()).filter(elemento => elemento.length == digito);
    console.log(arrayString);
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2);
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1);
function receberPrimeiroEUltimoElemento(array){
    let novoArray = [];
    novoArray.push(array[0]);
    novoArray.push(array[array.length - 1]);
    console.log(novoArray);
}

receberPrimeiroEUltimoElemento([7,14,"olá"]);
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])
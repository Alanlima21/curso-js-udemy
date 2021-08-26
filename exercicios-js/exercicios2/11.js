function receberPrimeiroEUltimoElemento(array){
    let ultimo = array.pop();
    let primeiro = array.shift();
    console.log([primeiro, ultimo]);
}

receberPrimeiroEUltimoElemento([7,14,"olá"]);
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])
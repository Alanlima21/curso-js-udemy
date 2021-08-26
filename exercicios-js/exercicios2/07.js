function estaEntre (num, minimo, maximo, inclusivo = false ){
    if(minimo > maximo){
        let aux = maximo;
        maximo = minimo;
        minimo = aux;
    }
    if(!inclusivo){
        console.log((num > minimo && num < maximo) ? 'true' : 'false');
    }else{
        console.log((num >= minimo && num <= maximo) ? 'true' : 'false');
    }
}

estaEntre(10, 100, 50);
estaEntre(16, 100, 160);
estaEntre(3, 150, 3);
estaEntre(3, 150, 3, true);
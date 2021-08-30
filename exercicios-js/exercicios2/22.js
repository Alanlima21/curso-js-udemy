function funcaoDaSorte(num){
    let sort = Math.random(10) * 10;
    if(num == sort.toFixed(0)){
        console.log('Parabéns! O número sorteado foi o '+ sort.toFixed(0));
    }else{
        console.log('Que pena! O número sorteado foi o '+ sort.toFixed(0));
    }
}

funcaoDaSorte(10);
funcaoDaSorte(5);
funcaoDaSorte(3);
funcaoDaSorte(5);
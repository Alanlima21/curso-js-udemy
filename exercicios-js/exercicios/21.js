let valorPlano = (idade) =>{
    if(idade < 10){
        console.log(100 + 80);
    }else if(idade <= 30){
        console.log(100 + 50);
    }else if(idade <=60){
        console.log(100 + 95);
    }else{
        console.log(100 + 130);
    }
}

valorPlano(8);
valorPlano(21);
valorPlano(34);
valorPlano(88);
let negativos = (vetor)=>{
    let qtdNegativos = 0;
    vetor.forEach(element => {
        if(element < 0){
            qtdNegativos++
        }
    });
    return qtdNegativos;
}


console.log(negativos([1,4,5,7,-9,-3,-1]));
console.log(negativos([1,-4,5,-7,-9,-3,-1]));
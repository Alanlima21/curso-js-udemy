let conceito = (vetor)=>{
    let nota = [];
    vetor.forEach(element => {
        if(element <= 4.9){
            nota.push('D');
        }else if( element <=6.9){
            nota.push('C');
        }else if(element <= 8.9){
            nota.push('B');
        }else{
            nota.push('A');
        }
    });
    return nota;
}

console.log(conceito([3.8, 6.9, 8.7, 9.7]));
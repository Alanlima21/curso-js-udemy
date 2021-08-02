let funcao1 =(vetor, numero)=>{
    let vet = [];
    vetor.forEach(element => {
        vet.push(element * numero);
    });
    return vet;
}

let funcao2 =(vetor, numero)=>{
    let vet = [];
    vetor.forEach(element => {
        if(element > 5){
            vet.push(element * numero);
        }
    });
    return vet;
}
  
console.log(funcao1([1,3,4,8],5));
console.log(funcao2([1,3,4,8],5));
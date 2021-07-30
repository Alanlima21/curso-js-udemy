let maior = (vetor)=>{

    vetor.sort((a,b)=>{
        return a - b;
    });
    
    let maior = vetor[vetor.length -1];
    let menor = vetor[0];

    console.log(`${maior} é o maior número, ${menor} é o menor`);
}

maior([50,21,34,5,23,57]);
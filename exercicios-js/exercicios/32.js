let mediaVetor = (vetor)=>{
    let total = 0;
    vetor.forEach(element => {
        total += element;
    });
    let media  = total / vetor.length;
    return media;
}

console.log(mediaVetor([1,2,3]));
console.log(mediaVetor([14,21,33,87]));
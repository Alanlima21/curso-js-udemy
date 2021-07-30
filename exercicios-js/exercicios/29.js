let intervalo = (vetor)=>{
    let int = 0;
    let out = 0;

    vetor.forEach(element => {
        if(element >= 10 && element <= 20){
            int++;
        }else{
            out++;
        }
    });
    console.log(`${int} números no intervalo e ${out} fora`);
}


intervalo([10,21,34,3,15,20,18]);

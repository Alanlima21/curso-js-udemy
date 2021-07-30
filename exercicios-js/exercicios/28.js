const parImpar = (vetor)=>{
    let par =0;
    let impar =0;
    vetor.forEach(element => {
        if(element % 2 == 0){
            par++;
        }else{
            impar++;
        }
    });
    console.log(`${par} números pares e ${impar} números ímpares`);
}

parImpar([2,4,6,7,13,15,21,34]);

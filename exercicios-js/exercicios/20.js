const cedulas = (valor) =>{
    let cedulas = [100, 50, 10, 5, 1];
    qtd=0;
    while(valor > 0){
        for (let i =0; i< cedulas.length; i++) {
                while(valor >= cedulas[i]){
                    valor -=cedulas[i];
                    qtd++;
                } 
                if(qtd != 0){
                    console.log(`${qtd} nota(s) de R$ ${cedulas[i]}`);
                }
                qtd =0;
            }
        }
    }


cedulas(48);
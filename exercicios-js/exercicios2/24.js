function contarCaractere(caractere, frase){
    let qtd = 0;
    for(let i = 0; i< frase.length; i++){
        if(frase[i] === caractere) qtd++;
    }
    console.log(qtd);
}

contarCaractere("r", "A sorte favorece os audazes");
contarCaractere("c", "Conhece-te a ti mesmo");
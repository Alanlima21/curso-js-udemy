const pontuacaoBasquete = (pontuacao) =>{

    let pontuacaoNumber = pontuacao.split(' ').map(Number);

    let maiorPontuacao = pontuacaoNumber[0];
    let quantidadeRecorde = 0;
    let menorPontuacao = pontuacaoNumber[0];
    let posicaoMenorPontuacao;
    
    for(let i=0; i<pontuacaoNumber.length; i++){
        if(pontuacaoNumber[i] > maiorPontuacao){
            maiorPontuacao = pontuacaoNumber[i];
            quantidadeRecorde++;
        }
        if(pontuacaoNumber[i] < menorPontuacao){
            menorPontuacao = pontuacaoNumber[i];
            posicaoMenorPontuacao = i+1;
        }
    }
    return [quantidadeRecorde, posicaoMenorPontuacao];
}


console.log(pontuacaoBasquete('10 20 20 8 25 3 0 30 1'));
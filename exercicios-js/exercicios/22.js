const valorAnuidade = (mes, valor) =>{
    if(mes > 1){
        return valor += valor * Math.pow((1+0.05),mes).toFixed(2);
    }
    return valor;
}

console.log(valorAnuidade(4, 2000));
console.log(valorAnuidade(1, 2000));
console.log(valorAnuidade(5, 2000));
console.log(valorAnuidade(7, 2000));
console.log(valorAnuidade(12, 2000));

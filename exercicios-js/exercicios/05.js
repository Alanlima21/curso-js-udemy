const valorFormatado = (valor) =>{
    return valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
}

const valorFormatadoFixed = (valor=0.405655565) =>{
    return `R$ ${valor.toFixed(2)}`
}

const valorFormatado2 = (valor, casas=2) =>{
    return `R$ ${valor.toLocaleString('pt-br',{minimumFractionDigits: casas})};`
}


console.log(valorFormatado(0.30000000000000004));
console.log(valorFormatado(12333.07));
console.log('------------------------');
console.log(valorFormatadoFixed(0.30000000000000004));
console.log(valorFormatado(12333.07));
console.log(valorFormatadoFixed());
console.log('------------------------');
console.log(valorFormatado2(60000.0000, 4));

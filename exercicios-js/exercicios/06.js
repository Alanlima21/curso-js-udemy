const jurosSimples = (capital, juros, tempo) =>{
    return capital * juros / 100 * tempo;
}

const jurosComposto = (capital, juros, tempo) =>{
   return capital*Math.pow((1+juros/100),tempo);
}


console.log(jurosSimples(900, 5, 6));
console.log(jurosComposto(50000, 12, 2).toLocaleString('pt-br',{minimumFractionDigits: 2}));


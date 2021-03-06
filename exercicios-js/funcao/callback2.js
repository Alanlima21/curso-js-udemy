const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem callback
let notasBaixas = [];
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);


//com callback
notasBaixas = notas.filter(notas => notas < 7.0);
console.log(notasBaixas);

const notasMenores7 = nota => nota < 7;
notasBaixas = notas.filter(notasMenores7);

console.log(notasBaixas);
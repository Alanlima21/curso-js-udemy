let vetorInteiro = [1,2,3,4];
let vetorString = ['Teste1','Teste2', 'Teste3', 'Teste4'];
let vetorDouble = [1.1,2.3,3.4,4.5];

let vetResultado = vetorInteiro.concat(vetorString).concat(vetorDouble);
let vetResultado2 = vetorInteiro.concat(vetorString, vetorDouble);

console.log(vetResultado);
console.log('--------------');
console.log(vetResultado2);
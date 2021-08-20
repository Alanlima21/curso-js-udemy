const pilotos = ['Massa', 'Vettel', 'Alonso', 'Raikkonen'];
pilotos.pop(); // remove o último elemento
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona no início do array
console.log(pilotos);

// splice pode adicionar ou remover elementos do array

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa');
console.log(pilotos);

//remover
pilotos.splice(3, 1); // massa vai sair
console.log(pilotos);

// slice pega uma parte do array 
const algunsPilotos1 = pilotos.slice(2); // gera um novo array a partir do indice passado no parâmetro
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // gera um novo array do elemento 1 até o 3
console.log(algunsPilotos2);
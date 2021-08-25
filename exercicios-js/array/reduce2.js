const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
];

//Todos os alunos são bolsistas?
/*const result = alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
    if(acumulador == true && atual == true){
        return true;
    }
    return false;
});

console.log(result);*/

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

//algum é bolsista?
/*const result2 = alunos.map(a => a.bolsista).reduce(function(acumulador,atual){
    if(acumulador == true || atual == true){
        return true;
    }
    return false;
});

console.log(result2);*/

const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));

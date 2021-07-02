const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa;  // extraindo os atributos do objeto
console.log(nome, idade);

const {nome:n, idade:i} = pessoa;
console.log(n, i); 

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco : {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);
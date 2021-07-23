//Factory sempre retorna um novo objeto
//Factory simples 
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Mouse', 42.99));
console.log(criarProduto('Notebook', 4332.99));
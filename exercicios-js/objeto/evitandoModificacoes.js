const produto = Object.preventExtensions({ // Não pode adicionar mais atributos
    nome: 'Qualquer', preco: 19.99, tag:'Promoção'
});

console.log('Extensível: ', Object.isExtensible(produto));
produto.nome = 'Bola';
produto.descricao = 'Bola de futebol'; // não é permitido
delete produto.tag;

console.log(produto);

//seal
const pessoa = {nome: 'Juliana', idade: 23};
Object.seal(pessoa); //Não pode adicionar nem excluir atributos do objeto, apenas modifica-los
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 25;
console.log(pessoa);

//freeze = seal + atributos constantes 


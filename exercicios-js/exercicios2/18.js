function despesasTotais(produtos){
    let despesas = produtos.map(prod => prod.preco).reduce((num1, num2) => num1 + num2);
    console.log(despesas);
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]);

despesasTotais([
        {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
        {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
 ]);
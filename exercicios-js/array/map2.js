const carrinho =[
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

let precos = carrinho.map(obj => JSON.parse(obj)).map(obj => obj.preco);
console.log(precos);

const carrinho =[
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

let obj = carrinho.map(obj => JSON.parse(obj));
let precos = obj.map(obj => obj.preco);
console.log(precos);

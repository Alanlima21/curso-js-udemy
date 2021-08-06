const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 10
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) =>{ //destruction
    console.log(`${chave} ${valor}`)
});

const destino = {a:1};
const o1 = {b:2}
const o2 = {c:3, a:4};

const obj = Object.assign(destino, o1, o2); // concatena objetos

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
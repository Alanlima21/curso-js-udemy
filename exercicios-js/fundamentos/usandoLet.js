// let tem escopo global, de função e bloco
var numero = 1;

{
    let numero = 2;   // escopo de bloco
    console.log('dentro =', numero);
}

console.log('Fora =',numero)
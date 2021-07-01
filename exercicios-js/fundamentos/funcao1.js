function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(3,5);
imprimirSoma(6);
imprimirSoma(4,3,4,2,3,45,6);
imprimirSoma()


function soma(a, b=0){
    return a + b; 
}

console.log(soma(6, 4));
console.log(soma(3));
console.log(soma());

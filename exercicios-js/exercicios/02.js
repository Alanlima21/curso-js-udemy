const triagulo = (lado1, lado2, lado3) =>{
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero';
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return 'Isósceles';
    }else{
        return 'Escaleno';
    }
}

console.log(triagulo(2,2,2));
console.log(triagulo(3,4,3));
console.log(triagulo(4,2,3));
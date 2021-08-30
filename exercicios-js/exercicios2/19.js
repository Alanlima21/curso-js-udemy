function calcularMedia(array){
    let total = array.reduce((n1,n2) => n1 + n2);
    console.log(total / array.length);
}

calcularMedia([0, 10]);
calcularMedia([1, 2, 3, 4, 5]);
function somarNumeros(array){
    let result = array.reduce((num1,num2) => num1 + num2);
    console.log(result);
}

somarNumeros([10, 10, 10]);
somarNumeros([15, 15, 15, 15]);
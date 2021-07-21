console.log(soma(3,4));

//function declaration
function soma(x, y){ //Pode ser chamado antes da declaração
    return x + y;
}

//function expression
const sub = function(x, y){ //Não pode ser chamado antes da declaração
    return x -y;
}

console.log(sub(3,4));

//named function expression
const mult = function mult(x, y){ //Não pode ser chamado antes da declaração
    return x * y;
}

console.log(mult(3,4));


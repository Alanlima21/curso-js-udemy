const calculadora = (num1, operacao, num2) =>{
    switch(operacao){
        case '+':
            console.log(num1+num2);
            break;
        case '-':
            console.log(num1-num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        default:
            console.log('Operação Inválida');
    }
}

calculadora(2,'+',3);
calculadora(2,'-',3);
calculadora(2,'*',3);
calculadora(2,'/',3);

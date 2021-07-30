let salarioAjustado = (plano, salario) =>{
    switch(plano){
        case 'A':
            salario += salario * 0.1;
            console.log('Novo sálario: '+ salario);
            break;
        case 'B':
            salario += salario * 0.15;
            console.log('Novo sálario: '+ salario);
            break;
        case 'C':
            salario += salario * 0.2;
            console.log('Novo sálario: '+ salario);
            break;
        default:
            console.log('Tipo inválido');
    }
}

salarioAjustado('C',2322);
salarioAjustado('A',2322);
salarioAjustado('B',2322);
salarioAjustado('F',2322);
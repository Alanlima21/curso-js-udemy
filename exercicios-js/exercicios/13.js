const diaUtil = (dia)=>{
    switch(dia){
        case 1: case 7:
            return 'Não é dia útil';
            break;
        case 2: case 3: case 4: case 5: case 6 :
            return 'Dia útil';
            break;
        default:
            return 'Dia inválido';
    }
}

console.log(diaUtil(7));
console.log(diaUtil(3));
console.log(diaUtil(22));
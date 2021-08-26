function inverso(value){
    console.log(typeof value != 'boolean' && typeof value != 'number' ? `booleano ou número esperado, mas o parâmetro é do tipo ${typeof value}`
    :(typeof value == 'boolean'? !value : -(value)));
   /* if(typeof value === 'boolean') {
       console.log(!value);
     }else if(typeof value === 'number'){
        console.log(-(value));
     }else{
        console.log(`booleano ou números esperado, mas o parâmetro é do tipo ${typeof value}`);
     }*/
}

inverso(true);
inverso('6');
inverso(-2000);
inverso('Programação');
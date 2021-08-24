const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice, array){ // tem 3 parâmetros 
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})

aprovados.forEach(nome => console.log(nome));

const exibir = aprovado => console.log(aprovado);
aprovados.forEach(exibir);
function removerVogais(palavra){
    const vogais = ['a','e','i','o','u'];
    vogais.forEach((vogal)=>{
        palavra = palavra.replace(vogal,'');
    });
    console.log(palavra);
}

removerVogais('Cod3r');
removerVogais("Fundamentos");
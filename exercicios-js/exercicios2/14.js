function objetoParaArray(obj){
   let array = [];
   
    Object.keys(obj).forEach(function(item){
        array.push([].concat(item + " = " + obj[item]));
    });

   /* for(let prop in obj){
        array.push([].concat( prop + " = " + obj[prop]));
    }*/
    console.log(array);
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })

    objetoParaArray({
        codigo: 11111,
        preco: 12000
        })
function removerPropriedade(obj, prop){
    let newObj = Object.assign({},obj);
    delete newObj[prop]
    console.log(newObj);
}

removerPropriedade({a: 1, b: 2}, "a");
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao");

    console.log(Object.is(removerPropriedade( {id: 20,
        nome: "caneta",
        descricao: "Não preenchido"
        }, "descricao"), {id: 20,
            nome: "caneta",
            descricao: "Não preenchido"
            }));
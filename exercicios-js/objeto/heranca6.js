function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2);

//simulando o new
function novo (f, ...params){ //...params concatena um conjunto de parametros, formando um array
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Teste new', 2121);
console.log(aula3);
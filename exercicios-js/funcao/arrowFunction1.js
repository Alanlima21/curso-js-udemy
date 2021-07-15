let dobro = function (a){
    return 2 * a;
}

dobro = (a) =>{
    return 2 *a;
}

dobro = (a) => 2 *a; //retorno implícito
console.log(dobro(2));

let ola = function (){
    return 'olá';
}

ola = () => 'olá';
ola = _ => 'olá'; // possui parâmetro

console.log(ola());
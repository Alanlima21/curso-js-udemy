const pessoa = {
    saudacao: 'Bom dia!',
    falar (){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa); //o this irá respresentar o objeto passado no bind
falarDePessoa();

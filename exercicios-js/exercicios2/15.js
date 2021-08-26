function receberSomenteOsParesDeIndicesPares(array){
    const funcao = (elemento, indice) => elemento % 2 == 0 && indice % 2 == 0;
    numeros = array.filter(funcao);
    console.log(numeros);
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]);
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]);
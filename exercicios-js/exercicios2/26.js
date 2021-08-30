function buscarPalavrasSemelhantes(palavra, array){
    let newArray = array.filter(p => p.includes(palavra));
    console.log(newArray);
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]);
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]);
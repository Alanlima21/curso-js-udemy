function filtrarNumeros(array){
    let newArray = array.filter(elemento => typeof elemento == 'number');
    console.log(newArray);
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]);
filtrarNumeros(["a", "c"]);
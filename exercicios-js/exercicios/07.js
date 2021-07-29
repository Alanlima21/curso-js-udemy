function bhaskara(a, b, c){
    let delta = Math.pow(b,2) - 4 *a*c;
    if(delta < 0){
        return 'Delta negativo';
    }
    
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);

    let result =[ x1, x2];
    return result;
}   


console.log(bhaskara(2,12,-14));
console.log(bhaskara(1,-4,10));
const fatorial = (num)=>{
    let result =1;
    for(let i=num; i>0; i--){
        result *= i; 
    }
    return result;
}


console.log(fatorial(5));
console.log(fatorial(7));
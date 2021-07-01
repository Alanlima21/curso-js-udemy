// var tem escopo global e de função
{
    {
        {
            {
                var sera = 'Será??'; // escopo global
            }
        }
    }
}
console.log(sera);  


function teste(){
    var local = 123; // escopo de função
    console.log(local);
}

teste();
// erro - console.log(local);
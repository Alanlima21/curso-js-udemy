const revenda = (modelo) =>{
    switch(modelo){
        case 'hatch':
            console.log('Compra efetuada com sucesso !');
            break;
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Tem certeza que não prefere esse modelo?');
            break;
        default:
            console.log('Não trabalhamos com esse tipo de automóvel aqui');
    }
}

revenda('hatch');
revenda('motocicleta');
revenda('poshe')
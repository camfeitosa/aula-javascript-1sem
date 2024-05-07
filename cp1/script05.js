function compraDeCarro(c){
  switch(c){
    case 'hatch':
      console.log('Compra efetuada com sucesso')
      break
    case 'sedan':
    case 'motocicleta':
    case 'caminhonete':
      console.log('Tem certeza de que não prefere um modelo hatch?')
      break
    default:
      console.log('Não trabalhamos com este tipo de automóvel aqui')
  }
}

compraDeCarro('hatch')
compraDeCarro('sedan')
compraDeCarro('caminhonete')
compraDeCarro('bmw')
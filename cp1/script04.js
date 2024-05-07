function frutas(f){

  switch(f){
    case 'maçã': 
      console.log('Não vendemos esta fruta aqui')
      break
    case 'banana':
      console.log('Estamos com escassez de banana')
      break
    case 'melancia': 
      console.log('Aqui está, são 3 reais o quilo')
      break
    default: 
      console.log('Esta fruta não faz parte das frutas que me interessam')
  }

}

frutas('banana')
frutas('maçã')
frutas('melancia')
frutas('laranja')
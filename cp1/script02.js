function idadeVotar(idade) {
  if (idade >= 18 && idade <= 70) {
    console.log('Voto Obrigatório')
  } else if (idade == 16 || idade == 17 || idade > 70) {
    console.log('Facultativo')
  } else {
    console.log('Não vota')
  }
}

idadeVotar(10)
idadeVotar(16)
idadeVotar(21)
idadeVotar(70)
idadeVotar(85)
function verificarNumero(){
  let num = Number(prompt("Digite um número"))
  let res = document.getElementById('res')

  if (num > 0){
    res.textContent = `O número ${num} é positivo`
  } else if (num < 0){
    res.textContent = `O número ${num} é negativo`
  } else {
    res.textContent = `O número é ${num} (zero)`
  }
}
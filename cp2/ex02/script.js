
let salarioBruto = Number(prompt("Informe seu salário líquido: "))
console.log(`Salário Bruto = R$${salarioBruto.toFixed(2)}`)

function IR() {
  let contaIr

  if (salarioBruto < 2800) {
    console.log('Insento do Imposto de Renda')
    return 0
  } else if (salarioBruto >= 2800 && salarioBruto < 5000) {
    contaIr = salarioBruto * 15 / 100
    console.log(`Imposto de Renda = ${contaIr}`)
    return contaIr
  } else {
    contaIr = salarioBruto * 27 / 100
    console.log(`Imposto de Renda = ${contaIr}`)
    return contaIr
  }
}


function FGTS() {
  let contaFGTS = (salarioBruto * 8 / 100)
  console.log(`FGTS = ${contaFGTS}`)
  return contaFGTS
}

function INSS(){
  let contaINSS = (salarioBruto * 20 / 100)
  console.log(`INSS = ${contaINSS}`)
  return contaINSS
}

function salarioLiquido(){
  let contaSl = salarioBruto - IR() - FGTS() - INSS() 
  console.log(`O salário líquido é de: R$${contaSl.toFixed(2)}`)
}

salarioLiquido()
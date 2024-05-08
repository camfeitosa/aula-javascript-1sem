let candidato1 = 0
let candidato2 = 0
let candidato3 = 0
let candidato4 = 0
let candidato5 = 0

let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')
let c5 = document.getElementById('c5')

function candidatoUm() {
  candidato1++;
  c1.innerHTML = candidato1
}
function candidatoDois() {
  candidato2++;
  c2.innerHTML = candidato2
}
function candidatoTres() {
  candidato3++;
  c3.innerHTML = candidato3
}
function candidatoQuatro() {
  candidato4++;
  c4.innerHTML = candidato4
}
function candidatoCinco() {
  candidato5++;
  c5.innerHTML = candidato5
}

function encerrar() {
  let lista = [candidato1, candidato2, candidato3, candidato4, candidato5]
  let maisVoto = Math.max(...lista)

  // let empateVencedor = []

  // for (let i = 0; i < lista.length; i++) {
  //   if (lista[i] === maisVoto) {
  //     empateVencedor.push(i + 1);
  //   }
  // }
  
  // if (empateVencedor < [1]){
  //   console.log('')
  // }

  let index = lista.indexOf(maisVoto) + 1

  let admin = prompt('Deseja encerrar simulação?').toLocaleLowerCase()

  if (admin == 'sim') {
    alert('Votação encerrada')
    alert(`O ganhador foi o canditado ${index} com ${maisVoto} votos`)
    c1.innerHTML = '-'
    c2.innerHTML = '-'
    c3.innerHTML = '-'
    c4.innerHTML = '-'
    c5.innerHTML = '-'
    candidato1 = 0
    candidato2 = 0
    candidato3 = 0
    candidato4 = 0
    candidato5 = 0

  } else {
    alert('A votação continua')
  }
}
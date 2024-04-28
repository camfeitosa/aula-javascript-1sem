let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let n5 = document.getElementById('n5')
let n6 = document.getElementById('n6')
let n7 = document.getElementById('n7')
let n8 = document.getElementById('n8')

let r = document.getElementById('r')
let resultadoSub = document.getElementById('resultadoSub')
let resultadoMult = document.getElementById('resultadoMult')
let resultadoDiv = document.getElementById('resultadoDiv')

function soma(){
    let resultado = n1.valueAsNumber + n2.valueAsNumber
    if(isNaN(resultado))
        alert("Não digitou nada")
        
    else
        r.textContent = resultado
        r.style.color = 'red'
}

function sub(){
    let resultado = n3.valueAsNumber - n4.valueAsNumber
    if(isNaN(resultado))
        alert("Não digitou nada")
        
    else
        resultadoSub.textContent = resultado
        resultadoSub.style.color = 'red'
}

function mult(){
    let resultado = n5.valueAsNumber * n6.valueAsNumber
    if(isNaN(resultado))
        alert("Não digitou nada")

    else
        resultadoMult.textContent = resultado
        resultadoMult.style.color = 'red'
}

function div(){
    let resultado = n7.valueAsNumber * n8.valueAsNumber
    if(isNaN(resultado))
        alert("Não digitou nada")

    else
        resultadoDiv.textContent = resultado
        resultadoDiv.style.color = 'red'
}
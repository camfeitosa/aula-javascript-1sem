var agora = new Date()
var dia = agora.getDay()
var hora = agora.getHours() //selecionar a hora atual (pode ser dia, minuto, mes... )
console.log(`Agora são exatamente ${hora} horas.`) //node js = console

 /*
    0 DOM
    1 SEG
    2 TER
    3 QUA
    4 QUI
    5 SEX
    6 SAB
 */
//console.log(dia)

switch(dia){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break   
    default:
        console.log('[ERRO] dia inválido') 
}


var a = 10
var b = 20
var opcao = 1
var resultado = 0

switch (opcao)
{
    case 1: resultado = a + b;
        console.log(`Soma: ${resultado}`)
        break
    case 2: resultado = a - b;
        console.log(`Subtração: ${resultado}`)
        break
    case 3: resultado = a * b;
        console.log(`Multiplicação: ${resultado}`)
        break
    case 4: resultado = a / b;
        console.log(`Divisão: ${resultado}`)
        break

}
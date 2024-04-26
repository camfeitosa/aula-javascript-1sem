// Return = manda valores da função e retorna na própria funcao
// Return Variavel especial de retorno = return(a + b) -> adicao(1, 6) 
// A variavel adição vale o valor do return  

function adicao(a, b){
    return a + b
}

function subtracao(a, b){
    return a - b
}

function multiplicacao(a, b){
    return a * b
}

function divisao(a, b){
    if (b == 0){
        return "Não é possível dividir"
    }

    return a / b
}


// no for vc sabe o número de vezes
for(let i =1; i <= 10; i++){
    console.log(adicao(5,i))
    console.log(subtracao(10,i))
    console.log(multiplicacao(5, i))
    console.log(divisao(24, i))
}


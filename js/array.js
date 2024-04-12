// Linguagem fracamente tipada 

let a = 1
a = "abc"
a = 1.2
a = true 


//ARRAY
            //     0       1       2
const alunos = ['Luiz', 'Maria', 'João'] // indexados

alunos[0] = 'Eduardo'
alunos[3]  = 'Luiza' //será criado um elemento

alunos.push('Juju') //adicionar ao final
alunos.unshift('Primeiro') //adicinar no começo

// remover último elemento
const removido = alunos.pop() 
console.log(removido) // elemento removido 

// remover primeiro elemento
const removido2 = alunos.shift() 
console.log(removido2) // elemento removido 

console.log(alunos) // ARRAY
console.log(alunos[0]) //indice 0 = Luiz -> Eduardo

console.log(alunos[50]) //undefined

console.log(alunos.slice(0, 1)) // fatiar

console.log(alunos instanceof Array) //saber se é array


let num =[5,8,2,9,3]
// num[5] = 6
num.push(10) //coloca no ultimo elemento no array
num.sort() //ordem crescente = ordenados
num.length //saber o tamanho

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(15)
if(pos == -1){ //colocar o número direto do resultado negativo
    console.log('Valor não encontrado')
} else{
console.log(`O valor está na posição ${pos}`)
}
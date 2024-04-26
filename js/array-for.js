let frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pera']

// push, pop, length
// add, delete, tamanho

console.log(`Quantidade de elementos em frutas: ${frutas.length}`)

frutas.push('Melancia')
console.log(frutas)

// frutas.pop()

let veiculos = ['Polo', 'Virtus', 'T-Cross', 'Nivus', 'Jetta']

console.log(veiculos[0])
console.log(veiculos[1])
console.log(veiculos[2])
console.log(veiculos[3])
console.log(veiculos[4])

veiculos.push('Golf')

// for(inicio, condicao, incremento)
// i = 10 => declarar número

// inicia em 0, se i for < que 3, some i + 1

for(i = 0; i < veiculos.length; i++)
    console.log(`Veículo: ${veiculos[i]}`)

// {} definir escopo -> delimitar um comando
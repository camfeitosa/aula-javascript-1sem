function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function divisao(a, b){
  if (b == 0){
      return "Não é possível dividir"
  }
  return a / b
}

function calculadora() {
  const operacao = prompt("Escolha uma operação: \n1: Soma (+)\n2: Subtração (-)\n3: Multiplicação (*)\n4: Divisão (/)");

  const num1 = Number(prompt("Informe o primeiro número:"));
  const num2 = Number(prompt("Informe o segundo número:"));

  let resultado;

  switch (operacao) {
    case '1':
      resultado = somar(num1, num2);
      console.log(`Resultado da soma: ${resultado}`);
      break;
    case '2':
      resultado = subtrair(num1, num2);
      console.log(`Resultado da subtração: ${resultado}`);
      break;
    case '3':
      resultado = multiplicar(num1, num2);
      console.log(`Resultado da multiplicação: ${resultado}`);
      break;
    case '4':
      resultado = dividir(num1, num2);
      if (resultado !== null) {
        console.log(`Resultado da divisão: ${resultado}`);
      }
      break;
    default:
      console.log("Operação inválida!");
  }
}

while (true) {
  calculadora();
  const continuar = prompt("Deseja realizar outra operação? (s/n)").toLowerCase();
  if (continuar !== 's') {
    console.log("Encerrando a calculadora.");
    break;
  }
}

calculadora()

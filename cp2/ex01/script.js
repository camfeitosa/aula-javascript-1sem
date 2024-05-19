
function soma(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  if (num2 === 0) {
    return "Erro: Divisão por zero!";
  }
  return num1 / num2;
}

function calculadora() {
  const botoes = document.getElementsByClassName("operacao");

  for (let index = 0; index < botoes.length; index++) {
    const botao = botoes[index];
    botao.addEventListener('click', function () {
      const num1 = Number(document.getElementById("num1").value);
      const num2 = Number(document.getElementById("num2").value);
      var resultado;

      switch (botao.id) {
        case "btnSoma":
          resultado = soma(num1, num2);
          break;
        case "btnSub":
          resultado = sub(num1, num2);
          break;
        case "btnMult":
          resultado = mult(num1, num2);
          break;
        default:
          resultado = div(num1, num2);
          break;
      }
      window.alert(`O resultado é: ${resultado}`);
      if (!confirm("Deseja continuar a fazer cálculos?")) {
        document.getElementById("r").innerHTML = ""
      }
    });
  }
}

function show() {
  const r = document.getElementById("r");
  r.innerHTML = `    <div>
      <h1>Calculadora</h1>
      <h4>Insira os numeros e escolha a operação</h4>
      <input type="text" id="num1" />
      <input type="text" id="num2" />
      <div>
        <button
          id="btnSoma"
          class="operacao"
        >
          +
        </button>
        <button
          id="btnSub"
          class="operacao"
        >
          -
        </button>
        <button
          id="btnMult"
          class="operacao"
        >
          *
        </button>
        <button
          id="btnDiv"
          class="operacao"
        >
          /
        </button>
      </div>
    </div>`;
  calculadora()
}

window.onload = show  
Calculadora (4 pontos)
No Cálculo Jurídico nós desenvolvemos um sistema voltado para advogados, principalmente da área previdenciária. O nosso sistema ajuda os advogados a fazerem uma série de cálculos aritméticos como correção monetária e conversão de moeda. Isso acontece porque muitos aposentandos começaram a trabalhar antes do plano Real em 1994 e seus salários anteriores em cruzeiros muitas vezes são relevantes para o cálculo da sua aposentadoria hoje.

Nesta questão você vai desenvolver uma calculadora com as 4 operações básicas. Para simplificar um pouco a questão vamos utilizar a notação polonesa, que funciona assim:

+ 1 2

No exemplo acima nós temos a operação ( 1 + 2 ) que retorna o valor 3. Vamos chamar esse caso de expressão simples, pois tem apenas 1 operador (no caso adição). Essa notação foge um pouco dos padrões que aprendemos na escola, mas tem uma vantagem bem interessante: ela dispensa o uso de parênteses. Veja só como ficaria a operação ( 1 + 18 / ( 2 * 3 ) ):

+ 1 / 18 * 2 3

Vamos dividir a operação acima em partes para interpretar com calma:

Primeiro temos um operador + que faz a soma de 1 com o resultado da operação seguinte;
A operação seguinte é uma divisão de 18 pelo resultado da operação seguinte;
A operação seguinte é uma multiplicação de 2 e 3.
Vamos chamar esse último caso de expressão composta, pois ela nada mais é que uma composição de operações simples.

Perfeito, temos a mesma operação de antes. E sem precisar de parênteses fica mais fácil de implementar. Agora vamos fazer um tributo à linguagem de computador Lisp e separar cada operação e sub-operação em uma lista encadeada:

[ + 1 [ / 18 [ * 2 3 ] ] ]

Você deverá implementar a função calculate no código da aba ao lado para lidar com os problemas listados acima. As assinaturas da entrada e da saída da questão já estão montadas para você.

Por último, como podemos ter erro na divisão por zero vamos ter que lidar com isso de alguma forma. Para simplificar a implementação vamos retornar null esses casos de erro.

Para resolver esta questão edite o arquivo solution.ts. A contagem de pontos desta questão ocorrerá da seguinte forma:

1 ponto por implementar a função divideWithErrorHandling para tratamento de erro no caso de divisão por zero;
1 ponto por implementar a função calculateSimpleExpression que lida com expressões simples e faz as quatro operações com tratamento de erro;
2 pontos por implementar as funções calculateOperand e calculate para generalizar o trabalho para simples e compostas.
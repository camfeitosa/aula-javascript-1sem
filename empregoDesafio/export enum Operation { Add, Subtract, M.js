export enum Operation { Add, Subtract, Multiply, Divide };

// em caso de erro vamos retornar null
export type OptionalNumber = number | null;

// Repare que os tipos Operand e Expression são mutuamente recursivos
export type Operand = OptionalNumber | Expression;

// lhs - left-hand side => lado esquerdo da operação
// rhs - right-hand side => lado direito da operação
export interface Expression {
  operation : Operation,
  lhs : Operand,
  rhs : Operand
}

export interface SimpleExpression extends Expression {
  operation : Operation,
  lhs : OptionalNumber,
  rhs : OptionalNumber
}

export function divideWithErrorHandling(dividend: OptionalNumber, divisor: OptionalNumber): OptionalNumber {
  // TODO: implementar a divisão com os seguintes cuidados:
  // - se o numerador for null deve retornar null
  // - se o denominador for zero ou null deve retornar null
  return null;
}

// Esta é uma função que resolve as quatro operações básicas
// com operandos simples de cada lado (números)
export function calculateSimpleExpression(simpleExpression: SimpleExpression): OptionalNumber {
  // TODO: Implementar as quatro operações básicas
  // - se qualquer um dos operandos for null o resultado deve ser null
  // - no caso da divisão tome cuidado com o denominador zero
  switch (simpleExpression.operation){
    case Operation.Add:
      return null;
      break;
  }
}

// Esta é uma função auxiliar que calcula o valor de um dos lados da operação
export function calculateOperand(operand: Operand): OptionalNumber {
  if ((operand == null) || (typeof operand === 'number')) {
    // TODO: retornar o valor apropriado
    return null;
  } else {
    // TODO: retornar o valor apropriado
    return null;
  }
}

// Esta função final resolve a expressão delegando
// para as funções auxiliares definidas acima
export function calculate(expression: Expression): OptionalNumber {
  // TODO: calcular o valor usando as funções auxiliares anteriores
  return null;
}

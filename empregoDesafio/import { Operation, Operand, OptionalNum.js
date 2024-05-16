import { Operation, Operand, OptionalNumber, SimpleExpression, Expression, divideWithErrorHandling, calculateSimpleExpression, calculateOperand, calculate } from "../solution";
const assert = require('assert');

describe("calculator helper functions", () => {
  it("divideWithErrorHandling", () => {
    assert.equal(divideWithErrorHandling(1, 1), 1);
    assert.equal(divideWithErrorHandling(6, 3), 2);
    assert.equal(divideWithErrorHandling(null, 1), null);
    assert.equal(divideWithErrorHandling(1, 0), null);
    assert.equal(divideWithErrorHandling(1, null), null);
    assert.equal(divideWithErrorHandling(null, null), null);
  })

  it("calculateSimpleExpression", () => {
    const expressionAndResults: Array<[SimpleExpression, OptionalNumber]> = [
      [ {operation: Operation.Add,      lhs: 2,     rhs: 2},     4],
      [ {operation: Operation.Add,      lhs: 2,     rhs: null},  null],
      [ {operation: Operation.Add,      lhs: null,  rhs: 2},     null],
      [ {operation: Operation.Subtract, lhs: 5,     rhs: 4},     1],
      [ {operation: Operation.Subtract, lhs: 5,     rhs: null},  null],
      [ {operation: Operation.Subtract, lhs: null,  rhs: 4},     null],
      [ {operation: Operation.Multiply, lhs: 2,     rhs: 3},     6],
      [ {operation: Operation.Multiply, lhs: null,  rhs: 3},     null],
      [ {operation: Operation.Multiply, lhs: 2,     rhs: null},  null],
      [ {operation: Operation.Divide,   lhs: 10,    rhs: 2},     5]
    ];

    for (const expressionAndResult of expressionAndResults) {
      const expression: SimpleExpression = expressionAndResult[0];
      const result: OptionalNumber = expressionAndResult[1];
      assert.equal(calculateSimpleExpression(expression), result);
    }
  });

  it("calculateOperand", () => {
    const operandAndResults: Array<[Operand, OptionalNumber]> = [
      [null, null],
      [0, 0],
      [1, 1],
      [{operation: Operation.Add, lhs: 2, rhs: 2}, 4],
    ];

    for (const operandAndResult of operandAndResults) {
      const operand: Operand = operandAndResult[0];
      const result: OptionalNumber = operandAndResult[1];
      assert.equal(calculateOperand(operand), result);
    }
  });

  it("calculate", () => {
    const expressionAndResults: Array<[Expression, OptionalNumber]> = [
      [
        {
          operation: Operation.Add,
          lhs: 2,
          rhs: 2
        },
        4
      ],
      [
        {
          operation: Operation.Divide,
          lhs: {
            operation: Operation.Add,
            lhs: 8,
            rhs: 7
          },
          rhs: 3
        },
        5
      ],
      [
        {
          operation: Operation.Multiply,
          lhs: {
            operation: Operation.Subtract,
            lhs: 9,
            rhs: 4
          },
          rhs: {
            operation: Operation.Add,
            lhs: 3,
            rhs: 4
          }
        },
        35
      ]
    ];

    for (const expressionAndResult of expressionAndResults) {
      const expression: Expression = expressionAndResult[0];
      const result: OptionalNumber = expressionAndResult[1];
      assert.equal(calculate(expression), result);
    }
  });
})
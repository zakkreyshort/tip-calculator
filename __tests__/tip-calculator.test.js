import { Calculator } from "../src/tip-calculator.js"

describe('Tip Calculator', () => {
  const calc = new Calculator(20);
  test('if user inputs a non-Float, convert into a floating number', () => {
    expect(calc.totalCost).toEqual(20.00);    
  })
})
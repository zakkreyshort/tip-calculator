import { Calculator } from "../src/tip-calculator.js"

describe('Tip Calculator', () => {
  const calc = new Calculator(20);
  test('if user inputs a non-Float, convert into a floating number', () => {
    expect(calc.totalCost).toEqual(20.00);    
  });
  const calc2 = new Calculator("Hello");
  test('if inputs a string return error', () => {
    expect(calc2.convertFloat()).toEqual("Error");
  });

  const  calc3 = new Calculator(-25);
  test("if user inputs a negative float return error", () => {
    expect(calc3.checkNegative()).toEqual("Error");
  })

  const calc4 = new Calculator(20);
  test('if user enters 10% tip, return 10% of total', () => {
    expect(calc4.calculateTen()).toEqual(2.00);
  })

  const calc5 = new Calculator(20);
  test('if user enters 15% tip, return 15% of total', () => {
    expect(calc5.calculateFifteen()).toEqual(3.00);
  });
})
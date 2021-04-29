const { expect } = require("chai");
const Calculator = require("../src/Calculator");

describe("Calculator", function () {
  describe("add()", function () {
    it("should return the sum of numbers", function () {
      const calc = new Calculator();
      const sum = calc.add(1, 2, 3);
      expect(sum).to.equal(6);
    });

    it ("should return 0 if no arguments are provided", function () {
      const calc = new Calculator();
      const sum = calc.add();
      expect(sum).to.equal(0);
    });

    it ("should return the sum of only numeric values and ignore non-numeric values", function () {
      const calc = new Calculator();
      const sum = calc.add(1, 2, 3, "asdf", "1");
      expect(sum).to.equal(6);
    });
  });
});

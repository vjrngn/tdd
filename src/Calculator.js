module.exports = class Calculator {
  add(...numbers) {
    if (numbers.length === 0) {
      return 0;
    }

    return numbers.reduce((sum, num) => {
      if (typeof num === "number") {
        sum += num;
      }
      return sum;
    });
  }
};

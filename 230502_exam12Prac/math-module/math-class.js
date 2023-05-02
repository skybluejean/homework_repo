// math-module.js

/*
//helper function을 결합하지 않은 형태
class MathModule {
  static add(a, b) {
    return a + b;
  }

  static minus(a, b) {
    return a - b;
  }

  static divide(a, b) {
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

module.exports = MathModule;
*/


// math-module.js

class MathModule {
  static validateNumber(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Invalid arguments, please provide numbers");
    }
  }

  static add(a, b) {
    this.validateNumber(a, b);
    return a + b;
  }

  static minus(a, b) {
    this.validateNumber(a, b);
    return a - b;
  }

  static divide(a, b) {
    this.validateNumber(a, b);
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  static multiply(a, b) {
    this.validateNumber(a, b);
    return a * b;
  }
}

module.exports = MathModule;

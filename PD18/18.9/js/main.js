const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      if (b === 0) {
        return "Error";
      }
      return a / b;
    },
    sqrt: function(a) {
      return Math.sqrt(a);
    },
  };

  console.log(calculator.add(2, 2));
  console.log(calculator.subtract(4, 2)); 
  console.log(calculator.multiply(4, 4));
  console.log(calculator.divide(16, 2));
  console.log(calculator.sqrt(4)); 
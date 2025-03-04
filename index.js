// 1. receivesAFunction
function receivesAFunction(callback) {
    callback();
  }
  
  // 2. returnsANamedFunction
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // 3. returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
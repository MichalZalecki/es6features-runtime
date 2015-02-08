System.registerModule("modules/math", [], function() {
  "use strict";
  var __moduleName = "modules/math";
  function sum(x, y) {
    return x + y;
  }
  var pi = 3.141593;
  return {
    get sum() {
      return sum;
    },
    get pi() {
      return pi;
    }
  };
});
//# sourceURL=src/es6/modules/math.js
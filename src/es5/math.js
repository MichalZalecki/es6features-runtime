$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
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
//# sourceURL=src/es6/math.js
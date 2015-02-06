$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Iterators and For Of", (function() {
    it("should iterate fibonacci using next()", (function() {
      function fibonacci(i) {
        var $__0;
        return ($__0 = {}, Object.defineProperty($__0, Symbol.iterator, {
          value: function() {
            var pre = -1,
                cur = 1;
            return {next: function() {
                var $__3,
                    $__4,
                    $__5;
                ($__3 = [cur, pre + cur], pre = ($__4 = $__3[$traceurRuntime.toProperty(Symbol.iterator)](), ($__5 = $__4.next()).done ? void 0 : $__5.value), cur = ($__5 = $__4.next()).done ? void 0 : $__5.value, $__3);
                return {
                  done: !(i--),
                  value: cur
                };
              }};
          },
          configurable: true,
          enumerable: true,
          writable: true
        }), $__0);
      }
      var fib = [];
      for (var $__1 = fibonacci(10)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__2 = void 0; !($__2 = $__1.next()).done; ) {
        var n = $__2.value;
        {
          fib.push(n);
        }
      }
      expect(fib).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    }));
  }));
  return {};
});
//# sourceURL=src/es6/iterators-for-of.js
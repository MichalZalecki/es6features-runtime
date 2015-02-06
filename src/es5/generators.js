$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Generators", (function() {
    it("should make foo yielding", (function() {
      var $__6 = $traceurRuntime.initGeneratorFunction(foo);
      function foo() {
        var i;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                i = 0;
                $ctx.state = 14;
                break;
              case 14:
                $ctx.state = 2;
                return ++i;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 4:
                $ctx.state = 6;
                return ++i;
              case 6:
                $ctx.maybeThrow();
                $ctx.state = 8;
                break;
              case 8:
                $ctx.state = 10;
                return ++i;
              case 10:
                $ctx.maybeThrow();
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__6, this);
      }
      var k = 1;
      for (var $__1 = foo()[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__2 = void 0; !($__2 = $__1.next()).done; ) {
        var i = $__2.value;
        {
          expect(i).toEqual(k++);
        }
      }
    }));
    it("should iterate fibonacci using yield", (function() {
      function fibonacci(i) {
        var $__0;
        return ($__0 = {}, Object.defineProperty($__0, Symbol.iterator, {
          value: $traceurRuntime.initGeneratorFunction(function $__6() {
            var $__3,
                $__4,
                $__5,
                pre,
                cur;
            return $traceurRuntime.createGeneratorInstance(function($ctx) {
              while (true)
                switch ($ctx.state) {
                  case 0:
                    pre = -1, cur = 1;
                    $ctx.state = 9;
                    break;
                  case 9:
                    $ctx.state = (!!(i--)) ? 5 : -2;
                    break;
                  case 5:
                    ($__3 = [cur, pre + cur], pre = ($__4 = $__3[$traceurRuntime.toProperty(Symbol.iterator)](), ($__5 = $__4.next()).done ? void 0 : $__5.value), cur = ($__5 = $__4.next()).done ? void 0 : $__5.value, $__3);
                    $ctx.state = 6;
                    break;
                  case 6:
                    $ctx.state = 2;
                    return cur;
                  case 2:
                    $ctx.maybeThrow();
                    $ctx.state = 9;
                    break;
                  default:
                    return $ctx.end();
                }
            }, $__6, this);
          }),
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
    it("should handle recursive yielding", (function() {
      var $__6 = $traceurRuntime.initGeneratorFunction(flatten);
      function flatten(t) {
        var n,
            $__7,
            $__8,
            $__9,
            $__10;
        var $arguments = arguments;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                n = $arguments[1] !== (void 0) ? $arguments[1] : 0;
                $ctx.state = 32;
                break;
              case 32:
                $ctx.state = (t[n]) ? 17 : -2;
                break;
              case 17:
                $ctx.state = (Array.isArray(t[n])) ? 11 : 13;
                break;
              case 11:
                $__7 = flatten(t[n])[Symbol.iterator]();
                $ctx.sent = void 0;
                $ctx.action = 'next';
                $ctx.state = 12;
                break;
              case 12:
                $__8 = $__7[$ctx.action]($ctx.sentIgnoreThrow);
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = ($__8.done) ? 3 : 2;
                break;
              case 3:
                $ctx.sent = $__8.value;
                $ctx.state = 10;
                break;
              case 2:
                $ctx.state = 12;
                return $__8.value;
              case 13:
                $ctx.state = 14;
                return t[n];
              case 14:
                $ctx.maybeThrow();
                $ctx.state = 10;
                break;
              case 10:
                $__9 = flatten(t, n + 1)[Symbol.iterator]();
                $ctx.sent = void 0;
                $ctx.action = 'next';
                $ctx.state = 29;
                break;
              case 29:
                $__10 = $__9[$ctx.action]($ctx.sentIgnoreThrow);
                $ctx.state = 26;
                break;
              case 26:
                $ctx.state = ($__10.done) ? 20 : 19;
                break;
              case 20:
                $ctx.sent = $__10.value;
                $ctx.state = -2;
                break;
              case 19:
                $ctx.state = 29;
                return $__10.value;
              default:
                return $ctx.end();
            }
        }, $__6, this);
      }
      var nums = [];
      for (var $__1 = flatten([10, 11, 12, [13, 14, [15, 16]], 17])[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__2 = void 0; !($__2 = $__1.next()).done; ) {
        var n = $__2.value;
        {
          nums.push(n);
        }
      }
      expect(nums).toEqual([10, 11, 12, 13, 14, 15, 16, 17]);
    }));
  }));
  return {};
});
//# sourceURL=src/es6/generators.js
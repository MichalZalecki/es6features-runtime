$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Block Scoped Binding", (function() {
    it("should provide scopes other than\n        the function and top level scope", (function() {
      (function() {
        var funcs = [];
        for (var $__0 = [4, 5, 6][$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1 = void 0; !($__1 = $__0.next()).done; ) {
          var i = $__1.value;
          {
            funcs.push(function() {
              return i;
            });
          }
        }
        expect([funcs[0](), funcs[1](), funcs[2]()]).toEqual([6, 6, 6]);
      })();
      (function() {
        var funcs = [];
        var $__2 = function() {
          var i = $__1.value;
          {
            funcs.push(function() {
              return i;
            });
          }
        };
        for (var $__0 = [4, 5, 6][$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1 = void 0; !($__1 = $__0.next()).done; ) {
          $__2();
        }
        expect([funcs[0](), funcs[1](), funcs[2]()]).toEqual([4, 5, 6]);
      })();
      expect((function() {
        {
          var x = 1;
        }
        expect(x).toEqual(1);
      })).not.toThrowError();
      expect((function() {
        {
          var x$__3 = 1;
        }
        expect(x).toEqual(1);
      })).toThrowError("x is not defined");
      expect((function() {
        {
          var x$__4 = 1;
        }
        expect(x).toEqual(1);
      })).toThrowError("x is not defined");
      expect((function() {
        var x = 1;
        var y = {x: 1};
        var z = {x: 1};
        z.x = 2;
        expect(x).toEqual(1);
        expect(y).toEqual({x: 1});
        expect(z).toEqual({x: 2});
      }));
    }));
  }));
  return {};
});
//# sourceURL=src/es6/let-and-const.js
$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe('ES6 Features Runtime', (function() {
    "use strict";
    describe('Arrows', (function() {
      it('arrows', (function() {
        var square = (function(x) {
          return x * x;
        });
        var square2 = (function(x) {
          return x * x;
        });
        var objectify = (function(x) {
          return ({value: x});
        });
        expect(square(5)).toBe(25);
        expect(square2(3)).toBe(9);
        expect(objectify(1)).toEqual({value: 1});
      }));
    }));
  }));
  return {};
});
//# sourceURL=src/es6/features.js
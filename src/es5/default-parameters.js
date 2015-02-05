$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Default Parameters", (function() {
    it("should be awesome", (function() {
      function f(list) {
        var indexA = arguments[1] !== (void 0) ? arguments[1] : 0;
        var indexB = arguments[2] !== (void 0) ? arguments[2] : list.length;
        return [list, indexA, indexB];
      }
      expect(f([1, 2, 3])).toEqual([[1, 2, 3], 0, 3]);
      expect(f([1, 2, 3], 1)).toEqual([[1, 2, 3], 1, 3]);
      expect(f([1, 2, 3], 1, 2)).toEqual([[1, 2, 3], 1, 2]);
    }));
  }));
  return {};
});
//# sourceURL=src/es6/default-parameters.js
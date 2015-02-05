$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Arrow Functions", (function() {
    it("should be awesome", (function() {
      var square = (function(x) {
        return x * x;
      });
      var square2 = (function(x) {
        return x * x;
      });
      var triangleArea = (function(a, h) {
        return a * h / 2;
      });
      var triangleArea2 = (function(a, b, c) {
        var p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
      });
      var objectify = (function(x) {
        return ({value: x});
      });
      expect(square(3)).toEqual(9);
      expect(square2(4)).toEqual(16);
      expect(triangleArea(4, 6)).toEqual(12);
      expect(triangleArea2(3, 4, 5)).toEqual(6);
      expect(objectify("awesome")).toEqual({value: "awesome"});
    }));
  }));
  return {};
});
//# sourceURL=src/es6/arrow-functions.js
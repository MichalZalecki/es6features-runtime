$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Enhanced Object Literals", (function() {
    it("should bring more flexibility when defining object properties", (function() {
      var $__0;
      function greet(name) {
        return "Hello " + name;
      }
      var x = 2;
      var obj = ($__0 = Object.create({
        hi: function() {
          return "Hi!";
        },
        by: function() {
          return "By!";
        }
      }), Object.defineProperty($__0, x * 2, {
        value: "Computed Property Name",
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__0, "greet", {
        value: greet,
        configurable: true,
        enumerable: true,
        writable: true
      }), $__0);
      expect(obj[4]).toEqual("Computed Property Name");
      expect(obj.hi()).toEqual("Hi!");
      expect(obj.by()).toEqual("By!");
      expect(obj.greet("Bob")).toEqual("Hello Bob");
    }));
  }));
  return {};
});
//# sourceURL=src/es6/enhanced-object-literals.js
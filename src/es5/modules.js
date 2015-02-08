$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  var mathematics = System.get("modules/math");
  var $__0 = System.get("modules/person"),
      name = $__0.name,
      surname = $__0.surname;
  describe("Modules", (function() {
    it("should load everything from modules/math as mathematics", (function() {
      expect(mathematics).toEqual(jasmine.any(Object));
      expect(mathematics.sum(2, 3)).toEqual(5);
      expect(mathematics.pi).toEqual(3.141593);
    }));
    it("should load name and surname from modules/person", (function() {
      expect(name).toEqual("Foo");
      expect(surname).toEqual("Bar");
    }));
  }));
  return {};
});
//# sourceURL=src/es6/modules.js
$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Destructuring Assignment", (function() {
    it("should works for list matching", (function() {
      var $__1,
          $__2,
          $__4,
          $__5;
      var $__0 = [1, 2, [3, 4]],
          a = ($__1 = $__0[$traceurRuntime.toProperty(Symbol.iterator)](), ($__2 = $__1.next()).done ? void 0 : $__2.value),
          $__3 = ($__1.next(), ($__2 = $__1.next()).done ? void 0 : $__2.value),
          b = ($__4 = $__3[$traceurRuntime.toProperty(Symbol.iterator)](), ($__5 = $__4.next()).done ? void 0 : $__5.value),
          c = ($__5 = $__4.next()).done ? void 0 : $__5.value;
      expect(a).toEqual(1);
      expect(b).toEqual(3);
      expect(c).toEqual(4);
    }));
    it("should works for object matching", (function() {
      var $__0 = {
        firstName: "Foo",
        lastName: "Bar",
        info: {
          age: 20,
          driver: true
        }
      },
          firstName = $__0.firstName,
          surname = $__0.lastName,
          $__3 = $__0.info,
          age = $__3.age,
          driver = $__3.driver;
      expect(firstName).toEqual("Foo");
      expect(surname).toEqual("Bar");
      expect(age).toEqual(20);
      expect(driver).toEqual(true);
    }));
    it("should works in parameter position", (function() {
      function foo($__0) {
        var x = $__0.bar;
        return x;
      }
      expect(foo({bar: 5})).toEqual(5);
    }));
    it("should works for fail-soft destructuring", (function() {
      var $__3,
          $__1,
          $__2,
          $__4;
      var a = ($__2 = [][$traceurRuntime.toProperty(Symbol.iterator)](), ($__4 = $__2.next()).done ? void 0 : $__4.value);
      expect(a).toBeUndefined();
    }));
    it("should works for fail-soft destructuring with defaults", (function() {
      var $__3,
          $__1,
          $__2,
          $__4;
      var a = ($__2 = [1][$traceurRuntime.toProperty(Symbol.iterator)](), ($__4 = $__2.next()).done ? void 0 : $__4.value);
      expect(a).toEqual(1);
    }));
  }));
  return {};
});
//# sourceURL=src/es6/destructuring-assignment.js
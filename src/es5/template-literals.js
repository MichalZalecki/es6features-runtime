$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  var $__0 = Object.freeze(Object.defineProperties(["First name: ", "\n            Last name: ", "\n            Email: ", ""], {raw: {value: Object.freeze(["First name: ", "\n            Last name: ", "\n            Email: ", ""])}}));
  describe("Template Literals", (function() {
    var name,
        surname,
        email;
    beforeEach((function() {
      name = "Foo";
      surname = "Bar";
      email = "foo@example.com";
    }));
    it("should annihilate \"var1 + ' ' + var2\" hell", (function() {
      expect((name + " " + surname)).toEqual("Foo Bar");
    }));
    it("should provide tagged template strings", (function() {
      function vCard(strs) {
        for (var values = [],
            $__3 = 1; $__3 < arguments.length; $__3++)
          values[$__3 - 1] = arguments[$__3];
        var card = {};
        var regExp = /[\t ]*([a-zA-Z@\. ]+): /;
        for (var $__1 = strs[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__2 = void 0; !($__2 = $__1.next()).done; ) {
          var str = $__2.value;
          {
            if (regExp.test(str)) {
              card[str.match(regExp)[1]] = values.shift();
            }
          }
        }
        return card;
      }
      expect(vCard($__0, name, surname, email)).toEqual({
        "First name": "Foo",
        "Last name": "Bar",
        Email: "foo@example.com"
      });
    }));
  }));
  return {};
});
//# sourceURL=src/es6/template-literals.js
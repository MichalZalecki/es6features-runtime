$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Rest Parameters", (function() {
    it("should allow to to have variable number of\n        arguments without using the arguments object", (function() {
      function buy(where) {
        for (var items = [],
            $__0 = 1; $__0 < arguments.length; $__0++)
          items[$__0 - 1] = arguments[$__0];
        return "I'm going to " + where + " to buy " + items.length + " items: " + items.slice(0, -1).join(", ") + " and " + items.slice(-1) + ".";
      }
      expect(buy("the mall", "jacket", "bag", "sweets", "headphones")).toEqual("I'm going to the mall to buy 4 items: " + "jacket, bag, sweets and headphones.");
    }));
  }));
  return {};
});
//# sourceURL=src/es6/rest-parameters.js
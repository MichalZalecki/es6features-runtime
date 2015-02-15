$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Arrow Functions", (function() {
    it("should be a function shorthand", (function() {
      var square = (function(x) {
        return x * x;
      });
      var square2 = (function(x) {
        return x * x;
      });
      var triangleArea = (function(a, h) {
        return a * h / 2;
      });
      var triangleHeron = (function(a, b, c) {
        var p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
      });
      var objectify = (function(x) {
        return ({value: x});
      });
      var person = {
        name: "Bob",
        belongings: ["Car", "PC"],
        getProperties: function() {
          var properties = [];
          this.belongings.forEach(function(thing) {
            properties.push(this.name + " has " + thing);
          });
          return properties;
        },
        getProperties2: function() {
          var $__0 = this;
          var properties = [];
          this.belongings.forEach((function(thing) {
            properties.push($__0.name + " has " + thing);
          }));
          return properties;
        }
      };
      expect(square(3)).toEqual(9);
      expect(square2(13)).toEqual(169);
      expect(triangleArea(4, 6)).toEqual(12);
      expect(triangleHeron(3, 4, 5)).toEqual(6);
      expect(objectify("awesome")).toEqual({value: "awesome"});
      expect((function() {
        return person.getProperties();
      })).toThrow(new TypeError("Cannot read property 'name' of undefined"));
      expect(person.getProperties2()).toEqual(["Bob has Car", "Bob has PC"]);
    }));
  }));
  return {};
});
//# sourceURL=src/es6/arrow-functions.js
System.registerModule("modules/person", [], function() {
  "use strict";
  var __moduleName = "modules/person";
  var name = "Foo";
  var surname = "Bar";
  return {
    get name() {
      return name;
    },
    get surname() {
      return surname;
    }
  };
});
//# sourceURL=src/es6/modules/person.js
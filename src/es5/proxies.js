$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Proxies", (function() {
    xit("should...", (function() {
      var target = {};
      var handler = {get: function(receiver, name) {
          return ("Hello, " + name + "!");
        }};
      var p = new Proxy(target, handler);
      expect(p.world).toEqual('Hello, world!');
    }));
  }));
  return {};
});
//# sourceURL=src/es6/proxies.js
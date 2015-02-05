$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Spread", (function() {
    it("should be awesome", (function() {
      function send(what, where, toWhom) {
        return "I'm sending " + what + " to " + toWhom + " who is in " + where + ".";
      }
      expect(send.apply((void 0), $traceurRuntime.spread(["the letter", "Poland", "Mike"]))).toEqual("I'm sending the letter to Mike who is in Poland.");
    }));
  }));
  return {};
});
//# sourceURL=src/es6/spread.js
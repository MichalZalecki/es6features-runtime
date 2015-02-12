$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Promises", (function() {
    var Stepper = function Stepper() {
      this.steps = 0;
    };
    ($traceurRuntime.createClass)(Stepper, {step: function() {
        var n = arguments[0] !== (void 0) ? arguments[0] : 1;
        this.steps += n;
        return this;
      }}, {});
    function stepPromise(stepper) {
      return new Promise((function(resolve, reject) {
        setTimeout((function() {
          if (stepper.steps < 10000) {
            resolve(stepper);
          } else {
            reject(new Error("OKAAAYYY! That's enough now."));
          }
        }), 100);
      }));
    }
    function firstPromise() {
      for (var promises = [],
          $__1 = 0; $__1 < arguments.length; $__1++)
        promises[$__1] = arguments[$__1];
      return Promise.race(promises);
    }
    function waitForLastPromise() {
      for (var promises = [],
          $__2 = 0; $__2 < arguments.length; $__2++)
        promises[$__2] = arguments[$__2];
      return Promise.all(promises);
    }
    var stepper;
    beforeEach((function() {
      stepper = new Stepper();
    }));
    it("should be resolved asynchronously", (function(done) {
      var msg;
      Promise.resolve("Resolved!").then((function(m) {
        msg = m;
        expect(msg).toEqual("Resolved!");
        done();
      }));
      expect(msg).toBeUndefined();
    }));
    it("should be rejected asynchronously", (function(done) {
      var msg;
      Promise.reject(new Error("Rejected!")).then((function() {}), (function(err) {
        msg = err.message;
        expect(msg).toEqual("Rejected!");
        done();
      }));
      expect(msg).toBeUndefined();
    }));
    it("should be resolved", (function(done) {
      stepPromise(stepper.step()).then((function(stepper) {
        expect(stepper.steps).toEqual(1);
        done();
      }));
    }));
    it("should be resolved and then chained", (function(done) {
      stepPromise(stepper.step()).then((function(stepper) {
        return stepPromise(stepper.step());
      })).then((function(stepper) {
        return stepPromise(stepper.step(2));
      })).then((function(stepper) {
        return stepPromise(stepper.step());
      })).then((function(stepper) {
        return stepPromise(stepper.step(3));
      })).then((function(stepper) {
        return stepPromise(stepper.step());
      })).then((function(stepper) {
        expect(stepper.steps).toEqual(9);
        done();
      }));
    }));
    it("should be rejected and handled by then", (function(done) {
      stepPromise(stepper.step(9999)).then((function(stepper) {
        return stepPromise(stepper.step());
      })).then((function() {}), (function(err) {
        expect(err).toEqual(new Error("OKAAAYYY! That's enough now."));
        done();
      }));
    }));
    it("should be rejected and handled by catch", (function(done) {
      stepPromise(stepper.step(9999)).then((function(stepper) {
        return stepPromise(stepper.step());
      })).catch((function(err) {
        expect(err).toEqual(new Error("OKAAAYYY! That's enough now."));
        done();
      }));
    }));
    it("should be resolved on first promise resolve", (function(done) {
      var promise100 = new Promise((function(resolve) {
        setTimeout((function() {
          resolve(100);
        }));
      }), 100);
      var promise200 = new Promise((function(resolve) {
        setTimeout((function() {
          resolve(200);
        }));
      }), 200);
      var promise300 = new Promise((function(resolve) {
        setTimeout((function() {
          resolve(300);
        }));
      }), 300);
      firstPromise(promise100, promise200, promise300).then((function(value) {
        expect(value).toEqual(100);
        done();
      }));
    }));
    it("should be resolved on last promise resolve", (function(done) {
      var promise100 = new Promise((function(resolve) {
        setTimeout((function() {
          resolve(100);
        }));
      }), 100);
      var promise200 = new Promise((function(resolve) {
        setTimeout((function() {
          resolve(200);
        }));
      }), 200);
      var promise300 = new Promise((function(resolve) {
        setTimeout((function() {
          resolve(300);
        }));
      }), 300);
      waitForLastPromise(promise100, promise300, promise200).then((function(value) {
        expect(value).toEqual([100, 300, 200]);
        done();
      }));
    }));
  }));
  return {};
});
//# sourceURL=src/es6/promises.js
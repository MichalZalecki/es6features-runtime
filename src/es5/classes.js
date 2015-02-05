$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe("Classes", (function() {
    it("should be awesome", (function() {
      var Point = function Point() {
        var x = arguments[0] !== (void 0) ? arguments[0] : 0;
        var y = arguments[1] !== (void 0) ? arguments[1] : 0;
        this.x = x;
        this.y = y;
      };
      ($traceurRuntime.createClass)(Point, {update: function() {
          var x = arguments[0] !== (void 0) ? arguments[0] : 0;
          var y = arguments[1] !== (void 0) ? arguments[1] : 0;
          this.x = x;
          this.y = y;
        }}, {});
      var Circle = function Circle(r, x, y) {
        $traceurRuntime.superConstructor($Circle).call(this, x, y);
        this.r = r;
      };
      var $Circle = Circle;
      ($traceurRuntime.createClass)(Circle, {
        update: function(r, x, y) {
          $traceurRuntime.superGet(this, $Circle.prototype, "update").call(this, x, y);
          this.r = r;
        },
        isPointIncluded: function(point) {
          if (point.constructor != Point)
            throw new Error("point must be an instance of Point");
          return Math.pow(this.r, 2) + Math.pow(this.y, 2) >= Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2);
        }
      }, {}, Point);
      var c1 = new Circle(3);
      expect(c1.isPointIncluded(new Point())).toEqual(true);
      expect(c1.isPointIncluded(new Point(0, 3))).toEqual(true);
      expect(c1.isPointIncluded(new Point(3, 3))).toEqual(false);
      var c2 = new Circle(6, 2, 1);
      expect(c2.isPointIncluded(new Point(2, 7))).toEqual(true);
      expect(c2.isPointIncluded(new Point(3, -1))).toEqual(true);
      expect(c2.isPointIncluded(new Point(6, 6))).toEqual(false);
      c2.update(6, 2, 2);
      expect(c2.isPointIncluded(new Point(6, 6))).toEqual(true);
    }));
  }));
  return {};
});
//# sourceURL=src/es6/classes.js
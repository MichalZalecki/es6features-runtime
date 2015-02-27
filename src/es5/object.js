$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  describe('Object', (function() {
    describe('.is(o1, o2) ', (function() {
      it('should determines whether two values are the same value', (function() {
        var a = {},
            b = a,
            c = {};
        expect(Object.is()).toEqual(true);
        expect(Object.is(a, b)).toEqual(true);
        expect(Object.is(null, null)).toEqual(true);
        expect(Object.is(Symbol.for('b'), Symbol.for('b'))).toEqual(true);
        expect(Object.is(NaN, 0 / -0)).toEqual(true);
        expect(Object.is(a, c)).toEqual(false);
        expect(Object.is([], [])).toEqual(false);
        expect(Object.is(Symbol('a'), Symbol('a'))).toEqual(false);
        expect(Object.is(0, -0)).toEqual(false);
      }));
    }));
    describe('.assign(target, ...sources)', (function() {
      var a = null,
          b = null,
          c = null;
      beforeEach((function() {
        a = {a: 97};
        b = {b: 98};
        c = {c: 99};
      }));
      it('should copy properties of sources to target', (function() {
        expect(Object.assign(a, b, c)).toEqual({
          a: 97,
          b: 98,
          c: 99
        });
        expect(a).toEqual({
          a: 97,
          b: 98,
          c: 99
        });
      }));
      it('properties must be own and enumerable', (function() {
        expect(Object.assign({a: 64}, a, b, c)).toEqual({
          a: 97,
          b: 98,
          c: 99
        });
        var b2 = Object.create({d: 100}, {
          b: {value: 100},
          d: {
            value: 100,
            enumerable: true
          }
        });
        expect(Object.assign({a: 64}, a, b2, c)).toEqual({
          a: 97,
          c: 99,
          d: 100
        });
      }));
    }));
    describe('.observe(changesArray) [ES7!]', (function() {
      it('should observing the changes asynchronously', (function(done) {
        var person = {
          alias: "Foo",
          age: 20
        };
        var changes = null;
        Object.observe(person, function(c) {
          changes = c;
        });
        person.alias = "Bar";
        delete person.age;
        person.age = 30;
        setTimeout(function() {
          expect(changes).toEqual([{
            type: 'update',
            object: person,
            name: 'alias',
            oldValue: 'Foo'
          }, {
            type: 'delete',
            object: person,
            name: 'age',
            oldValue: 20
          }, {
            type: 'add',
            object: person,
            name: 'age'
          }]);
          done();
        }, 0);
      }));
    }));
    describe('.setPrototypeOf(o, proto)', (function() {
      it('should set the prototype (get rid of __proto__)', (function() {
        var a = {name: 'Bar'};
        Object.setPrototypeOf(a, {
          name: 'Foo',
          hello: function() {
            return ("Hello, " + this.name + "!");
          }
        });
        expect(Object.keys(a)).toEqual(['name']);
        expect(Object.keys(a.__proto__)).toEqual(['name', 'hello']);
        expect(a.hello()).toEqual('Hello, Bar!');
      }));
    }));
    describe('.getOwnPropertySymbols(o)', (function() {
      it('should return symbol properties of given object', (function() {
        var $__0,
            $__1;
        var a = ($__0 = {}, Object.defineProperty($__0, Symbol.for('foo'), {
          value: 1,
          configurable: true,
          enumerable: true,
          writable: true
        }), $__0);
        Object.setPrototypeOf(a, ($__1 = {}, Object.defineProperty($__1, Symbol.for('bar'), {
          value: 2,
          configurable: true,
          enumerable: true,
          writable: true
        }), $__1));
        expect(Object.getOwnPropertyNames(a)).toEqual([]);
        expect(Object.getOwnPropertySymbols(a)).toEqual([Symbol.for('foo')]);
      }));
    }));
  }));
  return {};
});
//# sourceURL=src/es6/object.js
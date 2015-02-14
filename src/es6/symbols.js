describe("Symbols", () => {

    it(`should be unique (but not private) and immutable
        data type; symbol object is an implicit object wrapper
        for the symbol primitive data type`, () => {
        let s = Symbol("foo");
        expect(s).not.toEqual(Symbol("foo"));
        expect(typeof s).toEqual("symbol");

        let s2 = Symbol.for("foo");
        expect(s).not.toEqual(s2);
        expect(s2).toEqual(Symbol.for("foo"));
        expect(Symbol.keyFor(s2)).toEqual("foo");
    });

    it("should enable access control for object state", () => {

        function MyClass(secretData) {
            let s = Symbol("secretData symbol");
            this[s] = secretData;
        }

        let obj = new MyClass("secret");

        expect(obj["secret"]).toBeUndefined();
        expect(Object.getOwnPropertySymbols(obj)).toEqual(jasmine.any(Array));
        expect(obj[Object.getOwnPropertySymbols(obj)[0]])
            .toEqual("secret");
    });

});

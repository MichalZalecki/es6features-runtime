describe("Enhanced Object Literals", () => {
    it("should be awesome", () => {
        var x = 2;
        function greet(name) {
            return "Hello " + name;
        }
        var obj = {
            // Computed property names
            [x*2]: "Computed Property Name",
            // __proto__
            __proto__: {
                hi: function () { return "Hi!" },
                by: function () { return "By!" }
            },
            // object initializer shorthand (greet: greet)
            greet
            // @TODO making super calls
        };
        expect(obj[4]).toEqual("Computed Property Name");
        expect(obj.hi()).toEqual("Hi!");
        expect(obj.by()).toEqual("By!");
        expect(obj.greet("Bob")).toEqual("Hello Bob");
    });
});

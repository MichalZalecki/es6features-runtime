describe("Enhanced Object Literals", () => {
    it("should be awesome", () => {
        var x = 2;
        function greet(name) {
            return "Hello " + name;
        }
        var obj = {
            // Computed (dynamic) property names
            [x*2]: "Computed Property Name",
            // __proto__
            __proto__: {
                hi: function () { return "Hi!" },
                by: function () { return "By!" }
            },
            // Shorthand for ‘handler: handler’
            greet
        };
        // Computed (dynamic) property names
        expect(obj[4]).toEqual("Computed Property Name");
        expect(obj.hi()).toEqual("Hi!");
        expect(obj.by()).toEqual("By!");
        expect(obj.greet("Bob")).toEqual("Hello Bob");
    });
});

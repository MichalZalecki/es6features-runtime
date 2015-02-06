describe("Arrow Functions", () => {
    it("should be awesome", () => {

        var square = x => x * x;

        var square2 = x => {
            return x * x;
        };

        // use brackets when more than one argument is needed
        var triangleArea = (a, h) => a*h/2;

        var triangleArea2 = (a, b, c) => {
            var p = (a + b + c)/2;
            return Math.sqrt(p*(p-a)*(p-b)*(p-c));
        };

        // immediate return of an object literal must be wrapped in parentheses
        var objectify = x => ({ value: x });

        var person = {
            name: "Bob",
            belongings: ["Car", "PC"],
            getProperties: function () {
                var properties = [];
                this.belongings.forEach(function (thing) {
                    properties.push(this.name + " has " + thing);
                });
                return properties;
            },
            getProperties2: function () {
                var properties = [];
                // arrows share this with surrounding code
                this.belongings.forEach((thing) => {
                    properties.push(this.name + " has " + thing);
                });
                return properties;
            }
        };

        expect(square(3)).toEqual(9);
        expect(square2(4)).toEqual(16);
        expect(triangleArea(4, 6)).toEqual(12);
        expect(triangleArea2(3, 4, 5)).toEqual(6);
        expect(objectify("awesome")).toEqual({value:"awesome"});
        expect(() => person.getProperties())
            .toThrow(new TypeError("Cannot read property 'name' of undefined"));
        expect(person.getProperties2()).toEqual(["Bob has Car", "Bob has PC"]);
    });
});

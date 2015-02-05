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

        expect(square(3)).toEqual(9);
        expect(square2(4)).toEqual(16);
        expect(triangleArea(4, 6)).toEqual(12);
        expect(triangleArea2(3, 4, 5)).toEqual(6);
        expect(objectify("awesome")).toEqual({value:"awesome"});
    });
});

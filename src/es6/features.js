describe('ES6 Features Runtime', () => {
    "use strict";

    describe('Arrows', () => {
        it('arrows', () => {
            var square = (x) => {
                return x * x;
            };

            var square2 = x => x * x;

            var objectify = x => ({ value: x });

            expect(square(5)).toBe(25);
            expect(square2(3)).toBe(9);
            expect(objectify(1)).toEqual({ value: 1 });
        });
    });

});

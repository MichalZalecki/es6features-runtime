describe("Generators", () => {
    it("should make foo yielding", () => {
        function* foo() {
            let i = 0;
            yield ++i;
            yield ++i;
            yield ++i;
        }

        let k = 1;
        for(let i of foo()) {
            expect(i).toEqual(k++);
        }
    });

    it("should iterate fibonacci using yield", () => {
        function fibonacci(i) {
            return {
                [Symbol.iterator]: function*() {
                    let pre = -1, cur = 1;
                    while (!!(i--)) {
                        [pre, cur] = [cur, pre + cur];
                        yield cur;
                    }
                }
            }
        }

        let fib = [];
        for (let n of fibonacci(10)) {
            fib.push(n);
        }
        expect(fib).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it("should handle recursive yielding", () => {
        function* flatten(t, n = 0) {
            if (t[n]) {
                if (Array.isArray(t[n]))
                    yield* flatten(t[n])
                else
                    yield t[n];
                yield* flatten(t, n + 1);
            }
        }

        let nums = [];
        for (let n of flatten([10, 11, 12, [13, 14, [15, 16]], 17])) {
            nums.push(n);
        }
        expect(nums).toEqual([10, 11, 12, 13, 14, 15, 16, 17]);
    });
});

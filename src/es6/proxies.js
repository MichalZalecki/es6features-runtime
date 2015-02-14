describe("Proxies", () => {

    xit("should...", () => {
        var target = {};
        var handler = {
            get: function (receiver, name) {
                return `Hello, ${name}!`;
            }
        };

        var p = new Proxy(target, handler);
        expect(p.world).toEqual('Hello, world!');
    });

});

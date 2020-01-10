describe("Object", function() {
    it("2 object giống nhau", function() {
        const foo = {
            a: 12,
            b: 34
        };

        const bar = {
            a: 12,
            b: 34
        };

        expect(foo).toEqual(bar);
    });

    it("toBeDefined", function() {
        const a = {
            foo: "foo"
        };

        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });

    it("toBeUndefined", function() {
        const a = {
            foo: "foo"
        };

        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
    });

    it("toBeNull", function() {
        const a = null;
        const foo = "foo";

        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });
}); 
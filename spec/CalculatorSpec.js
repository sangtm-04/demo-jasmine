class Calculator {
    constructor() {
        this.add = (a, b) => a + b;
        this.minus = (a, b) => a - b;
        this.multiply = (a, b) => a * b;
        this.divide = (a, b) => a / b;
    }
}

describe("Cộng trừ", function() {
    let cal = new Calculator();

    it("1 + 1 = 2", function() {
        expect(2).toBe(cal.add(1, 1));
    });

    it("2 + 2 = 4", function() {
        expect(4).toBe(cal.add(2, 2));
    });

    it("5 - 3 != 3", function() {
        expect(3).not.toBe(cal.minus(5, 3));
    });
});

describe("Nhân chia", function () {
    let cal = new Calculator();

    it("2 * 5 = 10", function() {
        expect(10).toBe(cal.multiply(2, 5));
    });

    it("6 / 2 = 3", function() {
        expect(3).toBe(cal.divide(6, 2));
    });
});
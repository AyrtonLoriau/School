const { add, multiplyArray, calculateFactorial, } = require('./maths');

describe("Add function", () => {
    it("should add numbres", () => {
        expect(add(5, 11)).toBe(16)
    })
    it('should add negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });
    it('should add a positive and negative number', () => {
        expect(add(2, -3)).toBe(-1);
    });
});

describe("Multiplying an Array of Numbers Function", () => {
    it('should multiply an array of positive numbers', () => {
        const result = multiplyArray([2, 3, 4]);
        expect(result).toBe(24);
    });
});

describe("calculate factorial function", () => {
    it("it should throw an error when a string is used", () => {
        expect(())=> calculateFactorial(FACTORIAL)).toThrow('Input must be a non-negative number')
});
it('should return 1 if n = 0', () => {
    expect(calculateFactorial(0)).toBe(1);
});
it('should return 1 if n = 1', () => {
    expect(calculateFactorial(1)).toBe(1);
});
it('should add a positive and negative number', () => {
    expect(add(2, -3)).toBe(-1);
});
});
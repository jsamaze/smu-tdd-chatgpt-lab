// calculator.test.js - The test file
const { add, subtract, multiply, divide } = require('./calculator');

describe('add function', () => {
    test('should add two numbers together', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
        // Add more test cases if needed
    });
});

describe('subtract function', () => {
    test('should subtract two numbers', () => {
        expect(subtract(3, 1)).toBe(2);
        expect(subtract(-1, -1)).toBe(0);
        expect(subtract(5, 3)).toBe(2);
        // Add more test cases if needed
    });
});

describe('multiply function', () => {
    test('should multiply two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 4)).toBe(-8);
        expect(multiply(0, 5)).toBe(0);
        // Add more test cases if needed
    });
});

describe('divide function', () => {
    test('should divide two numbers', () => {
        expect(divide(6, 2)).toBe(3);
        expect(divide(-8, 4)).toBe(-2);
        expect(divide(10, 5)).toBe(2);
        // Add more test cases if needed
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow('Division by zero');
    });
});

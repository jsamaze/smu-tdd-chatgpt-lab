// fizzbuzz.js - The refactored implementation file
function fizzBuzz(number) {
    switch (true) {
        case number % 3 === 0 && number % 5 === 0:
            return "FizzBuzz";
        case number % 3 === 0:
            return "Fizz";
        case number % 5 === 0:
            return "Buzz";
        default:
            return number;
    }
}

module.exports = fizzBuzz;

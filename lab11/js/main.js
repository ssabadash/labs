function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("Завдання 1 - calculateSum:");
console.log(calculateSum(5));  // 15
console.log(calculateSum(10)); // 55
console.log(calculateSum(1));  // 1

const multiply = function(a, b) {
    return a * b;
};

console.log("Завдання 2 - multiply:");
console.log(multiply(3, 4));  // 12
console.log(multiply(7, 6));  // 42
console.log(multiply(0, 5));  // 0

const power = (a, b) => a ** b;

console.log("Завдання 3 - power:");
console.log(power(2, 3));  // 8
console.log(power(5, 2));  // 25
console.log(power(3, 0));  // 1


function harmonicSeries(n) {
    if (n === 1) return 1;           // базовий випадок
    return 1 / n + harmonicSeries(n - 1); // рекурсивний виклик
}

console.log("Завдання 4 - harmonicSeries:");
console.log(harmonicSeries(1)); // 1
console.log(harmonicSeries(2)); // 1.5
console.log(harmonicSeries(4)); // ~2.083

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Завдання 5 - createMultiplier:");
console.log(double(5));  // 10
console.log(triple(5));  // 15
console.log(double(7));  // 14

function processSet(set, callback) {
    set.forEach(item => callback(item));
}

const mySet = new Set([1, 2, 3, 4, 5]);

console.log("Завдання 6* - processSet:");
processSet(mySet, (item) => console.log(item * 2)); // 2, 4, 6, 8, 10
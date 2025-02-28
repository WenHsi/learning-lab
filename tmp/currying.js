// // currying
// const multiply = (a) => (b) => (c) => a * b * c;
// const multiplyBy5 = multiply(5);

// console.log("multiplyBy5", multiplyBy5(2)(4))

// // Partial Application
// const PMultiply = (a, b, c) => a * b * c;
// const partialMultiplyBy5 = PMultiply.bind(null, 5);
// console.log("partialMultiplyBy5", partialMultiplyBy5(10, 20));

// // Compose

// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive, multiply);

// function compose(...fns) {
//     return function(...arg) {
//         let result = arg;
//         for (const fn of fns) {
//            result = Array.isArray(result)? fn(...result) : fn(result);
//         }
//         return result;
//     }
// }

// function multiplyBy3(n, n2) {
//         return n * n2 * 3;
// }

// function makePositive(n) {
//     return Math.abs(n);
// }

// function multiply(n) {
//     return n * n;
// }


// Compose arrow function version
const flowPositive = (isPipe) => (...fns) => (...arg) => {
    // 檢查是否為 Array of fn || 是否為fn
    if ((Array.isArray(fns) && fns.length === 0 ) || typeof fns[0] !== "function") return null;
    let result = arg;
    for (const fn of isPipe? fns:fns.reverse()) {
        console.log(fn)
        result = Array.isArray(result)? fn(...result): fn (result);
    }
    return result;
}

const compose = flowPositive(false);
const pipe = flowPositive(true);

const multiplyBy3 = (n) => n * 3;
const makePositive = (n) => Math.abs(n);
const multiply = (...n) => n.reduce((current, next) => current * next, 1);

const multiplyBy3AndAbsolute1 = pipe(multiplyBy3, makePositive, multiply)(-5, 2, 7);
const multiplyBy3AndAbsolute2 = compose(multiply, multiplyBy3, makePositive)(-5, 2, 7);

console.log(multiplyBy3AndAbsolute1, multiplyBy3AndAbsolute2); // 900

// Compose function by chatGTP
// const compose = (...fns) => (...args) => 
//     fns.length === 0
//         ? args.length === 1 ? args[0] : args
//         : fns.reduce((currentValue, fn) =>
//             Array.isArray(currentValue) ? fn(...currentValue) : fn(currentValue),
//         args);

// // 測試函數
// const multiplyBy3 = (n, n2) => n * n2 * 3;
// const makePositive = (n) => Math.abs(n);
// const multiply = (n) => n * n;

// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive, multiply);

// console.log(multiplyBy3AndAbsolute(-5, 2)); // 900
// console.log(compose()(-5, 2)); // [-5, 2]（空的 compose 不會做任何處理）
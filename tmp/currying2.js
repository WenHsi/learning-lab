const compose = (f, g) => (data) => g(f(data));

const multiplyBy4 = (n) => n * 4;

const makePositive = (n) => Number(n.toString().replace('-', ""));

const absAndMultiplyBy4 = compose(makePositive, multiplyBy4);

console.log(absAndMultiplyBy4(-50))
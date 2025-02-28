const f1 = (n) => n + 1;
const f2 = (n) => n * n;
const f3 = (n) => n - 100;

const xx = (...fns) => {
  return fns.reduce((pre, curr) => {
    console.log(pre, curr,1); // [Function: f1] [Function: f2]
    // [Function (anonymous)] [Function: f3]
    return function (...arg) {
      console.log(pre, curr,2); // [Function (anonymous)] [Function: f3]
      // [Function: f1] [Function: f2]
      return curr(pre(...arg));
    };
  });
};
console.log(xx(f1, f2, f3)(1));

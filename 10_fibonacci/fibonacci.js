let fibonacciCache = {};

const fibonacci = function(n) {
    // allow string
    n = Number(n);
    if(n < 0) return "OOPS";
    if(n <=1) return n;
    // the cache provides significant speed-up
    if(n in fibonacciCache) return fibonacciCache[n];
    let result = fibonacci(n-1) + fibonacci(n-2);
    fibonacciCache[n] = result;
    return result;
};

// Do not edit below this line
module.exports = fibonacci;

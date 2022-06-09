const sumAll = function(numA, numB) {
    if(numA < 0 
        || numB < 0
        || typeof(numA) != "number" 
        || typeof(numB) != "number")
        return "ERROR";

    const min = Math.min(numA, numB);
    const max = Math.max(numA, numB);

    let sum = 0;
    for(let i=min; i<=max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

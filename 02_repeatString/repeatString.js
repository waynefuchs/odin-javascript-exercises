const repeatString = function(inputString, repeatCount) {
    if(repeatCount < 0) return "ERROR";
    return inputString.repeat(repeatCount);
};

// Do not edit below this line
module.exports = repeatString;

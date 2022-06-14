const palindromes = function (input) {
    let zeroPunctuation = input.replace(/[^a-z]/gi, '').toLowerCase();
    let zeroPunctuationReverse = zeroPunctuation.split("").reverse().join("");
    return zeroPunctuation === zeroPunctuationReverse;
};

// Do not edit below this line
module.exports = palindromes;

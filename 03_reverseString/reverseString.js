const reverseString = function(string) {
    characterNumberString = string.length;
    let array = [];
    for (let i = 0; i < (characterNumberString + 1); i++) {
        array.push(string[characterNumberString-i]);
    }
    reversedArray = array.join("");
    return reversedArray;
};

// Do not edit below this line
module.exports = reverseString;

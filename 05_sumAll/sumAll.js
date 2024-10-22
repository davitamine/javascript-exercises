const sumAll = function(int1, int2) {
    let sum = int1 + int2 
    if (int1 < int2) {
        for (i = (int1 + 1); i < int2; i++) {
            sum += i 
        }
    }
    else {
        for (i = (int2 + 1); i < int1; i++) {
            sum += i 
        }
    }
    
    return sum
};

// Do not edit below this line
module.exports = sumAll;

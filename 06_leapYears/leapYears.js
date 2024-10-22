const leapYears = function(year) {
    const quartile = year / 4;
    const hundred = year / 100;
    const fourHundred = year / 400;
    if (Number.isInteger(quartile) && (!Number.isInteger(hundred) || Number.isInteger(fourHundred))) {
        return true;
    }
    
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

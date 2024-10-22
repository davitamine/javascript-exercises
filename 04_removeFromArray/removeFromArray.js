const removeFromArray = function(array, ...args) {
    let len = args.length;
    for (let i = 0; i < len; i++) {
        let index = array.indexOf(args[i]);
        remainingValues = array.splice(index, 1);
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;


exports.min = function min (array = 0) {
    if (array.length === 0 || array === 0) {
        return 0; 
    }
    let min = array[0];
    array.map((elem) => {
        if (elem < min) {
            min = elem;
        }
    })
    return min;
}

exports.max = function max (array = 0) {
    if (array.length === 0 || array === 0) {
        return 0; 
    }
    let max = array[0];
    array.map((elem) => {
        if (elem > max) {
            max = elem;
        }
    })
    return max;
}

exports.avg = function avg (array = 0) {
    if (array.length === 0 || array === 0) {
        return 0; 
    }
    return array.reduce((acc, elem) => acc += elem, 0) / array.length;
}

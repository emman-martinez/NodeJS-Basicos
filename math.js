'use strict'

var add = (x1, x2) => {
    return x1 + x2;
};

function substract(x1, x2) {
    return x1 - x2;
}

var multiply = (x1, x2) => {
    return x1 * x2;
};

function divide(x1, x2) {

    if (x2 == 0) {
        console.log('No se puede dividir entre 0');
    } else {
        return x1 / x2;
    }

}

module.exports = {
    add,
    substract,
    multiply,
    divide
};
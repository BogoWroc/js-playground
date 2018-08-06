'use strict';

const calculator = (function () {
    let self = this;

    function add(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    return {
        add: add,
        sub: sub
    }
})();


module.exports = calculator;
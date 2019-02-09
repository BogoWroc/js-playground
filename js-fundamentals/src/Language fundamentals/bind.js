let o = {
    carId: 88,
    getId: function () {
        return this.carId;
    },
};

let car = {
    carId: 1
};

// make a copy of getId method and assign to car object
let fun = o.getId.bind(car);

console.log(fun());
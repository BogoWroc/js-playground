let o = {
    carId: 88,
    getId: function () {
        return this.carId;
    },
    getText: function(prefix){
        return `${prefix} ${this.carId}`
    }
};

console.log(o.getId());


let car = {
    carId: 1
};

console.log(o.getId.call(car));
console.log(o.getText.apply(car, ['Car id is']));
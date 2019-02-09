let carIds = [1,2,5]

let car1, remainingCars;
[car1,...remainingCars] = carIds;

console.log(car1,remainingCars);
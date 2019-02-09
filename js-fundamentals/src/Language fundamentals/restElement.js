
//Rest element must be the last argument in function !!!
//Rest element: ...argument
function sendCars(...allCarsIds) {
    allCarsIds.forEach(id => console.log(id));
}


sendCars(1,2,3,4);

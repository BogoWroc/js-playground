function printName({name}) {
    console.log(name);
}

let person = {
    name: 'Christina',
    age: 25
};

let {name} = person;

console.log(name);

printName(person);

let {name: firstName, age: yearsOld} = person;
console.log(firstName);
console.log(yearsOld);

let geolocation = {"location": {"lat": 51.0, "lng": -0.1}, "accuracy": 1200.4};
let {location: {lat, lng}, accuracy} = geolocation;
console.log(lat); // 51.0
console.log(lng); // -0.1
console.log(accuracy); // 1200.4
//console.log(location); // undefined


let coords = [51.0, -0.1];
let [lat1, lng1] = coords;
console.log(lat1);
console.log(lng1);
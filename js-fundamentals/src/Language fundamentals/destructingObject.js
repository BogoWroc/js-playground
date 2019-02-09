let car = {
    id: 500,
    name: 'Ferrari'
};

let id, name;

({id, name} = car);

console.log(id, name);
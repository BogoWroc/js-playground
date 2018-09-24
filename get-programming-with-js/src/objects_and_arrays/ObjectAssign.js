let target = [];
let source = ['a', 'b', 'c'];
Object.assign(target, source);

console.log(target);


let Person = {
  sayHello: () => console.log("Hi!")
};

Object.assign(Person, {myNameIs: () => console.log("Bob")});

Person.sayHello();
Person.myNameIs();

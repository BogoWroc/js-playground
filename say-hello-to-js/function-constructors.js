"use strict"

function Person(name){
    this.name = name;
}

Person.prototype.sayMyName = function () {
    console.log("My name is "+this.name);
}

var p1 = new Person("Jan", 32);

p1.sayMyName();
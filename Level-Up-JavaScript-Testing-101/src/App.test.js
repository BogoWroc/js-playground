import {hello} from './App';

console.log(hello());

var arr = {
    x:1,
    get s() { return "Bla" }
};

console.log( "x" in arr);
console.log(arr.s);

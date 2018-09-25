import def from './DefaultExport';

import {otherFunction, someFunction, superFunction} from './DefaultExport'

import {add, concat} from "./extra";

def();

console.log(add(1,2,3));
console.log(concat(['ala','ma','kota']));

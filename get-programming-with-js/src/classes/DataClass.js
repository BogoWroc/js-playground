export default class DataClass {
    url = '/data/resources';
    records = [];

    static domain = 'https://example.com';

    static url(path) {
        return `${this.domain}${path}`
    }

    constructor() {
        console.log("DataClass init");
        this.sayHello();
        this.hello();
    }

    sayHello = () => console.log("Hello!");

    hello() {
        console.log("Hello my friend!");
    }
}

const data = new DataClass();
data.records.push("b");

console.log(data.records);
const data2 = new DataClass();
console.log(data2.records);

DataClass.url("test");
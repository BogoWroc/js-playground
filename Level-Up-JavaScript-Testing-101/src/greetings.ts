interface Greetings {
    firstName: string;
    lastName: string;
}

function greeter(person: Greetings) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user));
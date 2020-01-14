const sayHello1 = () => console.log('Hi Ala');
const sayHello2 = (prefix, name) => console.log(`${prefix} ${name}`);
const sayHello3 = (name = 'Kasia') => `Hi ${name}`;

sayHello1();
sayHello2("HI", "Bog");
console.log(sayHello3('Ola'));
console.log(sayHello3());

function displayInformation() {
    console.log("There is no input values!")
}

function checkInput(callback, ...inputs) {
    if (inputs.length === 0) {
        callback();
    }
}

checkInput(displayInformation);

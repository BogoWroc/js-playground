let cart = ['apple', 'plum'];
let interpolated = `You have ${cart.length} items in your cart`;

console.log(interpolated);

let multiline = `line one
                 lines two`;

console.log(multiline);

function fa(icon) {
    return `fa-${icon} fa`;
}

console.log(fa('check-square'));

let fruit = 'banana';
let color = 'yellow';
let phrase = `the ${`big ${color}`} ${fruit}`;
console.log(phrase);
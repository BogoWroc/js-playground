function* myGeneratorFunction() {
    console.log('Started');
    let receivedA = yield 'a';

    console.log('ReceivedA ' + receivedA);

    let receivedB = yield 'b';
    console.log('ReceivedB ' + receivedB);
}

const myGenerator = myGeneratorFunction();
let gotA = myGenerator.next(0);
console.log("GotA " + gotA.value);

let gotB = myGenerator.next(1);
console.log("GotB " + gotB.value);

let gotC = myGenerator.next(2);
console.log("GotC " + gotC.value);


let result = 0;
let logEntries = []

function add(n1, n2) {
    return n1 + n2;
}

function sub(n1,n2){
    return n1 - n2;
}

function mul(n1,n2){
    return n1 * n2;
}

function div(n1, n2){
    return n1 / n2
}

function getUserInputNumber() {
    return parseInt(userInput.value);
}

addBtn.addEventListener('click', () => {
    const n1 = result;
    const n2 = getUserInputNumber();
    result = add(n1, n2);
    outputResult(result, `${n1} + ${n2} = ${result}`)

    entry = {
        operation: 'ADD',
        n1: n1,
        n2: n2,
        result: result
    };
    logEntries.push(entry);
    console.log(logEntries);
});

subtractBtn.addEventListener('click', () => {
    const n1 = result;
    const n2 = getUserInputNumber();
    result = sub(n1, n2);
    outputResult(result, `${n1} - ${n2} = ${result}`)
});

multiplyBtn.addEventListener('click', () => {
    const n1 = result;
    const n2 = getUserInputNumber();
    result = mul(n1, n2);
    outputResult(result, `${n1} * ${n2} = ${result}`)
});

divideBtn.addEventListener('click', () => {
    const n1 = result;
    const n2 = getUserInputNumber();
    result = div(n1, n2);
    outputResult(result, `${n1} / ${n2} = ${result}`)
});

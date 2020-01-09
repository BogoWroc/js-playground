let result = 0;

function add(n1, n2) {
    return n1 + n2;
}

addBtn.addEventListener('click', () => {
    result = add(result, parseInt(userInput.value));
    outputResult(result, '')
});

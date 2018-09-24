function blockScope() {
    let text = 'Some text';
    console.log(text);
}

blockScope();

// error should be reported because text variable is out of scope
console.log(text);

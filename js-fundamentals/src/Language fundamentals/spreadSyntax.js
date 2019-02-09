function displayData(a, b, c){
    console.log(a,b,c);
}

displayData(...[1,2,3]);
displayData(...'abc');
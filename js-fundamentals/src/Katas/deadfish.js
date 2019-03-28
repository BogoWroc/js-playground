
function parse( data )
{
    let value = 0;
    let retVal = [];
    for (const e of data){
        switch (e) {
            case 'i': value++; break;
            case 's': value = Math.pow(value,2); break;
            case 'd': value--; break;
            case 'o': retVal.push(value); break;
            default: console.log(e); break;
        }
    }

    return retVal;
}

console.log(parse("iiisdoso")); // [ 8, 64 ]
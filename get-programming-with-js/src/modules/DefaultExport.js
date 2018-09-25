export default function moduleCanHasOnlyOneDefaultExport(){
    console.log('moduleCanHasOnlyOneDefaultExport');
}

export function someFunction() {

}


function otherFunction() {
}

function fun(){

}

export {fun as superFunction, otherFunction}

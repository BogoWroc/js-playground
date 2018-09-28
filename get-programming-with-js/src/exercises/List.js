export function arrayToList(arr) {
    if (arr.length === 0) {
        return {};
    }
    const converted = convertToStruct(arr);
    return createStructChain(converted);
}

export function listToArray(listOfStruct) {
    if (Object.keys(listOfStruct).length === 0) {
        return [];
    }

    const arr = Array();
    let head = listOfStruct;
    do {
        arr.push(head.value);
        head = head.rest;
    } while (head !== null);

    return arr;
}

function convertToStruct(arr) {
    const converted = arr.map((a) => (
            {
                value: a,
                rest: null
            }
        )
    );
    return converted;
}

function createStructChain(converted) {
    const head = converted[0];
    let node = head;
    for (let i = 1; i < converted.length; i++) {
        node.rest = converted[i];
        node = converted[i];
    }
    return head;
}

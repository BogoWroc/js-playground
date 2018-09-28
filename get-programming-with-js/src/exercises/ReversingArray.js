export function reverseArray(arr) {
    const reversedArr = Array();

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}

export function reverseArrayInPlace(arr) {
    const revertIndex = calculateRevertIndex(arr);

    for (let i = revertIndex.midPoint, position = revertIndex.position; i < arr.length; i++, position--) {
        const positionValue = arr[position];
        arr[position] = arr[i];
        arr[i] = positionValue;
    }

    return arr;
}

function calculateRevertIndex(arr) {
    const midPoint = ~~(arr.length / 2); //round down
    let position;

    if (arr.length % 2 === 0) {
        position = midPoint - 1;
    } else {
        position = midPoint
    }
    
    return {
        position: position,
        midPoint: midPoint
    }
}

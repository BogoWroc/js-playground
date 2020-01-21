function findMax(...arr) {
    let max = 0;
    for (const e of arr) {
        if (e > max) {
            max = e;
        }
    }

    return max
}

function findMinMax(...arr) {
    let min = 0;
    let max = 0;
    for (const e of arr) {
        if (e > max) {
            max = e;
        }

        if (e < min){
            min = e;
        }
    }

    return Array.of(min,max);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter((v, i, a) => v > 5));
console.log(arr.map((value, index) => ({"num": value, "index": index})));
console.log(arr.reduce((previousValue, currentValue) => currentValue * previousValue, 1));

console.log(findMax(...arr));
const [min,max] = findMinMax(...arr);
console.log(`min=${min}, max=${max}`);

const set = new Set([]);
set.add(1);
set.add(1);
set.add(2);

const listWithNoRepeatedValues = Array.from(set);
listWithNoRepeatedValues.forEach(value => console.log(value));

const copy = arr.slice();
// remove first element
arr.splice(0,1);
console.log(arr);

// remove second element
copy.splice(1,1);
console.log(copy);




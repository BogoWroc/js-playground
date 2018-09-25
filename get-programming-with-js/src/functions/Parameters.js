function range(min = 0, max) {
    console.log(`Min is ${min}`);
    console.log(`Max is ${max}`);
}

function rangeWithDefaultValue(max, min = 0) {
    console.log(`Min is ${min}`);
    console.log(`Max is ${max}`);
}

range(10);
range(5, 10);

rangeWithDefaultValue(10);
rangeWithDefaultValue(10, 5);


function gatheringArgumentsIntoArrayUsingArrayFrom() {
    const args = Array.from(arguments);
    console.log(`Args array has length: ${args.length}`);
}

gatheringArgumentsIntoArrayUsingArrayFrom();
gatheringArgumentsIntoArrayUsingArrayFrom(1, 2);
gatheringArgumentsIntoArrayUsingArrayFrom(1, 2, 3);

function gatheringArgumentsIntoArrayUsingRest(...args) {
    console.log(`Args array has length: ${args.length}`);
}

gatheringArgumentsIntoArrayUsingRest();
gatheringArgumentsIntoArrayUsingRest(1, 2);
gatheringArgumentsIntoArrayUsingRest(1, 2, 3);

function family(spouse, ...kids) {
    console.log(`You are married to ${spouse} with ${kids.length} kids`);
}

family('Christina', 'Talan', 'Jonathan');
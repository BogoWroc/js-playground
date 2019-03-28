function asFlat(k, v, flatten) {

    if (v == null || typeof v !== "object" || Array.isArray(v)) {
        flatten[k] = v;
    } else {

        Object.entries(v).forEach(entry => {
            let key = entry[0];
            let value = entry[1];
            const formattedKey = `${k}/${key}`;
            asFlat(formattedKey, value, flatten);
        });
    }

}

function convertToFlatObject(data) {
    const flatten = {};


    Object.entries(data).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        asFlat(key, value, flatten)
    });
    return flatten;
}




const data = {
    a: {
        b: true,
        c: 14.356,
        d: null,
        e: {f: () => console.log("bla")},
        g: [1, 2, 3]
    }
};


console.log(convertToFlatObject(data));


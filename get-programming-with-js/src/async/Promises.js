import axios from 'axios';

const axiosPromise = axios.get('https://api.github.com/users/jisaacks/orgs');

axiosPromise.then(resp => {

    const orgs = resp.data;    // do something with array of orgs
    console.log(orgs);
});

// ------------------------------------------------------------------------

const later = new Promise((resolve, reject) => {
    // Do something asynchronously
    resolve('alligator');
});

later.then(response => {
    console.log(response);
});

// ------------------------------------------------------------------------

function fetchImage(src) {
    return new Promise((res, rej) => {
        const img = new Image();
        img.onload = res;
        img.onerror = rej;
        img.src = src;
    });
}

fetchImage('https://www.fillmurray.com/200/300').then(() => console.log('image loaded'), () => console.log('image failed'));

// -------------------------------------------------------------------------

function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

wait(5000).then(() => {
    // 5 seconds later...
});

// ---------------------------------------------------------------------------
Promise.resolve().then(() => {
    throw "My Error";
}).catch(err => console.log('caught:', err));
import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://my-new-burger.firebaseio.com/',

    }
);

export default instance;
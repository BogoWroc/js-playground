import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 89d653930000345dfa703b456c465803f8ea9b3eca8fc4570695cc2829ba9575'
    }
});
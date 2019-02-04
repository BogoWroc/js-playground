import axios from 'axios';

// only to public data
const PUBLIC_KEY = 'AIzaSyDxu1VGktpSAdwuboRMoZWbSQRYzppkPvM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: PUBLIC_KEY
    }
});
import axios from "axios";

const redditAPI = axios.create({
    baseURL: 'https://www.reddit.com',
    timeout: 5000,
    headers: {
        'User-Agent': 'Redditiana/1.0',
    },
});

export default redditAPI;
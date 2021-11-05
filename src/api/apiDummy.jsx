import axios from 'axios';

export default axios.create({
    baseURL: `https://dummyapi.io/data/v1/`,
    headers: {
        "app-id": "6182b1ac4c1eecc5524e018f"
    }
});
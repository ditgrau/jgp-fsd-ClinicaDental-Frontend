import axios from 'axios';

const ENDPOINT = 'http://localhost:3000';

export const login = async (credentials) => {
    return await axios.post(`${ENDPOINT}/login`, credentials)
}
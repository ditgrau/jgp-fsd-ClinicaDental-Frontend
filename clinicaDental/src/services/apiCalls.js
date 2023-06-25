import axios from 'axios';

const ENDPOINT = 'http://localhost:3000';

export const login = async (credentials) => {
    return await axios.post(`${ENDPOINT}/login`, credentials)
}

export const signup = async (dataUser) => {
    return await axios.post(`${ENDPOINT}/signup`, dataUser)
}
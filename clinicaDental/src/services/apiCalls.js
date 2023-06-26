import axios from 'axios';

const ENDPOINT = 'http://localhost:3000';

export const loginUser = async (credentials) => {
    let res = await axios.post(`${ENDPOINT}/login`, credentials)
    return res.data
}

export const signup = async (dataUser) => {
    return await axios.post(`${ENDPOINT}/signup`, dataUser)
}

export const getAllTreatments = async () => {
    return await axios.get(`${ENDPOINT}/treat/getAll`)
}


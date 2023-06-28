import axios from 'axios';

const ENDPOINT = 'http://localhost:3000';

export const loginUser = async (credentials) => {
    let res = await axios.post(`${ENDPOINT}/login`, credentials)
    return res.data
}

export const signup = async (dataUser) => {
    return await axios.post(`${ENDPOINT}/signup`, dataUser)
}

// export const getAllTreatments = async () => {
//     let res = await axios.get(`${ENDPOINT}/treat/getAll`)
//     return res.data.allTreatments
// }

export const getMyProfile = async (token) => {
    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/user/myProfile`, config)
    return res.data.myProfile
}

export const updateProfile = async (body, token) => {
    let config = {
        headers: 
        {
            Authorization: `Bearer ${token}`
        }
    }
    let res = await axios.put(`${ENDPOINT}/user/updateProfile`, body, config)
    console.log (body)
    return res
}

export const updateDentistProfile = async (body, token) => {
    let config = {
        headers: 
        {
            Authorization: `Bearer ${token}`
        }
    }
    console.log (body)
    let res = await axios.put(`${ENDPOINT}/dentist/updateDentistProfile`, body, config)
    return res
}
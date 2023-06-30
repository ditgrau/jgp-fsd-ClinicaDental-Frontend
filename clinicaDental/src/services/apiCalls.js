import axios from 'axios';

const ENDPOINT = 'http://localhost:3000';


//////////////////// AUTH ////////////////////

export const loginUser = async (credentials) => {
    let res = await axios.post(`${ENDPOINT}/login`, credentials)
    return res.data
}

export const signup = async (dataUser) => {
    return await axios.post(`${ENDPOINT}/signup`, dataUser)
}

//////////////////// USER ////////////////////

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

export const getPatients = async (token) => {
    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/user/getAllPatients`, config)
    return res.data.allClients
}

export const getUsers = async (token) => {
    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/user/getAll`, config)
    return res.data.allUsers
}


//////////////////// DENTIST ////////////////////

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

//////////////////// APPOINTMENTS ////////////////////

export const getMyAppt = async (token) => {
    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/appoint/myAppointments`, config)
    return res.data.myAppointments
}

export const getMyApptDentist = async (token) => {
    let config = {
        headers: 
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/appoint/appointmentsDentist`, config)
    return res.data.myAppointments
}

export const getAllAppt = async (token) => {
    let config = {
        headers: 
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/appoint/getAll`, config)
    return res.data.allAppt
}


//////////////////// TREATMENTS ////////////////////

export const getAllTreatments = async () => {
    let res = await axios.get(`${ENDPOINT}/treat/getAll`)
    return res.data.allTreatments
}

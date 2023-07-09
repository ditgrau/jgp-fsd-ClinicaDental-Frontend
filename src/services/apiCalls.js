import axios from 'axios';

const ENDPOINT = 'http://localhost:3000';


//////////////////// AUTH ////////////////////

export const loginUser = async (credentials) => {
    let res = await axios.post(`${ENDPOINT}/login`, credentials)
    return res.data
}

export const signup = async (dataUser) => {
    let res = await axios.post(`${ENDPOINT}/signup`, dataUser)
    return res
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
    console.log(body)
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


export const getByRole = async (roleUser, token) => {

    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/user/getByRole/${roleUser}`, config)
    return res.data.usersByRole
}

export const getById = async (idUser, token) => {

    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/user/getById/${idUser}`, config)
    return res.data.getById
}


//////////////////// DENTIST ////////////////////

export const updateDentistProfile = async (body, token) => {
    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(body)
    let res = await axios.put(`${ENDPOINT}/dentist/updateDentistProfile`, body, config)
    return res
}

export const getAllDentist = async () => {
    let res = await axios.get(`${ENDPOINT}/dentist/getAllDentist`)
    return res.data.allDentist
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

export const newAppt = async (body, token) => {
    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.post(`${ENDPOINT}/appoint/new`, body, config)
    return res.data
}

export const deleteAppointment = async (id, token) => {
    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    return await axios.delete(`${ENDPOINT}/appoint/delete/${id}`, config)
}

export const updateAppointment = async (id, body, token) => {
    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    return await axios.put(`${ENDPOINT}/appoint/update/${id}`, body, config)
}

export const getApptById = async (idAppt, token) => {

    let config = {
        headers:
        {
            Authorization: `Bearer ${token}`,
        }
    }
    let res = await axios.get(`${ENDPOINT}/appoint/appointmentById/${idAppt}`, config)
    return res.data.apptById
}

//////////////////// TREATMENTS ////////////////////

export const getAllTreatments = async () => {
    let res = await axios.get(`${ENDPOINT}/treat/getAll`)
    return res.data.allTreatments
}

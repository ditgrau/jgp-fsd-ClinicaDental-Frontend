import React from "react";
import { Route , Routes , Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Dentists } from '../Dentists/Dentists'
import { Signup } from '../Signup/Signup'
import { Specialties } from '../Specialties/Specialties'
import { Appointments } from '../Appointments/Appointments'
import { Users } from '../Users/Users'
import { Treatments } from '../Treatments/Treatments'
import { Profile } from '../Profile/Profile'
import { Patients } from "../Patients/Patients";
import { AllAppointments } from "../AllAppointments/AllAppointments";
import { NewAppt } from "../NewAppt/NewAppt";
import { DetailUser } from "../DetailUser/DetailUser"
import { DetailAppt } from "../DetailAppt/DetailAppt";
import './Body.css'


export function Body() {

    return (
        <Routes className='bodyRoutes'>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dentists' element={<Dentists />} />
            <Route path='/specialties' element={<Specialties />} />
            <Route path='/treatments' element={<Treatments />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/appointments' element={<Appointments />} />
            <Route path='/allAppointments' element={<AllAppointments />} />
            <Route path='/users' element={<Users />} />
            <Route path='/patients' element={<Patients />} />
            <Route path='/newAppt' element={<NewAppt />} />
            <Route path='/detail' element={<DetailUser />} />
            <Route path='/detailappt' element={<DetailAppt />} />
        </Routes>
    )
}
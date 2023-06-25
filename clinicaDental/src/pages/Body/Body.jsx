import React from "react";
import { Route , Routes , Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Signin } from '../Signin/Signin'
import { Dentists } from '../Dentists/Dentists'
import { Specialties } from '../Specialties/Specialties'
import { Treatments } from '../Treatments/Treatments'
import { Profile } from '../Profile/Profile'
import './Body.css'

export function Body() {

    return (
        <Routes className='bodyRoutes'>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/dentists' element={<Dentists />} />
            <Route path='/specialties' element={<Specialties />} />
            <Route path='/treatments' element={<Treatments />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}
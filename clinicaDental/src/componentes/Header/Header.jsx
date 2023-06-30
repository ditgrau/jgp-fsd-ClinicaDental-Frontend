import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Logo } from '../Logo/Logo';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/userSlice';
import { IconNav } from '../IconNav/IconNav'
import { getMyProfile } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import './Header.css'

import loginIcon from '../../assets/door-enter.svg'
import signinIcon from '../../assets/user-plus.svg'
import logoutIcon from '../../assets/door-exit.svg'
import userIcon from '../../assets/user-circle.svg'

///////////////////////////////////////////////

export function Header() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const { token} = useAuth();

    const isLogged = (!!token)
    

    useEffect(() => {
        if (!token) {
            setName ('');
        } else {
            getMyProfile(token).then((res) => {
                setName(`${(res.name).toUpperCase()}`)
            })
        }
    }, [token])
 
    console.log (name)
    return (
        <Navbar className='navbarMain' style={{ justifyContent: 'space-between' }}>
            <Logo />
            {
                isLogged
                    ? <nav className='nav-icons'>
                        <span className='nav-userName'>{name}</span>
                        <IconNav link='/profile' className='whiteStyle' icon={userIcon} text='Mi Perfil'/>
                        <IconNav link='/' className='whiteStyle' icon={logoutIcon}  text='Logout' clickFunction={() => dispatch(logout())}/>
                    </nav>
                    : <nav className='nav-icons'>
                        <IconNav link='/signup' className='whiteStyle' icon={signinIcon} text='Sing Up'/>
                        <IconNav link='/login' className='whiteStyle' icon={loginIcon} text='Login'/>
                    </nav>
            }
        </Navbar >
    )
}
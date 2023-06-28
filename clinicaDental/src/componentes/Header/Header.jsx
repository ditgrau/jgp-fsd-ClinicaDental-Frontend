import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Logo } from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userData } from '../../Redux/userSlice';
import { IconNav } from '../IconNav/IconNav'
import { getMyProfile } from '../../services/apiCalls';
import loginIcon from '../../assets/door-enter.svg'
import signinIcon from '../../assets/user-plus.svg'
import logoutIcon from '../../assets/door-exit.svg'
import userIcon from '../../assets/user-circle.svg'

import './Header.css'

///////////////////////////////////////////////

export function Header() {

    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const dataSlice = useSelector(userData)

    const isLogged = (!!dataSlice.credentials.token)
    const token = dataSlice?.credentials?.token;

    useEffect(() => {
        getMyProfile(token).then((res) => {
            setUser(res)
        })
    }, [])

    console.log(user)

    return (
        <Navbar className='navbarMain' style={{ justifyContent: 'space-between' }}>
            <Logo />
            {
                isLogged
                    ? <nav className='nav-icons'>
                        <span className='nav-userName'>{user.name} {user.surname}</span>
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
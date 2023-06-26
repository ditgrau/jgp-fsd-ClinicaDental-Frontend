import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { useDispatch , useSelector } from 'react-redux';
import { logout , userData } from '../../Redux/userSlice';

import loginIcon from '../../assets/door-enter.svg'
import signinIcon from '../../assets/user-plus.svg'
import logoutIcon from '../../assets/door-exit.svg'

import './Header.css'

///////////////////////////////////////////////

export function Header() {

    const dispatch = useDispatch();
    const dataSlice = useSelector(userData)

    const isLogged = (!!dataSlice.credentials.token)

    return (
        <Navbar className='navbarMain' style={{ justifyContent: 'space-between' }}>
            <Logo />
            {
                isLogged
                    ? <nav className='nav-icons'>
                        <Link to='/login'>
                            <img src={logoutIcon} alt='login' className='iconNavbar' onClick={() => dispatch(logout())}></img>
                        </Link>
                    </nav>
                    : <nav className='nav-icons'>
                        <Link to='/signup'>
                            <img src={signinIcon} alt='signin' className='iconNavbar'></img>
                        </Link>

                        <Link to='/login'>
                            <img src={loginIcon} alt='login' className='iconNavbar'></img>
                        </Link>
                    </nav>
            }

        </Navbar >
    )
}
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

// import dentalLogo from '../../assets/dental.svg'
import loginIcon from '../../assets/door-enter.svg'
import signinIcon from '../../assets/user-plus.svg'
import logoutIcon from '../../assets/door-exit.svg'

import './Header.css'

///////////////////////////////////////////////

export function Header() {

    const isLogged = false //

    return (
        <Navbar className='navbarMain' style={{ justifyContent: 'space-between' }}>
            <Logo />
            {
                isLogged
                    ? <nav className='nav-icons'>
                        <Link to='/login'>
                            <img src={logoutIcon} alt='login' className='iconNavbar'></img>
                        </Link>
                    </nav>
                    : <nav className='nav-icons'>
                        <Link to='/signin'>
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
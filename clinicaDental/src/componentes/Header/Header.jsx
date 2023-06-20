import React from 'react';
import { Navbar } from 'react-bootstrap';
import dentalLogo from '../../assets/dental.svg'
import loginIcon from '../../assets/door-enter.svg'
import signinIcon from '../../assets/user-plus.svg'
import { Link } from 'react-router-dom';
import './Header.css'

export function Header() {

    return (
        <Navbar className='navbarMain' style={{ justifyContent: 'space-between' }}>
            <Link to='/'>
                <img src={dentalLogo} alt='logo' className='logoNavbar'></img>
            </Link>
            <nav className='nav-icons'>
                <Link to='/signin'>
                    <img src={signinIcon} alt='signin' className='iconNavbar'></img>
                </Link>

                <Link to='/login'>
                    <img src={loginIcon} alt='login' className='iconNavbar'></img>
                </Link>
            </nav>
        </Navbar >
    )
}
import React from 'react';
import { Navbar } from 'react-bootstrap';
import dentalLogo from '../assets/dental.svg'
import loginIcon from '../assets/door-enter.svg'
import signinIcon from '../assets/user-plus.svg'
import './Header.css'

export function Header() {

    return (
        <Navbar className='navbarMain' style={{ justifyContent: 'space-between' }}>
            <img src={dentalLogo} alt='logo' className='logoNavbar'></img>
            <section className='section-icons'>
                <img src={signinIcon} alt='signin' className='iconNavbar'></img>
                <img src={loginIcon} alt='login' className='iconNavbar'></img>
            </section>
        </Navbar>
    )
}
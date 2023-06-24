import React from 'react';
import { Link } from 'react-router-dom';
import dentalLogo from '../../assets/dental.svg'
import './Logo.css';

///////////////////////////////////////////////

export function Logo() {

    return (
        <Link to='/' className='logoNavbar'>
            <img src={dentalLogo} alt='logo' className='logoImage'></img>
            <section className='logotext'>
                <span className='logoTitle'>TEETH</span>
                <span className='logoSubtitle'>Clinica Dental</span>
            </section>
        </Link>
    )
}
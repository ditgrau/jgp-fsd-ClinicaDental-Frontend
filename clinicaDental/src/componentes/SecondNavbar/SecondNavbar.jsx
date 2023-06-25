import React from "react";
import { Container, Navbar } from 'react-bootstrap'
import dentistsIcon from '../../assets/users.svg'
import specialtiesIcon from '../../assets/file-certificate.svg'
import tretamentsIcon from '../../assets/heart-handshake.svg'
import { Link } from 'react-router-dom';
import './SecondNavbar.css'

export function SecondNavbar() {

    return (
        <Navbar className="secondNavbar">
            <Container>
                <Link to='/dentists' className='iconSecond'>
                    <img src={dentistsIcon} alt='dentists' className='sn-iconImg'></img>
                    <span className='sn-iconText'>Dentistas</span>
                </Link>
                <Link to='/specialties' className='iconSecond'>
                    <img src={specialtiesIcon} alt='specialties' className='sn-iconImg'></img>
                    <span className='sn-iconText'>Especialidades</span>
                </Link>
                <Link to='/treatments' className='iconSecond'>
                    <img src={tretamentsIcon} alt='treatments' className='sn-iconImg'></img>
                    <span className='sn-iconText'>Tratamientos</span>
                </Link>
            </Container>
        </Navbar >

    )
}
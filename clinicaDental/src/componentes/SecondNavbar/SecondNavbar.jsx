import React from "react";
import { Container, Navbar } from 'react-bootstrap'
import dentistsIcon from '../../assets/users.svg'
import specialtiesIcon from '../../assets/file-certificate.svg'
import tretamentsIcon from '../../assets/heart-handshake.svg'
import { Link } from 'react-router-dom';
import './SecondNavbar.css'

export function SecondNavbar() {

    return (
        <Navbar>
            <Container className=''>
                <Link to='/dentists' className='iconSecond'>
                    <img src={dentistsIcon} alt='dentists' ></img>
                    <span>Dentistas</span>
                </Link>
                <Link to='/specialties'  className='iconSecond'>
                    <img src={specialtiesIcon} alt='specialties'></img>
                    <span>Especialidades</span>
                </Link>
                <Link to='/treatments'  className='iconSecond'>
                    <img src={tretamentsIcon} alt='treatments'></img>
                    <span>Tratamientos</span>
                </Link>
            </Container>
        </Navbar >

    )
}
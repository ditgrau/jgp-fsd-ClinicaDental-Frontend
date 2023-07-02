import React from "react";
import { Container, Navbar } from 'react-bootstrap'
import { IconNav } from '../IconNav/IconNav'
import { useAuth } from "../../services/dataFromSlice";
import './SecondNavbar.css'

import dentistsIcon from '../../assets/users.svg'
import specialtiesIcon from '../../assets/file-certificate.svg'
import tretamentsIcon from '../../assets/heart-handshake.svg'
import usersIcon from '../../assets/users-group.svg'
import calendarIcon from '../../assets/calendar-white.svg'


export function SecondNavbar() {
    const { role } = useAuth();

    return (
        <Navbar className="secondNavbar">
            <Container style={{ justifyContent: 'space-evenly' }}>
                <IconNav link='/dentists' className='darkStyle' icon={dentistsIcon} text='Dentistas' />
                <IconNav link='/specialties' className='darkStyle' icon={specialtiesIcon} text='Especialidades' />
                <IconNav link='/treatments' className='darkStyle' icon={tretamentsIcon} text='Tratamientos' />
                {role === 1 &&
                    <IconNav link='/users' className='darkStyle' icon={usersIcon} text='Usuarios' />
                }
                {role === 2 &&
                    <>
                        <IconNav link='/patients' className='darkStyle' icon={usersIcon} text='Pacientes' />
                        <IconNav link='/appointments' className='darkStyle' icon={calendarIcon} text='Mis citas' />
                    </>
                }
            </Container>
        </Navbar >

    )
}
import React from "react";
import { Container, Navbar } from 'react-bootstrap'
import { IconNav } from '../IconNav/IconNav'
import { useAuth } from "../../services/dataFromSlice";
import './SecondNavbar.css'

import dentistsIcon from '../../assets/users.svg'
import specialtiesIcon from '../../assets/file-certificate.svg'
import tretamentsIcon from '../../assets/heart-handshake.svg'
import { IconsDentist } from "../IconsDentist/IconsDentist";
import { IconsAdmin } from "../IconsAdmin/IconsAdmin";



export function SecondNavbar() {
    const { role } = useAuth();

    return (
        <Navbar className="secondNavbar">
            <Container style={{ justifyContent: 'space-evenly' }}>
                <IconNav link='/dentists' className='darkStyle' icon={dentistsIcon} text='Dentistas' />
                <IconNav link='/specialties' className='darkStyle' icon={specialtiesIcon} text='Especialidades' />
                <IconNav link='/treatments' className='darkStyle' icon={tretamentsIcon} text='Tratamientos' />
                {role === 1 &&
                    <IconsAdmin />
                }
                {role === 2 &&
                    <IconsDentist />
                }
            </Container>
        </Navbar >

    )
}
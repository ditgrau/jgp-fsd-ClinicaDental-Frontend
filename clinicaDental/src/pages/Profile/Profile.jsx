import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import { IconNav } from '../../componentes/IconNav/IconNav'
import { Container, Row, Col } from 'react-bootstrap'
import { userData } from '../../Redux/userSlice';
import { getMyProfile } from '../../services/apiCalls';

import '../Profile/Profile.css'


import userIcon from '../../assets/user-circle.svg'
import editIcon from '../../assets/writing.svg'


export function Profile() {



    const dataSlice = useSelector(userData);
    const isLogged = (!!dataSlice.credentials.token)
    const token = dataSlice?.credentials?.token;
    console.log (isLogged)
    console.log (dataSlice)
    console.log (token)

useEffect(()=> {
    getMyProfile(token).then ((res)=>{
        console.log(res)
    })
}

)

    return (
        <Container>
            <Row className="profile-row">
                <Col xs={10} md={4} className="profile-card">
                    <aside className="id-card">
                        <img src={userIcon} alt='userProfile'></img>
                        <span>id: 167809</span>
                    </aside>
                    <section className="data-card">
                        <div>
                            <p className="title-card">Nombre</p>
                            <span>Martina</span>
                        </div>
                        <div>
                            <p className="title-card">Apellidos</p>
                            <span>de los Olmos Puigdollers Carbonell</span>
                        </div>
                        <div>
                            <p className="title-card">DNI</p>
                            <span>987987</span>
                        </div>
                        <div>
                            <p className="title-card">email</p>
                            <span>maria@email.com</span>
                        </div>
                        <div className="profile-footer">
                            <IconNav link='/edit' className='whiteStyle' icon={editIcon} text='Editar' />
                            <IconNav link='/citas' className='whiteStyle' icon={editIcon} text='Mis citas' />
                            <IconNav link='/nuevaCita' className='whiteStyle' icon={editIcon} text='Pedir cita' />
                        </div>
                    </section>
                </Col>
            </Row>
        </Container >
    )
}

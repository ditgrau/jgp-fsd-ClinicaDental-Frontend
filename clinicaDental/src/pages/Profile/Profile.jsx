import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { IconNav } from '../../componentes/IconNav/IconNav'
import { Container, Row, Col } from 'react-bootstrap'
import { userData } from '../../Redux/userSlice';
import { getMyProfile } from '../../services/apiCalls';

import '../Profile/Profile.css'


import userIcon from '../../assets/user-circle.svg'
import editIcon from '../../assets/writing.svg'


export function Profile() {

    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});
    const [letra, setLetra] = useState('');

    const dataSlice = useSelector(userData);
    const isLogged = (!!dataSlice.credentials.token)
    const token = dataSlice?.credentials?.token;
    const isDentist = (!!user.Dentist)

    useEffect(() => {
        getMyProfile(token).then((res) => {
            setUser(res)
            setLetra((res.name)[0].toUpperCase());
            console.log(letra)
        })
    }, [])
    console.log(user.Dentist)
    console.log(letra)


    return (
        <Container>
            <Row className="profile-row">
                <Col xs={10} md={4} className="profile-card">

                    <section className="id-card">
                        <div className='capital-letter'><div>{letra}</div></div>
                        <span className='id-number'>id {user.id}</span>
                        <span className="title-profile"> {user.name} {user.surname}</span>
                        <span className="subtitle-profile">MI PERFIL</span>
                    </section>

                    <section className="data-card">
                        <div>
                            <span className="title-card">Nombre</span><span className="info-user">{user.name}</span>
                        </div>
                        <div>
                            <span className="title-card">Apellidos</span><span className="info-user">{user.surname}</span>
                        </div>
                        <div>
                            <span className="title-card">DNI</span><span className="info-user">{user.dni}</span>
                        </div>
                        <div>
                            <span className="title-card">Email</span><span className="info-user">{user.email}</span>
                        </div>

                        {
                            isDentist
                                ?
                                <>
                                    <div>
                                        <span className="title-card">Collegiate</span><span className="info-user">{user.Dentist.collegiate}</span>
                                    </div>
                                    <div>
                                        <span className="title-card">Specialty</span><span className="info-user">{user.Dentist.Specialty.name}</span>
                                    </div>
                                </>
                                : <></>
                        }
                    </section>
                    <div className="profile-footer">
                        <IconNav link='/nuevaCita' className='whiteStyle' icon={editIcon} text='Pedir cita' />
                        <IconNav link='/citas' className='whiteStyle' icon={editIcon} text='Mis citas' />
                        <IconNav link='/edit' className='whiteStyle' icon={editIcon} text='Editar' />
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

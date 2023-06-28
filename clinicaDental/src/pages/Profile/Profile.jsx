import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { IconNav } from '../../componentes/IconNav/IconNav'
import { Container, Row, Col } from 'react-bootstrap'
import { userData } from '../../Redux/userSlice';
import { getMyProfile, updateDentistProfile, updateProfile } from '../../services/apiCalls';

import '../Profile/Profile.css'


import newCitaIcon from '../../assets/calendar-plus.svg'
import editIcon from '../../assets/writing.svg'
import citasIcon from '../../assets/star.svg'
import checkIcon from '../../assets/check.svg'


export function Profile() {

    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});
    const [letra, setLetra] = useState('');

    const dataSlice = useSelector(userData);
    // const isLogged = (!!dataSlice.credentials.token)
    const token = dataSlice?.credentials?.token;
    const isDentist = (!!user.Dentist)
    
    const inputHandler = (e) => {
        setBody((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    
    const editHandler = (body, token) => {
        if (isDentist) {
            updateDentistProfile(body, token)
                .then(updateProfile(body, token)
                    .then(res => setEditing(false)))
        } else {
            updateProfile(body, token)
                .then(res => setEditing(false))
        }
    }

    useEffect(() => {
        getMyProfile(token).then((res) => {
            setUser(res)
            setLetra((res.name)[0].toUpperCase());
            console.log(letra)
        })
    }, [editing])
    
    return (
        <Container>
            <Row className="main-row">
                <Col xs={10} md={4} className="main-card">
                    <section className="id-card">
                        <div className='capital-letter'><div>{letra}</div></div>
                        <span className='id-number'>id {user.id}</span>
                        <span className="title-profile"> {user.name} {user.surname}</span>
                        <span className="subtitle-profile">MI PERFIL</span>
                    </section>

                    <section className="data-card">
                        <div>
                            <span className="title-card">Nombre</span>
                            {editing
                                ? (<input className="main-input" type="text" name="name" placeholder={user.name} onChange={(e) => inputHandler(e)}></input>)
                                : (<span className="info-user">{user.name}</span>)
                            }
                        </div>
                        <div>
                            <span className="title-card">Apellidos</span>
                            {editing
                                ? (<input className="main-input" type="text" name="surname" placeholder={user.surname} onChange={(e) => inputHandler(e)}></input>)
                                : (<span className="info-user">{user.surname}</span>)
                            }
                        </div>
                        <div>
                            <span className="title-card">DNI</span>
                            {editing
                                ? (<input className="main-input" type="text" name="dni" placeholder={user.dni} onChange={(e) => inputHandler(e)}></input>)
                                : (<span className="info-user">{user.dni}</span>)
                            }
                        </div>
                        <div>
                            <span className="title-card">Email</span>
                            {editing
                                ? (<input className="main-input" type="email" name="email" placeholder={user.email} onChange={(e) => inputHandler(e)}></input>)
                                : (<span className="info-user">{user.email}</span>)
                            }
                        </div>

                        {
                            isDentist
                                ?
                                <>
                                    <div>
                                        <span className="title-card">Collegiate</span>
                                        {editing
                                            ? (<input className="main-input" type="text" name="collegiate" placeholder={user.Dentist.collegiate} onChange={(e) => inputHandler(e)}></input>)
                                            : (<span className="info-user">{user.Dentist.collegiate}</span>)
                                        }
                                    </div>
                                    <div>
                                        <span className="title-card">Specialty</span><span className="info-user">{user.Dentist.Specialty.name}</span>
                                    </div>
                                </>
                                : <></>
                        }
                    </section>
                    <div className="profile-footer">
                        <IconNav link='/nuevaCita' className='whiteStyle' icon={newCitaIcon} text='Pedir cita' />
                        <IconNav link='/citas' className='whiteStyle' icon={citasIcon} text='Mis citas' />
                        {editing
                            ? (<IconNav className='whiteStyle' icon={checkIcon} text='Guardar' clickFunction={() => editHandler(body, token)} />)
                            : (<IconNav className='whiteStyle' icon={editIcon} text='Editar' clickFunction={() => setEditing(true)} />)
                        }
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

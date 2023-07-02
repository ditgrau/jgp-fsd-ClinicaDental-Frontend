import React, { useEffect, useState } from "react";
import { IconNav } from '../../componentes/IconNav/IconNav'
import { Container, Row, Col } from 'react-bootstrap'
import { getMyProfile, updateDentistProfile, updateProfile } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import '../Profile/Profile.css'
import { useNavigate } from "react-router-dom";

import newCitaIcon from '../../assets/calendar-plus.svg'
import editIcon from '../../assets/writing.svg'
import citasIcon from '../../assets/star.svg'
import checkIcon from '../../assets/check.svg'

export function Profile() {

    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});
    const [letra, setLetra] = useState('');
    const navigate = useNavigate()
    const {role, token} = useAuth();
    const isDentist = (!!user.Dentist)
    const textCita = (role===3) ? 'Pedir cita' : 'Crear cita'

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [])

    const inputHandler = (e) => {
        setBody((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const editHandler = (body, token) => {
        if (role === 2) {
            updateDentistProfile(body, token)
                .then(updateProfile(body, token)
                    .then(res => setEditing(false)))
        } else if (role === 3) {
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
                <Col xs={10} md={4} className="main-card profile-card">
                    <section className="id-card">
                        <div className='capital-letter'><div>{letra}</div></div>
                        <span className='id-number'>id {user.id}</span>
                        <span className="title-profile"> {user.name} {user.surname}</span>
                        <span className="subtitle-profile">MI PERFIL</span>
                    </section>
                    <section className="profile-card ">
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
                        {editing
                            ? (<IconNav className='whiteStyle' icon={checkIcon} text='Guardar' clickFunction={() => editHandler(body, token)} />)
                            : (<IconNav className='whiteStyle' icon={editIcon} text='Editar' clickFunction={() => setEditing(true)} />)
                        }
                        {role !== 1
                            ? (
                                <>
                                    <IconNav link='/nuevaCita' className='whiteStyle' icon={newCitaIcon} text={textCita} />
                                    <IconNav link='/appointments' className='whiteStyle' icon={citasIcon} text='Mis citas' />
                                </>
                            )
                            : (
                                <></>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

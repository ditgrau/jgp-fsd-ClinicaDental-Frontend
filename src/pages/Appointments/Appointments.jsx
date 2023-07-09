import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMyAppt, getMyApptDentist, deleteAppointment } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";
import { NavButton } from "../../componentes/NavButton/NavButton";
import { IconNav } from "../../componentes/IconNav/IconNav";
import { useDispatch } from "react-redux";
import { saveAppt } from "../../Redux/detailApptSlice"
import { ApptCardDentist } from "../../componentes/ApptCardDentist/ApptCardDentist";
import calendarIcon from '../../assets/calendar.svg';
import clockIcon from '../../assets/clock.svg';
import allAppt from '../../assets/arrow-bar-down.svg';
import editIcon from '../../assets/writing.svg'
import deleteIcon from '../../assets/trash.svg';

import '../Appointments/Appointments.css';

export function Appointments() {

    const [myAppointments, setMyAppointments] = useState([]);
    const [title, setTitle] = useState('PRÓXIMAS CITAS');
    const [hasData, setHasData] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const { role, token } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (!token) {
            return navigate('/')
        } else {
            switch (role) {
                case 1:
                    navigate('/users')
                    break;
                case 3:
                    getMyAppt(token).then(res => {
                        setMyAppointments(res)
                        setHasData(true)
                    })
                    break;
                case 2:
                    getMyApptDentist(token).then(res => {
                        setMyAppointments(res)
                        setHasData(true)
                    });
                    break;
            }
        }
        setDeleted(false);
    }, [token, deleted]);

    const clickHandler = (apptId) => {
        dispatch(saveAppt({ id: apptId }))
        navigate('/detailappt');
    }

    const deleteHandler = (id, token) => {
        deleteAppointment(id, token)
            .then(res => setDeleted(true))
    }

    useEffect(() => {
        hasData
            ? (setTitle(myAppointments.length === 0 ? "NO HAY CITAS" : "PRÓXIMAS CITAS"),
                setIsEmpty(true))
            : setTitle("PRÓXIMAS CITAS");
    }, [hasData, myAppointments]);

    return (
        <Container>
            <Row className="main-row main-column">
                <>
                    <span className="title-main">{title}</span>
                    {myAppointments.length > 0 && myAppointments.map((appt) => (
                        <Col key={appt.id} xs={10} md={6} className="main-card">

                            {role === 3 && (
                                <>
                                    <section className="appt-body">
                                        <div>
                                            <span className="title-card">Tratamiento</span>
                                            <span className="info-user">{appt.Treatment.name}</span>
                                        </div>
                                        <div>
                                            <span className="title-card">Tiempo estimado</span>
                                            <span className="info-user">{appt.Treatment.time} minutos</span>
                                        </div>
                                        <div>
                                            <span className="title-card">Precio</span>
                                            <span className="info-user">{appt.Treatment.price}€</span>
                                        </div>
                                        <div>
                                            <span className="title-card">Dentista</span>
                                            <span className="info-user">{appt.Dentist.User.name} {appt.Dentist.User.surname}</span>
                                        </div>
                                        <div className="info-date">
                                            < img src={calendarIcon} alt='calendar'></img>
                                            <span>{appt.date}</span>
                                        </div>
                                        <div className="info-date">
                                            <img src={clockIcon} alt='clock'></img>
                                            <span>{appt.hour}</span>
                                        </div>
                                    </section>
                                    <div className="appt-footer">
                                    <IconNav link= "/detailappt" className='whiteStyle' icon={editIcon} text='Editar'clickFunction={() => clickHandler(appt.id)}/>
                                    <IconNav className="whiteStyle" icon={deleteIcon} text="Borrar" clickFunction={() => deleteHandler(appt.id, token)} />
                                    </div>
                                </>
                            )}
                            {role === 2 && (
                                <div className="card-appt">
                                    <ApptCardDentist
                                        date={appt.date}
                                        hour={appt.hour}
                                        treat={appt.Treatment.name}
                                        name={appt.User.name}
                                        surname={appt.User.surname}
                                    />
                                </div>
                            )}

                        </Col>
                    ))}
                    {role === 2 && (
                        <Col xs={10} md={6} className="card-appt">
                            <IconNav
                                link="/allAppointments"
                                className="whiteStyle"
                                icon={allAppt}
                                text="Todas"
                            />
                        </Col>
                    )}
                    {role === 3 && (
                        <Col xs={5} md={2} margin={0}>
                            <Link to="/newAppt">
                                <NavButton textButton="Pide tu cita" />
                            </Link>
                        </Col>
                    )}
                </>
            </Row>
        </Container >
    );
}
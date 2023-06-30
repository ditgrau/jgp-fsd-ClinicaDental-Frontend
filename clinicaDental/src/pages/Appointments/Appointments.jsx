import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMyAppt, getMyApptDentist } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";
import { NavButton } from "../../componentes/NavButton/NavButton";
import calendarIcon from '../../assets/calendar.svg'
import clockIcon from '../../assets/clock.svg'
import '../Appointments/Appointments.css'


export function Appointments() {

    const [myAppointments, setMyAppointments] = useState([])
    const [title, setTitle] = useState('PRÓXIMAS CITAS')
    const [hasData, setHasData] = useState(false)
    const {role, token} = useAuth();
    const navigate = useNavigate()


    useEffect(() => {
        if (!token) {
            return navigate('/')
        } else {
            switch (role) {
                case 3:
                    getMyAppt(token).then(res => {
                        setMyAppointments(res)
                        setHasData(true)
                    })
                    break;
                case 2:
                case 1:
                    getMyApptDentist(token).then(res => {
                        setMyAppointments(res)
                        setHasData(true)
                    });
                    break;
            }
        }
    }, [token]);


    console.log(myAppointments.length)
    useEffect(() => {
        hasData
            ? setTitle(myAppointments.length === 0 ? "NO HAY CITAS" : "PRÓXIMAS CITAS")
            : setTitle("PRÓXIMAS CITAS");
    }, [hasData, myAppointments]);


    return (
        <Container>
            <Row className="main-row">
                <span className="title-main">{title}</span>
                {myAppointments.length > 0
                    ?
                    (
                        myAppointments.map((appt) => (
                            <Col key={appt.id} xs={10} md={6} className="card-appt main-card">
                                <section >
                                    <div className="info-date">
                                        <span>{appt.date}</span>
                                        <img src={calendarIcon} alt='calendar'></img>
                                    </div>
                                    <div className="info-date">
                                        <span>{appt.hour}</span>
                                        <img src={clockIcon} alt='clock'></img>
                                    </div>
                                </section>
                                <section className="appt-body">
                                    <div>
                                        <span className="title-card">Tratamiento</span>
                                        <span className="info-user">{appt.Treatment.name}</span>
                                    </div>
                                    {role === 3
                                        ?
                                        (
                                            <>
                                                <div>
                                                    <span className="title-card">Dentista</span>
                                                    <span className="info-user">{appt.Dentist.User.name} {appt.Dentist.User.surname}</span>

                                                </div>
                                                <div>
                                                    <span className="title-card">Colegiado</span>
                                                    <span className="info-user">{appt.Dentist.collegiate}</span>
                                                </div>
                                            </>

                                        )
                                        :
                                        (
                                            <div>
                                                <span className="title-card">Paciente</span>
                                                <span className="info-user">{appt.User.name} {appt.User.surname}</span>
                                            </div>
                                        )}
                                </section>
                            </Col>
                        ))
                    )
                    :
                    (
                        <Col xs={5} md={2} margin={0}>
                            <Link to='/'><NavButton textButton='Pide tu cita' /></Link>
                        </Col>
                    )}
            </Row>
        </Container>
    )
}
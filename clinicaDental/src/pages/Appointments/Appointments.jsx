import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMyAppt, getMyApptDentist } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";
import { NavButton } from "../../componentes/NavButton/NavButton";
import allAppt from '../../assets/arrow-bar-down.svg'
import { IconNav } from "../../componentes/IconNav/IconNav";
import { ApptCardUser } from "../../componentes/ApptCardUser/ApptCardUser";
import { ApptCardDentist } from "../../componentes/ApptCardDentist/ApptCardDentist";
import '../Appointments/Appointments.css'
import editIcon from '../../assets/writing.svg'
import deleteIcon from '../../assets/trash.svg'


export function Appointments() {

    const [myAppointments, setMyAppointments] = useState([])

    const [title, setTitle] = useState('PRÓXIMAS CITAS')
    const [hasData, setHasData] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const { role, token } = useAuth();
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

    useEffect(() => {
        hasData
            ? (setTitle(myAppointments.length === 0 ? "NO HAY CITAS" : "PRÓXIMAS CITAS"),
                setIsEmpty(true))
            : setTitle("PRÓXIMAS CITAS");
    }, [hasData, myAppointments]);


    return (
        <Container>
            <Row className="main-row">
                <>
                    <span className="title-main">{title}</span>
                    {myAppointments.length > 0 ? (
                        myAppointments.map((appt) => (
                            <Col key={appt.id} xs={10} md={6} className="main-card">
                                <div className="card-appt">
                                    {role === 3 && (
                                        <ApptCardUser
                                            date={appt.date}
                                            hour={appt.hour}
                                            treat={appt.Treatment.name}
                                            time={appt.Treatment.time}
                                            price={appt.Treatment.price}
                                            name={appt.Dentist.User.name}
                                            surname={appt.Dentist.User.surname}
                                        />
                                    )}
                                    {role === 2 && (
                                        <ApptCardDentist
                                            date={appt.date}
                                            hour={appt.hour}
                                            treat={appt.Treatment.name}
                                            name={appt.User.name}
                                            surname={appt.User.surname}
                                        />
                                    )}
                                </div>
                                <div className="appt-footer">
                                    <IconNav
                                        className="whiteStyle"
                                        icon={editIcon}
                                        text="Editar"
                                    // clickFunction={() => setEditing(true)}
                                    />
                                    <IconNav
                                        className="whiteStyle"
                                        icon={deleteIcon}
                                        text="Borrar"
                                    // clickFunction={() => setEditing(true)}
                                    />
                                </div>
                            </Col>
                        ))
                    ) : (
                        <>
                            {isEmpty && (
                                <Col xs={5} md={2} margin={0}>
                                    <Link to="/newAppt">
                                        <NavButton textButton="Pide tu cita" />
                                    </Link>
                                </Col>
                            )}
                        </>
                    )}
                    {role === 2 && (
                        <Col xs={10} md={10} className="card-appt">
                            <IconNav
                                link="/allAppointments"
                                className="whiteStyle"
                                icon={allAppt}
                                text="Todas"
                            />
                        </Col>
                    )}
                </>
            </Row>
        </Container>

    )
}
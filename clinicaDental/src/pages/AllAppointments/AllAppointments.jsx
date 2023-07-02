import React, { useEffect, useState } from "react";
import { getAllAppt } from '../../services/apiCalls';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";
import { IconNav } from '../../componentes/IconNav/IconNav'
import { ApptCardUser } from "../../componentes/ApptCardUser/ApptCardUser";
import { ApptCardDentist } from "../../componentes/ApptCardDentist/ApptCardDentist";

import goBack from '../../assets/arrow-back.svg'

export function AllAppointments() {

    const navigate = useNavigate()
    const { role, token } = useAuth();
    const [allAppointments, setAllAppointments] = useState([])

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])
    useEffect(() => {
        getAllAppt(token).then(res => {
            setAllAppointments(res)
        })
    })

    return (
        <Container>
            <Row className="main-row">
                <span className="title-main">TODAS LAS CITAS</span>
                {allAppointments.length > 0
                    ?
                    (
                        allAppointments.map((appt) => (
                            <Col key={appt.id} xs={10} md={6} className="card-appt main-card">
                                <ApptCardDentist date={appt.date} hour={appt.hour} treat={appt.Treatment.name} name={appt.User.name} surname={appt.User.surname} />
                            </Col>
                        ))
                    )
                    : (
                        <span className="title-main">NO HAY CITAS DISPONIBLES</span>
                    )}
                <Col xs={10} md={6} className="card-appt">
                    <IconNav link='/appointments' className="whiteStyle" icon={goBack} text="Atrás" />
                </Col>
            </Row>
        </Container >
    )
}
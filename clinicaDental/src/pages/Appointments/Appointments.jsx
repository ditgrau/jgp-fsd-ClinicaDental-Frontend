import React, { useEffect, useState } from "react";
import { getMyAppt, getMyApptDentist } from '../../services/apiCalls';
import { userData } from "../../Redux/userSlice";

import '../Appointments/Appointments.css'
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

export function Appointments() {

    const [myAppointments, setMyAppointments] = useState([])
    const dataSlice = useSelector(userData);
    const token = dataSlice?.credentials?.token
    const role = dataSlice.data.role
    console.log(role)


    useEffect(() => {
        switch (role) {
            case 3:
                getMyAppt(token).then(res => setMyAppointments(res));
                break;
            case 2:
                getMyApptDentist(token).then(res => setMyAppointments(res));
                break;
        }
    }, []);

    let arrayAppt = myAppointments.myAppointments
    console.log(arrayAppt)

    return (
        <Container>HOLA
            <Row className="main-row">
                {arrayAppt.length > 0
                    ?
                    (
                        arrayAppt.map((appt) => (
                            <Col key={appt.id} xs={10} md={7} className="main-card">
                                <span>HOLA</span>
                            </Col>
                        ))
                    )
                    :
                    (
                        <span>adios
                        </span>
                    )}
            </Row>
        </Container>
    )
}
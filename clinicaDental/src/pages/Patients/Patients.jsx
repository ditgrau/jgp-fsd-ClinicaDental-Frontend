import React, { useEffect, useState } from "react";
import { getPatients } from '../../services/apiCalls';
import { Token } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";


export function Patients() {
    const [patients, setPatients] = useState([])
    const [letra, setLetra] = useState('');
    const token = Token()
    console.log(token)

    useEffect(() => {
        getPatients(token).then((res) => {
            setPatients(res)
            res.map((obj)=> setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()]));
        })
    }, [])
    console.log(patients)
    console.log(letra) 
    return (
        <Container>
            <Row className="main-row">
                <span className="title-main">PACIENTES</span>
                {patients.length > 0
                    ?
                    (
                        patients.map((elem, index) => (
                            <Col key={elem.id} xs={10} md={4} className="card-appt main-card">
                                <section>
                                    <div className='capital-letter'><div>{letra[index]}</div></div>
                                    <span className="title-profile"> {elem.name} {elem.surname}</span>
                                </section>
                                <section className="data-card">
                                    <div>
                                        <span className="title-card">Nombre</span>
                                        <span className="info-user">{elem.name}</span>
                                    </div>
                                    <div>
                                        <span className="title-card">Apellidos</span>
                                        <span className="info-user">{elem.surname}</span>
                                    </div>
                                    <div>
                                        <span className="title-card">DNI</span>
                                        <span className="info-user">{elem.dni}</span>
                                    </div>
                                    <div>
                                        <span className="title-card">Email</span>
                                        <span className="info-user">{elem.email}</span>
                                    </div>
                                </section>

                            </Col>



                        )))
                    // const resultado = arrayDeObjetos.map(objeto => objeto.clave.map(elemento => /* haz algo con cada elemento */));

                    : (<></>)
                }
            </Row>
        </Container>
    )
}
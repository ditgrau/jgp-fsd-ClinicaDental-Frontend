import React, { useEffect, useState } from "react";
import { getPatients, getUsers } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";
import { IconNav } from '../../componentes/IconNav/IconNav'
import detailIcon from '../../assets/search.svg'
import './Patients.css'

export function Patients() {
    const [patients, setPatients] = useState([])
    const [letra, setLetra] = useState('');
    const { role, token } = useAuth();
    const title = 'PACIENTES'

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        getPatients(token).then((res) => {
            setPatients(res)
            res.map((obj) => setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()]));
        })
    }
        , [])

    return (
        <Container>
            <Row className="main-row">
                <span className="title-main">{title}</span>
                {patients.length > 0
                    ?
                    (
                        patients.map((elem, index) => (
                            <Col key={elem.id} xs={10} md={6} className=" main-card users-list">
                                <section className="name-user">
                                    <div className='letter-user'><div>{letra[index]}</div></div>
                                    <span > {elem.name} {elem.surname}</span>
                                </section>
                                <section>
                                    <IconNav link='/profile' className='whiteStyle' icon={detailIcon} text='Detalle' />
                                </section>
                            </Col>
                            // <CardUSer key={elem.id} elem={elem} index={index} letra={letra}/>
                        )))
                    :
                    (<></>)
                }
            </Row>
        </Container>
    )
}
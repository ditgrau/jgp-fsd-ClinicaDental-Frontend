import React, { useEffect, useState } from "react";
import { getPatients , getUsers} from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";
import { CardUSer } from "../../componentes/CardUser/CardUser";


export function Patients() {
    const [patients, setPatients] = useState([])
    const [letra, setLetra] = useState('');
    const {role, token} = useAuth();
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
        })}
    , [])

    return (
        <Container>
            <Row className="main-row">
                <span className="title-main">{title}</span>
                {patients.length > 0
                    ?
                    (
                        patients.map((elem, index) => (
                            <CardUSer key={elem.id} elem={elem} index={index} letra={letra}/>
                        )))
                    : 
                    (<></>)
                }
            </Row>
        </Container>
    )
}
import React, { useEffect, useState } from "react";
import { getPatients , getUsers} from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container, Row, Col } from "react-bootstrap";
import { CardUSer } from "../../componentes/CardUser/CardUser";


export function Users() {
    const [users, setUsers] = useState([])
    const [letra, setLetra] = useState('');
    const {role, token} = useAuth();
    const title = 'USUARIOS'

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        getUsers(token).then((res) => {
            setUsers(res)
            res.map((obj) => setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()]));
        })}
    , [])

    return (
        <Container>
            <Row className="main-row">
                <span className="title-main">{title}</span>
                {users.length > 0
                    ?
                    (
                        users.map((elem, index) => (
                            <CardUSer key={elem.id} elem={elem} index={index} letra={letra}/>
                        )))
                    : 
                    (<></>)
                }
            </Row>
        </Container>
    )
}
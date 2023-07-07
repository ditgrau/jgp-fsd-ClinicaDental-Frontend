import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../services/dataFromSlice";
import { detailUserData } from "../../Redux/detailUserSlice";
import { Container, Row } from "react-bootstrap";
import { getById } from '../../services/apiCalls';
import { useNavigate } from "react-router-dom";
import { CardUSer } from "../../componentes/CardUser/CardUser";


export function DetailUser() {

    const { role, token } = useAuth();
    let navigate = useNavigate()
    let detail = useSelector(detailUserData);
    let idUser = detail.id.id;
    let [user, setUser] = useState({});

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        getById(idUser, token).then((res) => 
        setUser(res))
    }, []);

    return (
        <Container>
            <Row className="main-row">
                <CardUSer nameDet={user.name} surnameDet={user.surname} dniDet={user.dni} emailDet={user.email} roleDet={user.role} stateDet={user.state} />
            </Row>
        </Container>
    )
}
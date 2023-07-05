import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../services/dataFromSlice";
import { detailUserData } from "../../Redux/detailUserSlice";
import { Container, Row } from "react-bootstrap";
import { getById } from '../../services/apiCalls';
import { useNavigate } from "react-router-dom";


export function DetailUser() {

    const { role, token } = useAuth();
    let navigate = useNavigate()
    let detail = useSelector(detailUserData);
    let idUser = detail.id.id;
    let [user, setUser] = useState({});

    console.log(detail)
    console.log(idUser)
    console.log(user)
    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        getById(idUser, token).then((res) => setUser(res));
    }, []);

    console.log(user)

    return (
        <Container>
            <Row>
                <span>{user.id}</span>

            </Row>
        </Container>
    )
}
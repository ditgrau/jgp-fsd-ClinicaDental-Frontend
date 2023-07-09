import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMyProfile } from '../../services/apiCalls';
import { NavButton } from "../../componentes/NavButton/NavButton";
import { useAuth } from "../../services/dataFromSlice";

export function Home() {
    const [name, setName] = useState('');
    const { token} = useAuth();

    useEffect(() => {
        if (token) {
            getMyProfile(token).then((res) => {
                setName(`${(res.name).toUpperCase()}`)
            })
        }
    }, [token])
    

    return (
        <Container>
            {!token 
            ? (
                <Row className="main-row">
                    <Col xs={5} md={2} margin={0}>
                        <Link to="/login">
                            <NavButton textButton="Log in" />
                        </Link>
                    </Col>
                    <Col xs={5} md={2} margin={0}>
                        <Link to="/signup">
                            <NavButton textButton="Registro" />
                        </Link>
                    </Col>
                </Row>
            ) 
            : (
                <h2>Hola, {name}</h2>
            )
            }
        </Container>
    );
}
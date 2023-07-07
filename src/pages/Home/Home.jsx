import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavButton } from "../../componentes/NavButton/NavButton";

export function Home() {

    return (
        <Container>
            <Row className="main-row main-row">
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
        </Container >
    )
}
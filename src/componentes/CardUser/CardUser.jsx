import React from "react";
import { Col } from "react-bootstrap";
import { useAuth } from "../../services/dataFromSlice";
import './CardUSer.css'

export function CardUSer({ nameDet, surnameDet, dniDet, emailDet, roleDet}) {
    const { role } = useAuth();
    return (

        <Col xs={10} md={3} className="main-card profile-card">
            <section className="profile-card">
                <div>
                    <span className="title-card">Nombre</span>
                    <span className="info-user">{nameDet}</span>
                </div>
                <div>
                    <span className="title-card">Apellidos</span>
                    <span className="info-user">{surnameDet}</span>
                </div>
                <div>
                    <span className="title-card">DNI</span>
                    <span className="info-user">{dniDet}</span>
                </div>
                <div>
                    <span className="title-card">Email</span>
                    <span className="info-user">{emailDet}</span>
                </div>
                {
                    role === 1
                    && (
                        <>
                            <div>
                                <span className="title-card">Role</span>
                                <span className="info-user">{roleDet}</span>
                            </div>
                        </>
                    )
                }
            </section>
        </Col>
    )
}

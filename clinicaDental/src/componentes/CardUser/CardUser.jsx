import React from "react";
import { Col } from "react-bootstrap";
import './CardUSer.css'
import { useAuth } from "../../services/dataFromSlice";
import { IconNav } from "../IconNav/IconNav";

import editIcon from '../../assets/writing.svg'
import userIcon from '../../assets/user-circle.svg'

export function CardUSer({ nameDet, surnameDet, dniDet, emailDet, roleDet, stateDet }) {
    const { role } = useAuth();
    // let letra = {nameDet}[0].toUpperCase()
    return (

        <Col xs={10} md={3} className="main-card profile-card">
            <section className="title-user">
                {/* <div className='letter-user'><div>{letra}</div></div> */}
                <span className="title-user"> {nameDet} {surnameDet}</span>
            </section>
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

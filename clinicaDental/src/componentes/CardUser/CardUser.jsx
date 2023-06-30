import React from "react";
import { Col } from "react-bootstrap";
// import './CardUSer.css'
import { useAuth } from "../../services/dataFromSlice";
import { IconNav } from "../IconNav/IconNav";

import editIcon from '../../assets/writing.svg'
import userIcon from '../../assets/user-circle.svg'
import calendarIcon from '../../assets/calendar.svg'

export function CardUSer({ elem, index, letra }) {
    const { role } = useAuth();
    const status = elem.state ? 'Activo' : 'Inactivo'

    return (

        <Col xs={10} md={3} className="card-users main-card">
            <section className="title-user">
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
                {
                    role === 1
                    && (
                        <>
                            <div>
                                <span className="title-card">Role</span>
                                <span className="info-user">{elem.role}</span>
                            </div>
                            <div>
                                <span className="title-card">State</span>
                                <span className="info-user">{status}</span>
                            </div>
                        </>
                    )
                }
            </section>
            {role === 1
                && (<section className="profile-footer">
                    <IconNav link='/' className='whiteStyle' icon={editIcon} text='Editar' />
                    <IconNav link='/detail' className='whiteStyle' icon={userIcon} text='Detalle' />
                    {(elem.Appointments).length > 0
                        && (
                            <IconNav link='/detail/appt' className='whiteStyle' icon={calendarIcon} text='Citas' />
                        )
                    }
                </section>)
            }
        </Col>
    )
}

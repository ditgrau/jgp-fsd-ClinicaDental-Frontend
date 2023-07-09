import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../services/dataFromSlice";
import { detailApptData } from "../../Redux/detailApptSlice";
import { Container, Col, Row } from "react-bootstrap";
import { getApptById, updateAppointment } from '../../services/apiCalls';
import { useNavigate } from "react-router-dom";
import { IconNav } from '../../componentes/IconNav/IconNav'
import calendarIcon from '../../assets/calendar.svg';
import clockIcon from '../../assets/clock.svg';
import checkIcon from '../../assets/check.svg';
import goBack from '../../assets/arrow-back.svg'


export function DetailAppt() {

    const { role, token } = useAuth();
    const [appt, setAppt] = useState({});
    const [data, setHasData] = useState(false);
    const [body, setBody] = useState({});
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate()
    const detail = useSelector(detailApptData);
    let idAppt = detail.id.id

    const currentDate = new Date().toISOString().split("T")[0];

    useEffect(() => {
        if (!token || role !== 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        getApptById(idAppt, token).then((res) => {
            setAppt(res)
            setHasData(true)
        })
    }, [update]);

    const inputHandler = (e) => {
        setBody((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const editHandler = (id, body, token) => {
        updateAppointment(id, body, token)
            .then(res => {
                setUpdate(true)
            })

    }
    console.log(update)
    return (
        <Container>
            <Row className="main-row">
                <Col xs={10} md={3} className="main-card profile-card">
                    <section className="profile-card">
                        {
                            data && (
                                <span className="title-card">Cita: {appt.date} / {appt.hour}</span>
                            )
                        }
                        {
                            update ? (
                                <>
                                    <div className="info-date">
                                        < img src={calendarIcon} alt='calendar'></img>
                                        <span>{appt.date}</span>
                                    </div>
                                    <div className="info-date">
                                        <img src={clockIcon} alt='clock'></img>
                                        <span>{appt.hour}</span>
                                    </div>
                                </>
                            )
                                : (
                                    <>
                                        <div className="info-date">
                                            < img src={calendarIcon} alt='calendar'></img>
                                            <input className="main-input"
                                                type="date"
                                                name="date"
                                                min={currentDate}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </div>
                                        <div className="info-date">
                                            <img src={clockIcon} alt='clock'></img>
                                            <input className="main-input"
                                                type="time"
                                                name="hour"
                                                list="time_list"
                                                onBlur={(e) => inputHandler(e)}
                                            />
                                        </div>
                                    </>
                                )
                        }

                        {data && (
                            <>
                                <div>
                                    <span className="title-card">Tratamiento</span>
                                    <span className="info-user">{appt.Treatment.name}</span>
                                </div>
                                <div>
                                    <span className="title-card">Especialidad</span>
                                    <span className="info-user">{appt.Treatment.Specialty.name}</span>
                                </div>
                                <div>
                                    <span className="title-card">Dentista</span>
                                    <span className="info-user">{appt.Dentist.User.name} {appt.Dentist.User.surname}</span>
                                </div>
                            </>
                        )}
                    </section>
                    <section className="appt-footer">
                        {
                            update
                                ? (
                                    <IconNav link='/appointments' className="whiteStyle" icon={goBack} text="Atrás" />
                                )
                                : (
                                    <IconNav className='whiteStyle' icon={checkIcon} text='Guardar' clickFunction={() => editHandler(appt.id, body, token)} />
                                )
                        }
                    </section>
                </Col>
            </Row>
        </Container>
    )
}
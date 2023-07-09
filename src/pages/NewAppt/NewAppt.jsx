import React, { useEffect, useState } from "react";
import { useAuth } from "../../services/dataFromSlice";
import { IconNav } from '../../componentes/IconNav/IconNav'
import { Container, Row, Col } from "react-bootstrap";
import { getAllDentist, getAllTreatments, newAppt } from '../../services/apiCalls';
import checkIcon from '../../assets/check.svg'
import { useNavigate } from "react-router-dom";

export function NewAppt() {
    const { token } = useAuth();
    const [apptSel, setApptSel] = useState({});
    const [optDentist, setOptDentist] = useState([]);
    const [optTreat, setOptTreat] = useState([]);
    const [error, setError] = useState('')
    const currentDate = new Date().toISOString().split("T")[0];

    let navigate = useNavigate()

    useEffect(() => {
        getAllDentist().then(res =>
            setOptDentist(res))
            .catch(error => console.log(error))
    }, [])

    const handleDentist = (e) => {
        setApptSel((prevState) => ({
            ...prevState,
            dentistId: e.target.value,
        }))
    };

    useEffect(() => {
        getAllTreatments().then(res =>
            setOptTreat(res))
            .catch(error => console.log(error))
    }, [])

    const handleTreat = (e) => {
        setApptSel((prevState) => ({
            ...prevState,
            treatmentId: e.target.value,
        }))
    };

    const inputHandler = ({ target }) => {
        let { name, value } = target;
        setApptSel((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const checkHandler = () => {
        console.log('stoy')
        newAppt(apptSel, token)
            .then(res => {
                if (res.success === true) {
                    navigate('/appointments')
                } else {
                    setError(res.message)
                }
            })
            .catch(error => setError(error.message));
        console.log('aqui')
    }

    console.log(error);

    return (
        <Container>
            <Row className="main-row">
                <div className='title-main'>Nueva cita</div>
                <Col xs={10} md={4} className="main-card profile-card">
                    <select onChange={handleDentist} className="main-input">
                        <option value="">Selecciona doctor</option>
                        {optDentist.map((dent) => (
                            <option key={dent.id} value={dent.id}>
                                Dr. {dent.User.name} {dent.User.surname}
                            </option>
                        ))}
                    </select>

                    <select onChange={handleTreat} className="main-input">
                        <option value="">Selecciona tratamiento</option>
                        {optTreat.map((treat) => (
                            <option key={treat.id} value={treat.id}>{treat.name}</option>
                        ))}
                    </select>

                    <input className="main-input"
                        type="date"
                        name="date"
                        min={currentDate}
                        onChange={(e) => inputHandler(e)}
                    />
                    <input className="main-input"
                        type="time"
                        name="hour"
                        list="time_list"
                        min="09:00"
                        max="19:30"
                        onBlur={(e) => inputHandler(e)}
                    />
                    <IconNav className='whiteStyle' icon={checkIcon} text='Aceptar' clickFunction={checkHandler} />
                </Col>

                <span className="errorText ">{error}</span>

            </Row>
        </Container>
    );

}
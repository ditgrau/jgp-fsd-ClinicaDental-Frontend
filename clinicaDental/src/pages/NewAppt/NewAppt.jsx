import React, { useEffect, useState } from "react";
import { useAuth } from "../../services/dataFromSlice";
import { IconNav } from '../../componentes/IconNav/IconNav'
import { Container, Row, Col } from "react-bootstrap";
import { getAllDentist, getAllTreatments, newAppt } from '../../services/apiCalls';
import checkIcon from '../../assets/check.svg'

export function NewAppt() {
    const { token } = useAuth();

    const [apptSel, setApptSel] = useState({});
    const [optDentist, setOptDentist] = useState([]);
    const [optTreat, setOptTreat] = useState([]);

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
    console.log(apptSel);


    useEffect(() => {
        getAllTreatments().then(res =>
            setOptTreat(res))
            .catch(error => console.log(error))
    }, [])

    console.log(optTreat)
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
        newAppt(apptSel, token)
            .then(res => console.log(res))
            .catch(error => console.log(error));
}

return (
    <Container>
        <Row className="main-row">
            <Col xs={10} md={4} className="main-card profile-card">
                <span>nueva cita</span>

                <select value={apptSel} onChange={handleDentist}>
                    <option value="">Selecciona doctor</option>
                    {optDentist.map((dent) => (
                        <option key={dent.id} value={dent.id}>
                            Dr. {dent.User.name} {dent.User.surname}
                        </option>
                    ))}
                </select>

                <select value={apptSel} onChange={handleTreat}>
                    <option value="">Selecciona tratamiento</option>
                    {optTreat.map((treat) => (
                        <option key={treat.id} value={treat.id}>{treat.name}</option>
                    ))}
                </select>

                <input
                    type="date"
                    name="date"
                    onChange={(e) => inputHandler(e)}
                />
                <input
                    type="time"
                    name="time"
                    list="time_list"
                    onBlur={(e) => inputHandler(e)}
                />
                <IconNav className='whiteStyle' icon={checkIcon} text='Aceptar' clickFunction={checkHandler} />
            </Col>
        </Row>
    </Container>
);

}
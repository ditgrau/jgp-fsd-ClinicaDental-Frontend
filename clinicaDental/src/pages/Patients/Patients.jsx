import React, { useEffect, useState } from "react";
import { getPatients } from '../../services/apiCalls';
import { useAuth } from "../../services/dataFromSlice";
import { Container } from "react-bootstrap";
import { UsersList } from "../../componentes/UsersList/UsersList";
import './Patients.css'


export function Patients() {
    const [patients, setPatients] = useState([])
    const [letra, setLetra] = useState('');
    const { role, token } = useAuth();

    useEffect(() => {
        if (!token || role === 3) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        getPatients(token).then((res) => {
            setPatients(res)
            res.map((obj) => setLetra((prevImage) => [...prevImage, (obj.name)[0].toUpperCase()]));
        })
    }
        , [])

    return (
        <Container>
            <UsersList title={'PACIENTES'} array={patients} letra={letra} />
        </Container>
    )
}